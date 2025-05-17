import {Router} from 'express'
import knex from './../database/knex'

const routes = Router()

routes.get('/', (req, res) => {
    knex('categorias').then((banco) => {
        res.json({categorias: banco})
    })
})

routes.post('/', (req, res) => {

    if (!req.body?.nome) {
        res.status(404).json({
            mensagem: "Nome é obrigatório!"
        })
        return
    }

    knex('categorias').insert(req.body)
    .then(() => {
        res.json({mensagem: 'Cadastrou uma nova categoria'})
    })
})

export default routes
