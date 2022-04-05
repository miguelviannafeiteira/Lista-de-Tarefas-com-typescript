
import React, { createContext, ReactNode, useState } from 'react'

interface TodoContextType {
  id: string,
  name: string,
  complete: boolean,
  setId:(newstate: string) => void
  setName:(newstate: string) => void
  setComplete:(newstate: boolean) => void
}

interface TodoContextProps {
  children: ReactNode
}

const initialValue = {
  id: '',
  name: '',
  complete: false,
  setId: () => {},
  setName: () => {},
  setComplete: () => {}
}

export const TodoContext = createContext<TodoContextType>(initialValue)

export const TodoContextProvider = ({ children }: TodoContextProps) => {
  const [id, setId] = useState(initialValue.id)
  const [name, setName] = useState(initialValue.name)
  const [complete, setComplete] = useState(initialValue.complete)

  return (
    <TodoContext.Provider value={{ id, setId, name, setName, complete, setComplete }}>
      {children}
    </TodoContext.Provider>
  )
}
