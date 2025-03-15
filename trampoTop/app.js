let express = require('express')
const db = require('./db/conexao.js')

let app = express();

const PORT = 3001;

db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log('Erro ao conectar no banco')
        console.log(erro)
    })

// muda URL para = http://localhost:3001/categorias
app.use('/categorias', require('./routes/categorias.js'))

app.listen(PORT, () => {
    console.log('Servidor executando na porta ' + PORT)
})
