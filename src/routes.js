import { Router } from 'express'

import DeskController from './app/controllers/DeskController'
import UserController from './app/controllers/UserController'
import SpotController from './app/controllers/SpotController'
import DepartmentController from './app/controllers/DepartmentController'

const routes = new Router()

routes.post('/desks', DeskController.store)

routes.post('/users', UserController.store)

routes.post('/departments', DepartmentController.store)

routes.get('/spots', SpotController.index)
routes.put('/spots', SpotController.update)

export default routes
