import { Router } from 'express'
import knex from './../database/knex'
import { z } from 'zod'
import { hash } from 'bcrypt'

const router = Router()

router.get('/', (req, res) => {
    knex('usuarios').then((users) => {
        res.json({ usuarios: users })
    })
})

router.post('/', async (req, res) => {

    const registerBodySchema = z.object({
        nome: z.string(),
        email: z.string().email(),
        senha: z.string().min(6)
    })

    const objSalvar = registerBodySchema.parse(
        req.body
    )
    // faz o código 'esperar' o hash
    objSalvar.senha = await hash(objSalvar.senha, 8)

    const id_usuario = await knex('usuarios').insert(objSalvar)

    const usuarios = await knex('usuarios')
        .where({
            id: id_usuario[0]
        })

    res.json({
        message: 'Usuario cadastrado com sucesso',
        usuario: usuarios
    })

})



export default router