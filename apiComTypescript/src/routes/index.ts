import { Router } from 'express'

import categoria from './categorias'
import usuario from './usuarios'
import session from './session'
import autenticacao from '../middlewares/autenticacao'

const routes = Router()

routes.use('/usuarios', usuario)
routes.use('/session', session)
routes.use(autenticacao) // ^ pra cima - não precisa de autenticação / V pra baixo - precisa de autenticação
// routes.use('/categorias', autenticacao, categoria) alternativo
routes.use('/categorias', categoria)

export default routes
