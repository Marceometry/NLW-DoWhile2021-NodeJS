import { Router } from 'express'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import {
  AuthUserController,
  ProfileUserController,
  CreateMessageController,
  GetLast3MessagesController,
} from './controllers'

const router = Router()

router.post('/authenticate', new AuthUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)

router.get('/messages/last3', new GetLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }
