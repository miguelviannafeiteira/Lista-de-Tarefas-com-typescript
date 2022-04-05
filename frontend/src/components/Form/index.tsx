/* eslint-disable no-use-before-define */
import React, { FormEvent, useContext } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import api from '../../services/api'
import { Container, FormContainer, InputGroup } from './styles'

const Form = () => {
  const { setName, name } = useContext(TodoContext)
  const handleSubmit = (e:FormEvent) => {
    e.preventDefault()

    const todo = {
      name
    }
    api.post('todos', todo)
    setName('')
  }

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>
      </FormContainer>
    </Container>
  )
}

export default Form
