/* eslint-disable no-use-before-define */
import React, { useContext } from 'react'
import { Container } from './styles'
import Switch from 'react-js-switch'
import { ThemeContext } from 'styled-components'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
    <div>TODO</div>
    <Switch
    value={title === 'light'}
    onChange={toggleTheme}
    size={40}
    />
    </Container>
  )
}

export default Header
