/* eslint-disable no-use-before-define */
import React from 'react'
import Form from '../Form'
import Header from '../Header'
import TodoList from '../TodoList'
import { Container, ContainerBG, TodoContainer } from './styles'
import { usePersistedState } from '../../hook/usePersistedState'
import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'
import { ThemeProvider, DefaultTheme } from 'styled-components'

const Layout = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)
  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark)
  }
  return (
    <ThemeProvider theme={theme}>
      <ContainerBG>
        <Container theme={theme}>
          <Header toggleTheme={toggleTheme} theme={theme} />
          <TodoContainer>
            <Form/>
            <TodoList />
          </TodoContainer>
        </Container>
      </ContainerBG>
    </ThemeProvider>

  )
}

export default Layout
