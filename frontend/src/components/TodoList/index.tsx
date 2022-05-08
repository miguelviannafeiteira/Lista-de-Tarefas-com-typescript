/* eslint-disable no-use-before-define */
import React, { useState, useEffect, useContext } from 'react'
import { useAxios } from '../../hook/useAxios'
import cn from 'clsx'
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd'
import api from '../../services/api'
import Todo from '../Todo'
import { Container, TodoListWrapper, Footer } from './styles'
import { TodoContext, TodoApi } from '../../contexts/TodoContext'

const TodoList = () => {
  const { data } = useAxios('todos')
  const [selected, setSelected] = useState<string>('All')
  const { todos, setTodos } = useContext(TodoContext)

  useEffect(() => {
    setTodos(data?.todos)
    setSelected('All')
    console.log(data)
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
    todos.forEach(todo => todo.complete ? api.delete(`todos/${todo._id}`) : todo)
    // const updatedTodos = {
    //   todos: todos.filter((todo) => todo.complete === false)
    // }
    // mutate(updatedTodos, false)
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if (!destination) return

    const items = Array.from(todos)
    const [newOrder] = items.splice(source.index, 1)
    items.splice(destination.index, 0, newOrder)

    setTodos(items)
  }

  return (
    <>
      <Container>
       <TodoListWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='todo'>
              {(provided) => (
                <ul id="todos"className='todos' {...provided.droppableProps} ref={provided.innerRef}>
                  {todos?.map((todo, index) => {
                    return (
                      <Draggable key={todo._id} draggableId={todo._id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          >
                        <Todo
                        key={todo._id}
                        _id={todo._id}
                        name={todo.name}
                        complete={todo.complete}
                        />
                          </li>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
     </TodoListWrapper>
      <Footer>
        <div id="footer">
          <p>{todos ? todos.length : 0} items left</p>
          <div className='buttons'>
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
