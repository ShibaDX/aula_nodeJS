import {Router} from 'express'
import knex from './../database/knex'
import { z } from 'zod'
import { hash } from 'bcrypt'

const router = Router()

router.get('/', (req, res) => {
    knex('usuarios').then((users) => {
        res.json({usuarios: users})
    })
})

router.post('/', (req, res) => {

const registerBodySchema = z.object({
    nome: z.string(),
    email: z.string().email(),
    senha: z.string().min(6)
})

const objSalvar = registerBodySchema.parse(
    req.body
)

objSalvar.senha = hash(objSalvar.senha, 8)

    knex('usuarios').insert(objSalvar)
    .then((resposta) => {
        res.json({
            mensagem: 'Cadastrou um novo usuario!',
            usuario: resposta
        })
    })
})

export default router