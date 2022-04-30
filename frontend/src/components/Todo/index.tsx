/* eslint-disable no-use-before-define */
import React from 'react'
import { Container, Button, TodoArea } from './styles'
import api from '../../services/api'
import { useAxios } from '../../hook/useAxios'

type TodoApi = {
  _id:string,
  name:string,
  complete:boolean
}

const Todo :React.FC<TodoApi> = ({ _id, name, complete }:TodoApi) => {
  const { data, mutate } = useAxios('todos')

  const handleDelete = (id:string) => {
    api.delete(`todos/${id}`)
    const updatedTodos = {
      todos: data.todos?.filter((todo:TodoApi) => todo._id !== id)
    }
    mutate(updatedTodos, false)
  }

  const handleChangeComplete = (id:string) => {
    api.patch(`todos/${id}`)

    const updatedTodos = {
      todos: data.todos?.map((todo:TodoApi) => {
        if (todo._id === id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    }
    mutate(updatedTodos, false)
  }

  return (
    <li>
      <Container>
        <TodoArea>
          <div>
            <input type="checkbox" id={_id} checked={complete} onChange={() => handleChangeComplete(_id)} />
            <label htmlFor={_id}>{name}</label>
          </div>
          <Button onClick={() => handleDelete(_id)}>
          </Button>
        </TodoArea>
      </Container>
    </li>
  )
}

export default Todo
