import Router from 'express'
import knex from '../database/knex'
import { z } from 'zod';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';


const router = Router();

router.post('/', async (req, res) => {
    const registerBodySchema = z.object({
        email: z.string().email(),
        senha: z.string()
    })

    const objLogin = registerBodySchema.parse(
        req.body
    )

    const user = await knex('usuarios')
        .where({ email: objLogin.email })
        .first()

    if (!user) {
        res.status(400).json({
            message: 'Email ou senha incorretos.'
        })
        return
    }

    const senhaIsIgual = await compare(
        objLogin.senha,
        user.senha
    )

    if (!senhaIsIgual) {
        res.status(400).json({
            message: 'Email ou senha incorretos'
        })
        return
    }

    const token = sign(
        { idUsuario: user.id },
        'NAOPASSARNGM_20452156',
        {
            expiresIn: '5h' // tempo máximo que uma pessoa pode ficar logada (5 horas)
        }
    )

    res.json({
        message: 'Voce logou, parabens!! :D',
        token: token,
        usuario: user
    })

})

export default router