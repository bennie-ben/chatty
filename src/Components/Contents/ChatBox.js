import React from 'react';
import styled from 'styled-components';

// Box Style
const BoxWrapper = styled.div`
  display: grid;
  grid-auto-rows: repeat(3, 1fr);
  place-items: center center;
`
const Grid = styled.div`
  display: grid;
  place-items: center center;
  grid-auto-columns: 3fr 1fr;
  grid-auto-flow: columns;
`
const List = styled.ul`
  display: grid;
  grid-auto-rows: repeat(3, 1fr);
  place-items: center center;
  grid-gap: 77px;
`

// Form Style
const FormWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-auto-columns: 6fr 1fr;
  grid-auto-flow: column;
`
const Text = styled.input`
  width: 280px;
  height: 22px;
  text-align: center;
  border-radius: 2px;
  background-color: transparent;
  border: none;
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3);
  transition: 0.2s ease-in;
  color: black;
  :focus {
    outline: none;
    box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.7);
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: black;
    opacity: 0.6; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: black;
    opacity: 0.6;
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: black;
    opacity: 0.6;
}
`
const Send = styled.button`
  height: 24px;
  border-radius: 2px;
  background-color: transparent;
  border: none;
  color: rgba(0,0,0,0.6);
  box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.3);
  transition: 0.2s ease-in;
  :focus{
    outline: none;
    box-shadow: 0px 0px 4px 1px rgba(0,0,0,0.7);
  }
  cursor: pointer;
`
// Components
const Box = ({users}) =>{
  return (
    <List>
      {users.map((user,key)=>{
        return(
          <li key={key}>
            <span>{user.username}</span>
            <span>{user.text}</span>
          </li>
        );
      })}
    </List>
  );
};

const Form =()=>{
  return(
    <>
    <Text type="text" placeholder="Type here"/>
    <Send type="submit">Send</Send>
    </>
  );
}

class ChatBox extends React.Component{
  state = {
    users:[
      {
        username: "Ben",
        text: "aaa",
      },
      {
        username: "SomeOne 1",
        text: "bbb",
      },
      {
        username: "SomeOne 2",
        text: "cccc",
      }
    ]
  }
  _handleSubmit = e => e.preventDefault();

  render(){
    return(
      <Grid>
        <BoxWrapper>
          <Box users={this.state.users}/>
        </BoxWrapper>
        <FormWrapper>
          <Form onSubmit={this._handleSubmit}></Form>
        </FormWrapper>
      </Grid>
    );
  }
}

export default ChatBox;