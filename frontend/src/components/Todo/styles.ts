import styled from 'styled-components'

export const Container = styled.div`
padding: 5px 0 5px 0;
`

interface PropTypeComplete {
  complete:boolean;
}
export const TodoArea = styled.div.attrs((props: PropTypeComplete) => ({
  background: props.complete
}))<PropTypeComplete>`
display:flex;
align-items:center;
justify-content:space-between;
width:153px;
background-color:${(props) => (props.complete ? 'yellow' : 'red')}
`

export const Button = styled.button``
