import { Router } from 'express'

import DeskController from './app/controllers/DeskController'
import UserController from './app/controllers/UserController'

const routes = new Router()

routes.post('/desks', DeskController.store)
routes.get('/desks', DeskController.index)

routes.post('/users', UserController.store)

export default routes
