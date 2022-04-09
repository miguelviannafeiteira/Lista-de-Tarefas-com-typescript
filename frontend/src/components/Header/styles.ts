import styled from 'styled-components'

export const Container = styled.header`
display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  max-width: 850px;
  width: 100%;
  margin: 0 auto 50px auto;
  padding-top: 50px;
  font-size: 26px;
  letter-spacing: 20px;
  div {
    cursor:pointer;
    svg{
      width: 30px;
      height: 30px;
    }
  }
`
