import {Router} from 'express'

import categoria from './categorias'

const routes = Router

routes.arguments('/categorias', categoria)


export default routes
