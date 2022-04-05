import React from 'react'
import { Container, Button } from './styles'
import { IoCloseOutline } from 'react-icons/io5'
import api from '../../services/api'

interface TodoApi {
  _id:string,
  name:string,
  complete:boolean
}

const Todo :React.FC<TodoApi> = ({ _id, name, complete }:TodoApi) => {
  const handleDelete = (id:string) => {
    api.delete(`todos/${id}`)
    console.log(id)
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
