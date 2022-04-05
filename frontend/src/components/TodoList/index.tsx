/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import Todo from '../Todo'
import { Container, TodoListWrapper } from './styles'

interface TodoApi {
  _id:string,
  name:string,
  complete:boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoApi[]>([])

  useEffect(() => {
    api.get('todos').then(({ data }) => {
      setTodos(data.todos)
    })
  }, [todos])

  return (
    <>
    <Container>
      <TodoListWrapper>
      {todos?.map((todo) => (
          <Todo
          key={todo._id}
          _id={todo._id}
          name={todo.name}
          complete={todo.complete}
          />
      ))}
      </TodoListWrapper>
    </Container>
    </>
  )
}

export default TodoList
