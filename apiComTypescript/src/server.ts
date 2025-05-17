import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(cors())

app.use(express.json()) // permite o recebimento de dados do tipo json nas requisições

const PORT = 3001

app.use(routes)

app.listen(PORT, () => {
    console.log('Express iniciou na porta:' +
        PORT
    )
})