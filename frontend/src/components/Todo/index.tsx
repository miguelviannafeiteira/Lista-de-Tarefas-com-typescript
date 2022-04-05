/* eslint-disable no-use-before-define */
import React from 'react'
import { Container, Button } from './styles'
import { IoCloseOutline } from 'react-icons/io5'
import api from '../../services/api'
import { useAxios } from '../../hook/useAxios'

interface TodoApi {
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

  return (
    <li>
      <Container>
        <div>
          <input type="checkbox" />
          <label htmlFor="">{name}</label>
        </div>
        <Button onClick={() => handleDelete(_id)}>
          <IoCloseOutline/>
        </Button>
      </Container>
    </li>
  )
}

export default Todo
