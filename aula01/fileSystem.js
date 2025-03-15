// let {  } = require('bootstrap')
let { writeFile, readFile } = require('fs')

// function exemploFuncao(val1, val2) {
//     console.log(val1 + val2)
// }
// exemploFuncao();

writeFile(
    "arquivo.txt",
    "Texto escrito pelo VSCOde",
    (erro) => {
        if (erro) {
            throw erro
        } else {
            console.log('Escreveu com Sucesso :D')
        }
    }
)

readFile(
    'arquivo.txt',
    'utf-8',
    (erro, texto) => {
        if (erro) {
            throw erro
        } else {
            console.log(texto)
        }
    }
)
