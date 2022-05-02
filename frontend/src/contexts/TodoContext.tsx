import React, { createContext, ReactNode, useState } from 'react'

export type TodoApi = {
  _id:string,
  name:string,
  complete:boolean
}

type TodoContextType = {
  id: string,
  name: string,
  complete: boolean,
  todos: TodoApi[],
  setId:(newstate: string) => void,
  setName:(newstate: string) => void,
  setComplete:(newstate: boolean) => void,
  setTodos:(newstate: TodoApi[]) => void
}

type TodoContextProps = {
  children: ReactNode
}

const initialValue = {
  id: '',
  name: '',
  complete: false,
  todos: [],
  setId: () => {},
  setName: () => {},
  setComplete: () => {},
  setTodos: () => {}
}

export const TodoContext = createContext<TodoContextType>(initialValue)

export const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [id, setId] = useState(initialValue.id)
  const [name, setName] = useState(initialValue.name)
  const [complete, setComplete] = useState(initialValue.complete)
  const [todos, setTodos] = useState(initialValue.todos)

  return (
    <TodoContext.Provider value={{ id, setId, name, setName, complete, setComplete, todos, setTodos }}>
      {children}
    </TodoContext.Provider>
  )
}
