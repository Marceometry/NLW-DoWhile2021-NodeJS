import { Request, Response } from 'express'
import { ProfileUserService } from '../services'

class ProfileUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req

    const service = new ProfileUserService()

    try {
      const result = await service.execute(user_id)
      return res.json(result)
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }
}

export { ProfileUserController }
