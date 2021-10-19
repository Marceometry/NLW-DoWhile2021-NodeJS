import { Router } from 'express'
import { AuthUserController } from './controllers/AuthUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', AuthUserController().handle)

router.post('/messages', ensureAuthenticated, CreateMessageController().handle)

export { router }
