import styled from 'styled-components'

export const ContainerBG = styled.div`
width:100%;
height:100vh;
background-color:${props => props.theme.colors.background};

`

export const Container = styled.div`
background:${props => props.theme.colors.secondary};
color:${props => props.theme.colors.text};
height:264px;

`

export const TodoContainer = styled.div`
margin:0 auto;
width:100px;
height:100px;

`
