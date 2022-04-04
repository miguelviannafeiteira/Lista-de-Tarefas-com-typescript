/* eslint-disable no-use-before-define */
import React from 'react'
import Footer from '../Footer'
import Form from '../Form'
import Header from '../Header'
import TodoList from '../TodoList'
import { Container, ContainerBG, TodoContainer } from './styles'

const Layout = () => {
  return (
    <ContainerBG>
      <Container>
        <Header />
        <TodoContainer>
          <Form/>
          <TodoList />
        </TodoContainer>
        <Footer />
      </Container>
    </ContainerBG>
  )
}

export default Layout
