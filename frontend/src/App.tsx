import React from 'react'
import Layout from './components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import { TodoContextProvider } from './contexts/TodoContext'

const App = () => {
  return (
    <>
      <TodoContextProvider>
        <Layout />
        <GlobalStyles/>
      </TodoContextProvider>
    </>
  )
}

export default App
