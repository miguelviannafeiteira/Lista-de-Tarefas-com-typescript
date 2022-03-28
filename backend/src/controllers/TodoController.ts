import Todo from '../schemas/Todo'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

class TodoController {
  async index (req:Request, res:Response):Promise<Response> {
    try {
      const todos = await Todo.find()
      return res.status(200).json({ todos })
    } catch (err) {
      res.status(500).json({ err: err.message })
    }
  }

  async store (req:Request, res:Response):Promise<Response> {
    const { name } = req.body
    if (!name) {
      return res.status(400).json({ error: 'Preencha o nome da tarefa' })
    }

    const todo = new Todo({
      _id: uuid(),
      name,
      complete: false
    })

    try {
      await todo.save()
      return res.status(201).json(todo)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async delete (req:Request, res) {
    try {
      await res.todo.remove()
      return res.status(200).json({ message: 'Tarefa excluído com sucesso!' })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  }

  async updateComplete (req:Request, res):Promise<Response> {
    res.todo.complete = !res.todo.complete

    try {
      await res.todo.save()
      return res.status(200).json(res.todo)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

export default new TodoController()
