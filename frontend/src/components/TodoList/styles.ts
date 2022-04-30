import styled from 'styled-components'

export const Container = styled.div`
width:850px;
margin:0 auto;
box-shadow:1px 1px 20px 5px rgba(0, 0, 0, 0.2);
@media(max-width:875px) {
      width:400px;
      margin:0 auto;
  }
`

export const TodoListWrapper = styled.div`

ul{
    width: 850px;
    margin:0 auto 0 auto;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px 10px 0 0;
  div {
    text-align:center;
  }
  li {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  @media(max-width:875px) {
      width:400px;
  }
}
`

export const Footer = styled.footer`
display:block;
width: 850px;
margin:0 auto;
#footer{
  display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 850px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    height: 61px;
    color: ${props => props.theme.colors.footer};
    border-radius: 0 0 10px 10px;
    padding: 0 20px 0 20px ;
    position:relative;

    button {
    background-color: transparent;
    border: none;
    color: ${props => props.theme.colors.footer};
    margin-right: 20px;
    font-size: 16px;
    cursor:pointer;
    &:hover{
      color:${props => props.theme.colors.hover};
    }
    &.active{
      color:${props => props.theme.colors.active};
    } 
  }

  @media(max-width:875px) {
      width:400px;
  }
}

  @media(max-width:875px) {
    .buttons {
      background: ${props => props.theme.colors.primary};
      width:400px;
      height:61px;
      border-radius:8px;
      display:flex;
      justify-content:center;
      position:absolute;
      top:100px;
    }
  }
`
