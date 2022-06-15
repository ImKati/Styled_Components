import React from 'react';
import styled, {css, keyframes} from "styled-components";


const rotateAnimation = keyframes`
0%{
  transform: rotateZ(0deg);
}
  100% {
    transform: rotateZ(360deg);
  }
`
const StyleButton = styled.button.attrs(props => ({
    outlined: true,
}))`
  border: none;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
&: hover {
  animation: ${rotateAnimation} 1s infinite linear;
}
  align-self: ${props => props.align || 'stretch'};
  ${props => props.primary && `
        color: ${props => props.primary || 'white'};
        background: ${props => props.background || 'white'};
          
`}
  ${props => props.outlined && css `
        color: ${props => props.primary || 'white'};
        background: transparent;
    border: 1px solid ${props => props.primary || 'white'};
          
`}
`

const LargeButton = styled(LargeButton)`
font-size: 32px;
`







const Button = (props) => {

    return <LargeButton {...props}/>
};


export default Button;
