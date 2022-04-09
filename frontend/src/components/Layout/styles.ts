import styled from 'styled-components'
import bgDark from '../../images/bg-desktop-dark.jpg'
import bgLight from '../../images/bg-desktop-light.jpg'

export const ContainerBG = styled.div`
width:100%;
height:100vh;
background-color:${props => props.theme.colors.background};
`

export const Container = styled.div`
background-image:url(${(props) => props.theme.title === 'dark' ? `${bgDark}` : `${bgLight}`});

background-position: center;
background-repeat: no-repeat;
background-size: cover;
height:390px;
color:${props => props.theme.colors.text};
`

export const TodoContainer = styled.div`
`
