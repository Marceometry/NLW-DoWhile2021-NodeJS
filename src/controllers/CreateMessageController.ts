import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'

export function CreateMessageController() {
  async function handle(req: Request, res: Response) {
    const { message } = req.body
    const { user_id } = req

    const service = CreateMessageService()

    try {
      const result = await service.execute(message, user_id)
      return res.json(result)
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }

  return { handle }
}
