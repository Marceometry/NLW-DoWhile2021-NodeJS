import axios from 'axios'
import { sign } from 'jsonwebtoken'
import prismaClient from '../prisma'

interface AccessTokenResponse {
  access_token: string
}

interface UserResponse {
  avatar_url: string
  login: string
  name: string
  id: number
}

class AuthUserService {
  async execute(code: string) {
    const url = 'https://github.com/login/oauth/access_token'

    const { data } = await axios.post<AccessTokenResponse>(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        Accept: 'application/json',
      },
    })

    const response = await axios.get<UserResponse>(
      'https://api.github.com/user',
      {
        headers: { authorization: `Bearer ${data.access_token}` },
      }
    )

    const { login, id, avatar_url, name } = response.data

    let user = await prismaClient.user.findFirst({
      where: {
        github_id: id
      }
    })

    if (!user) {
      user = await prismaClient.user.create({
        data: {
          name,
          login,
          avatar_url,
          github_id: id,
        }
      })
    }

    const token = sign(
      {
        user: {
          id: user.id,
          name: user.name,
          avatar_url: user.avatar_url,
        }
      },
      process.env.JWT_SECRET || '',
      {
        subject: user.id,
        expiresIn: '1d'
      }
    )

    return { token, user }
  }
}

export { AuthUserService }
