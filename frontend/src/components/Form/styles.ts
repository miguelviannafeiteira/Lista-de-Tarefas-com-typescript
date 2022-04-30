import styled from 'styled-components'

export const FormContainer = styled.form`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
max-width: 850px;
-webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: center;
margin: 0 auto 30px auto;
`

export const Input = styled.input`
  outline: none;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.primary};
  padding-top: 19px;
  padding-left:40px;
  padding-bottom: 19px;
  width: 850px;
  color: ${props => props.theme.colors.text};
  font-size: 20px;
  @media(max-width:875px) {
      width:400px;
  }
`
