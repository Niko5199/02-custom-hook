import React from "react";
import styled from "styled-components";
import Counter from "./Counter";
import CounterTwo from "./CounterTwo";
import ViewOne from "./ViewOne";
import ViewTwo from "./ViewTwo";

const App = () => {
  return (
    <StyledDivApp>
      <StyledH1App>Repaso Hooks</StyledH1App>
      <ViewTwo />
    </StyledDivApp>
  );
};

export default App;

const StyledDivApp = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 800px;
`;

const StyledH1App = styled.h1`
  font-family: Helvetica, sans-serif;
  font-size: 2 6px;
`;
