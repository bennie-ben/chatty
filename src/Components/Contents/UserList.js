import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-auto-rows: 1fr 5fr;
`
const List = styled.ul`
  display: grid;

`
const Nav = styled.nav`
  background-color: rgba(238,238,238, 0.04);
  padding: 10px;
  border-radius: 0px 0px 6px 0px;
`
const Header = styled.span`
  background-color: rgba(238,238,238, 0.09);
  padding: 7px;
  text-align: center;
  border-radius: 0px 6px 0px 0px;
`

const UserList = ({users}) =>{
  return(
    <Grid>
      <Header>
        <h3>User List</h3>
      </Header>
      <Nav>
        <List>
          {users.map((user, key)=><li key={key}><span>{user.username}</span></li>)}
        </List>
      </Nav>
    </Grid>
  );
};

export default UserList;