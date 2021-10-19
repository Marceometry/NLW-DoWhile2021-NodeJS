import { Router } from 'express'
import { AuthUserController } from './controllers/AuthUserController'

const router = Router()

router.post('/authenticate', AuthUserController().handle)

export { router }
