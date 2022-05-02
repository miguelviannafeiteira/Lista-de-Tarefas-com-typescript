/* eslint-disable no-use-before-define */
import React, { FormEvent, useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { useAxios } from '../../hook/useAxios'
import api from '../../services/api'
import { FormContainer, Input } from './styles'

const Form = () => {
  const { setName, name } = useContext(TodoContext)
  const { data, mutate } = useAxios('todos')

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()
    const todo = {
      name,
      complete: false
    }
    api.post('todos', todo)

    // perguntar para o Leo
    // setTodos((prev: TodoApi[]) => {
    //   const total = { ...prev, todo }
    //   return total
    // })

    setName('')

    const updatedTodos = {
      todos: [...data.todos, todo]
    }
    mutate(updatedTodos, false)
  }

  return (
      <FormContainer onSubmit={handleSubmit}>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormContainer>
  )
}

export default Form
