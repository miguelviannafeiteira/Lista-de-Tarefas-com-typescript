/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { useAxios } from '../../hook/useAxios'
import api from '../../services/api'
import Todo from '../Todo'
import { Container, TodoListWrapper, Footer } from './styles'
import cn from 'clsx'

interface TodoApi {
  _id:string,
  name:string,
  complete:boolean
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoApi[]>([])
  const { data, mutate } = useAxios('todos')
  const [selected, setSelected] = useState<string>('All')

  useEffect(() => {
    setTodos(data?.todos)
    setSelected('All')
  }, [data])

  // -----------------------------------------------------------

  const showAll = () => {
    setTodos(data.todos)
    setSelected('All')
  }

  const showActive = () => {
    const filterActive = data?.todos.filter((todo:TodoApi) => {
      return todo.complete === false
    })
    setTodos(filterActive)
    setSelected('Active')
  }

  const showCompleted = () => {
    const filterCompleted = data?.todos.filter((todo:TodoApi) => {
      return todo.complete
    })
    setTodos(filterCompleted)
    setSelected('Completed')
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
      {todos?.length === 0
        ? <div><h2>Não há tarefas.</h2></div>
        : todos?.map((todo:TodoApi) => (
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
            <button className={cn({ active: selected === 'All' })} onClick={showAll}>All</button>
            <button className={cn({ active: selected === 'Active' })} onClick={showActive}>Active</button>
            <button className={cn({ active: selected === 'Completed' })} onClick={showCompleted}>Completed</button>
          </div>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      </Footer>
    </Container>
    </>
  )
}

export default TodoList
