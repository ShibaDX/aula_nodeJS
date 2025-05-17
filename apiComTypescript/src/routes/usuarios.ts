import {Router} from 'express'
import knex from './../database/knex'

const router = Router()

router.get('/', (req, res) => {
    knex('usuarios').then((users) => {
        res.json({usuarios: users})
    })
})

router.post('/', (req, res) => {

    knex('usuarios').insert(req.body)
    .then(() => {
        res.json({mensagem: 'Cadastrou um novo usuario!'})
    })
})

export default router