import express from 'express'
import TodoController from './controllers/TodoController'
import Todomiddleware from './middlewares/Todomiddleware'

const routes = express.Router()
routes.get('/todos', TodoController.index)
routes.post('/todos', TodoController.store)
routes.delete('/todos/:id', Todomiddleware.validateId, TodoController.delete)

export default routes
