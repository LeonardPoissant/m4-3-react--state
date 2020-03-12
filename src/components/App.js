import React from "react";
import styled from "styled-components";
import data from "../data";

import Typehead from "./Typehead";

function App() {
  return (
    <>
      <div />
      <Wrapper>
        <Typehead
          suggestions={data.books}
          handleSelect={suggestion => {
            window.alert(suggestion);
          }}
        ></Typehead>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;
`;

export default App;
