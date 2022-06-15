import React, {useState} from "react";
import styled from "styled-components";
import Flex from "./Flex";

const StyledConsole = styled.textarea`
  width: 100%;
  height: 70vh;
  background: black;
  font-size: 24px;
  border: none;
  resize: none;
  color: ${({color}) => color || "white"};
  &:focus {
    outline: none;
  }
`


const Console = ({color, ...props}) => {
    const [lines, setlines] = useState(['C/users/ULBI_TV>'])
    return (
        <Flex>
            <Flex direction={"column"}>
                {lines.map(line =>
               <line color={color}>{line}</line>
                )}
            </Flex>
            <StyledConsole color={color} {...props}/>
        </Flex>
    )

};


export default Console;