import { serverHttp } from './app'

const message = `
🚀 Server is running at http://localhost:4000
`

serverHttp.listen(4000, () => console.log(message))
