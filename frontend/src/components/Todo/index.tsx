import React from 'react'
import { Container, Button } from './styles'
import { IoCloseOutline } from 'react-icons/io5'

interface TodoApi {
  _id:string,
  name:string,
  complete:boolean
}

const Todo :React.FC<TodoApi> = ({ _id, name, complete }:TodoApi) => {
  return (
    <li>
      <Container>
        <div>
          <input type="checkbox" />
          <label htmlFor="">{name}</label>
        </div>
        <Button>
          <IoCloseOutline/>
        </Button>
      </Container>
    </li>
  )
}

export default Todo
