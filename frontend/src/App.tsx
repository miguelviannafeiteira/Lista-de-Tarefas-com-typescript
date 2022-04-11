/* eslint-disable no-use-before-define */
import React from 'react'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import { TodoContextProvider } from './contexts/TodoContext'

const App = () => {
  return (
    <>
    <TodoContextProvider>
      <Layout />
    </TodoContextProvider>
    <GlobalStyles/>
    </>
  )
}

export default App
