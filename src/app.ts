import 'dotenv/config'
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.get('/github', (req, res) => {
  const URL = 'https://github.com/login/oauth/authorize?client_id='
  res.redirect(URL + process.env.GITHUB_CLIENT_ID)
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query
  res.json(code)
})

const message = `
🚀 Server is running at http://localhost:4000
`

app.listen(4000, () => console.log(message))
