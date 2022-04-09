/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hook/useAxios'
import api from '../../services/api'
// import api from '../../services/api'
import Todo from '../Todo'
import { Container, TodoListWrapper, Footer } from './styles'

interface TodoApi {
  _id:string,
  name:string,
  complete:boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoApi[]>([])
  const { data, mutate } = useAxios('todos')

  useEffect(() => {
    setTodos(data?.todos)
  }, [data])

  // -----------------------------------------------------------

  const showAll = () => {
    setTodos(data.todos)
  }

  const showActive = () => {
    const filterActive = data?.todos.filter((todo:TodoApi) => {
      return todo.complete === false
    })
    setTodos(filterActive)
  }

  const showCompleted = () => {
    const filterCompleted = data?.todos.filter((todo:TodoApi) => {
      return todo.complete
    })
    setTodos(filterCompleted)
  }

  // -------------------------------------------------------------

  const clearCompleted = () => {
    todos.map(todo => todo.complete ? api.delete(`todos/${todo._id}`) : todo)

    const updatedTodos = {
      todos: todos.filter((todo) => todo.complete === false)
    }
    mutate(updatedTodos, false)
  }

  return (
    <>
    <Container>
      <TodoListWrapper>
        <ul>
      {todos?.map((todo:TodoApi) => (
          <Todo
          key={todo._id}
          _id={todo._id}
          name={todo.name}
          complete={todo.complete}
          />
      ))}
      </ul>
      </TodoListWrapper>
      <Footer>
        <div id="footer">
          <p>{todos ? todos.length : 0} items left</p>
          <div>
            <button onClick={showAll}>All</button>
            <button onClick={showActive}>Active</button>
            <button onClick={showCompleted}>Completed</button>
          </div>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </Footer>
    </Container>
    </>
  )
}

export default TodoList
