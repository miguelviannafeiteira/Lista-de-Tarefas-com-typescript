import { validate as isUuid } from 'uuid'
import Todo from '../schemas/Todo'
import { Request, Response, NextFunction } from 'express'

interface resTodo extends Response {
  todo: {
    _id:string,
    name:string,
    complete:boolean
  }
}

class TodoMiddleware {
  async validateId (req:Request, res:resTodo, next:NextFunction):Promise<Response> {
    const { id } = req.params
    if (!isUuid(id)) {
      return res.status(400).json({ err: 'ID inválido' })
    }
    try {
      const todo = await Todo.findById(id)
      res.todo = todo
      if (!todo) {
        return res.status(404).json({ error: 'Todo não encontrado' })
      }
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
    next()
  }
}

export default new TodoMiddleware()
