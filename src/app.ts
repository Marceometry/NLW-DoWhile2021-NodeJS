import express from 'express'

const app = express()

const message = `
🚀 Server is running on port 4000
`

app.listen(4000, () => console.log(message))
