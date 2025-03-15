let express = require('express')

let app = express()

//http://localhost:8000/
app.get('/', (requisicao, resposta) => {
    resposta.send('Primeira rota com Express')
})

app.post('/unialfa', (requisicao, resposta) => {
    resposta.send('Rota da unialfa')
})

app.listen(8000, () => {
    console.log("A aplicação está funcionando na porta 8000")
})