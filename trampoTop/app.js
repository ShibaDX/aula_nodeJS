/* passos para executar o projeto:
1 - abrir o terminal, e executar o comando 'npm install'
2 - executar o comando 'npm run dev'
3 - no navegador, entrar na URL 'localhost:3001'
*/
let express = require('express')
const db = require('./db/conexao.js')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const path = require('path')

let app = express();

const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', path.join(__dirname, 'views'))

app.engine('handlebars', exphbs.engine({ defaultLayout: false }))

app.set('view engine', 'handlebars')

db.authenticate()
    .then(() => {
        console.log('Conectou ao Banco de Dados')
    })
    .catch((erro) => {
        console.log('Erro ao conectar no banco')
        console.log(erro)
    })

// requisicao, resposta
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'Página Inicial'
    })
})

// muda URL para = http://localhost:3001/categorias
app.use('/categorias', require('./routes/categorias'))
app.use('/pessoas', require('./routes/pessoas'))


app.listen(PORT, () => {
    console.log('Servidor executando na porta ' + PORT)
})
