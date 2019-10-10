import React from 'react';
import styled from "styled-components";
import GlobalStyle from './GlobalStyle';
import ChatRoom from "./Components/ChatRoom";

const Wrapper = styled.div`
  display: grid;
  place-items: center center;
  grid-auto-flow: columns;
`

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Wrapper>
          <GlobalStyle/>
          <ChatRoom/>
        </Wrapper>
      </div>
    );
  }
}

export default App;
