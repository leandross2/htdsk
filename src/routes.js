import { Router } from 'express'

import DeskController from './app/controllers/DeskController'
import UserController from './app/controllers/UserController'
import SpotController from './app/controllers/SpotController'
import DepartmentsController from './app/controllers/DepartmentsController'

const routes = new Router()

routes.post('/desks', DeskController.store)

routes.post('/users', UserController.store)

routes.post('/departments', DepartmentsController.store)

routes.put('/spots', SpotController.update)

export default routes
