import 'dotenv/config'
import express from 'express'
import http from 'http'
import cors from 'cors'
import { Server } from 'socket.io'
import { router } from './routes'

const app = express()
const serverHttp = http.createServer(app)
const io = new Server(serverHttp, {
  cors: {
    origin: '*',
  },
})

app.use(cors())
app.use(express.json())
app.use(router)

io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`)
})

app.get('/github', (req, res) => {
  const URL = 'https://github.com/login/oauth/authorize?client_id='
  res.redirect(URL + process.env.GITHUB_CLIENT_ID)
})

app.get('/signin/callback', (req, res) => {
  const { code } = req.query
  res.json(code)
})

export { serverHttp, io }
