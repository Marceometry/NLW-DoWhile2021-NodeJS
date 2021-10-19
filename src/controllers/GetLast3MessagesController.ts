import { Request, Response } from 'express'
import { GetLast3MessagesService } from '../services'

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    const service = new GetLast3MessagesService()

    try {
      const result = await service.execute()
      return res.json(result)
    } catch (error: any) {
      return res.json({ error: error.message })
    }
  }
}

export { GetLast3MessagesController }
