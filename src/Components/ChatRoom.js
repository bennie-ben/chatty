import React from 'react';
import styled from 'styled-components';
import UserList from './Contents/UserList';
import Header from './Contents/Header';
import ChatBox from './Contents/ChatBox';

const Wrapper = styled.div`
  display: grid;

`
const ChatRoomWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 4fr 1fr;
  box-shadow: 0px 0px 14px 1px rgba(0,0,0,0.3);
  background-color: rgba(238,238,238, 0.06);
  border-radius: 4px;
`

class ChatRoom extends React.Component{
  state = {
    users:[
      {
        username: "Ben",
        text: "",
      },
      {
        username: "SomeOne 1",
        text: "",
      },
      {
        username: "SomeOne 2",
        text: "",
      }
    ]
  }

  render(){
    return (
      <Wrapper>
        <Header/>
        <ChatRoomWrapper>
          <ChatBox users={this.state.users}/>
          <UserList users={this.state.users}/>
        </ChatRoomWrapper>
      </Wrapper>
    );
  }
};

export default ChatRoom;