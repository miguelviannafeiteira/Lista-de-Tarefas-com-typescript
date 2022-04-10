import styled from 'styled-components'
import checked from '../../images/icon-check.svg'
import close from '../../images/icon-cross.svg'

export const Container = styled.div`
border-bottom: 1px solid rgba(119, 122, 146, 0.3)
`

export const TodoArea = styled.div`
width:850px;
@media(max-width:875px) {
      width:400px;
  }

display:flex;
align-items:center;
justify-content:space-between;
padding:15px 10px 15px 10px;
 div {
  input[type=checkbox] {
  display: none;
  }
  label {
  padding-left: 70px;
  padding-top:10px;
  padding-bottom:10px;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  cursor: pointer;
  }

  label::before {
  content: '';
  background-image: url(${checked});
  background-position-y: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 12px;
  -webkit-transform: scale(0) rotateZ(180deg);
  transform: scale(0) rotateZ(180deg);
  -webkit-transition: all 0.4s cubic-bezier(0.54, 0.01, 0, 1.49);
  transition: all 0.4s cubic-bezier(0.54, 0.01, 0, 1.49);
  z-index: 2;
  }

  input[type="checkbox"]:checked + label::before {
  -webkit-transform: scale(1) rotateZ(0deg);
  transform: scale(1) rotateZ(0deg);
  }

  label::after {
  content: '';
  border: 1px solid ${props => props.theme.colors.borderColor};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  }

  input[type="checkbox"]:checked + label::after {
  background: linear-gradient(120deg, #57ddff, #c058f3);
  border: none;
  }

  input[type="checkbox"]:checked + label {
  color:  ${props => props.theme.colors.askComplete};
  text-decoration: line-through;
  }
/* 
  input[type="checkbox"]:checked + .tasks.whiteMode {
  color: rgba(147, 148, 165, 0.5);
  text-decoration: line-through;
  } */

}
`

export const Button = styled.button`
  background: url(${close});
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  border: none;
  z-index: 10;
  cursor:pointer;
margin:10px 10px 10px 0
`
