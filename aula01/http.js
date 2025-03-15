let { createServer } = require('http')

let server = createServer(
    (requisicao, resposta) => {
        resposta.writeHead(200, {
            "Content-Type": "text/html"
        })

        resposta.write('<h1>Hello World</h1>')
        resposta.write('<h1>Sub Titulo</h1>')
        resposta.end()
    }
)

server.listen(8000)

console.log("Ouvindo a porta 8000")