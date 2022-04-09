/* eslint-disable no-use-before-define */
import React from 'react'
import { Container } from './styles'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { DefaultTheme } from 'styled-components'

interface Props {
  toggleTheme(): void,
  theme: DefaultTheme
}

const Header: React.FC<Props> = ({ toggleTheme, theme }) => {
  return (
    <Container>
    <h1>TODO</h1>
    <div onClick={toggleTheme}>{theme.title === 'dark' ? <IoSunnyOutline /> : <IoMoonOutline />}</div>
    </Container>
  )
}

export default Header
