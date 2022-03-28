import express from 'express'
import TodoController from './controllers/TodoController'

const routes = express.Router()
routes.get('/todos', TodoController.index)
routes.post('/todos', TodoController.store)

export default routes
