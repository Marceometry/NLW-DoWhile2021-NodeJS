import { Router } from 'express'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'
import {
  AuthUserController,
  ProfileUserController,
  CreateMessageController,
  GetLast3MessagesController,
} from './controllers'

const router = Router()

router.get('/github', (req, res) => {
  const URL = 'https://github.com/login/oauth/authorize?client_id='
  res.redirect(URL + process.env.GITHUB_CLIENT_ID)
})

router.get('/signin/callback', (req, res) => {
  const { code } = req.query
  res.json(code)
})

router.post('/authenticate', new AuthUserController().handle)

router.post(
  '/messages',
  ensureAuthenticated,
  new CreateMessageController().handle
)

router.get('/messages/last3', new GetLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }
