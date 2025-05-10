import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(cors())

const PORT = 3001

app.use(routes)

app.get('/categorias', (requisicao, resposta) => {
    resposta.send('Olá Typescript :D')
})

app.listen(PORT, () => {
    console.log('Express iniciou a porta: ' + PORT)
})
