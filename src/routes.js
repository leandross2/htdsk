import { Router } from 'express'

import DeskController from './app/controllers/DeskController'
import UserController from './app/controllers/UserController'
import SpotController from './app/controllers/SpotController'
import DepartmentController from './app/controllers/DepartmentController'
import SessionController from './app/controllers/SessionController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()
routes.get('/', (req, res) => {
  res.json({ sucesso: true })
})
routes.post('/', UserController.store)
routes.post('/users', UserController.store)
routes.post('/session', SessionController.store)

routes.use(authMiddleware)

routes.get('/desks', DeskController.index)
routes.post('/desks', DeskController.store)

routes.post('/departments', DepartmentController.store)
routes.get('/departments', DepartmentController.index)

routes.get('/spots', SpotController.index)
routes.post('/spots/:id', SpotController.store)
routes.delete('/spots', SpotController.delete)

export default routes
