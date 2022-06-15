import React from "react";
import styled from 'styled-components'
import Title from "./component/Title";
import Flex from "./component/Flex";
import Console from "./component/Console";
import Button from "./component/Button";
import Line from "./component/Line";


const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: black;

`

const App = () => {
    return (
        <AppWrapper>
            <Flex justify="centre">
                <Title color={"green"}>Console cmd 2022</Title>
            </Flex>
            <Flex direction="column">
                <Console/>
                <Button color="green" outlined align="flex-end">Отправить</Button>
            </Flex>
        </AppWrapper>
    );
};

export default App;
