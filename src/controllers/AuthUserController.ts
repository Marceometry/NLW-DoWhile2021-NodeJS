import { Request, Response } from 'express'
import { AuthUserService } from '../services/AuthUserService'

export function AuthUserController() {
  async function handle(req: Request, res: Response) {
    const { code } = req.body

    const service = AuthUserService()

    try {
      const result = await service.execute(code)
      return res.json(result)
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }

  return { handle }
}
