import styled from 'styled-components'

export const Container = styled.div`
width:850px;
margin:0 auto
`

export const TodoListWrapper = styled.div`
ul{
width: 850px;
    margin:0 auto 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: grid;
    justify-self:start;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px 10px 0 0;
  li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}
`

export const Footer = styled.footer`
display:block;
width: 850px;
margin-right:500px;
#footer{
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 850px;
    margin: 0 auto 0 auto;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    height: 61px;
    color: ${props => props.theme.colors.secondary};
    border-radius: 0 0 10px 10px;
    margin: -5px 0 0 0;
    padding: 0 20px 0 20px ;


    button {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.secondary};
    margin-right: 20px;
    font-size: 16px;
    cursor:pointer;
    &:hover{
      color:${props => props.theme.colors.hover};
    }
  }
}

`
