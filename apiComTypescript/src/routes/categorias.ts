import {Router} from 'express'

const routes = Router()

routes.get('/', (req, res) => {
    res.send('Categoria')
})

export default routes
