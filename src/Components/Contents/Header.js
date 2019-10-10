import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  place-items: center center;
`

const Header = () =>{
  return <Grid><h1>Chat Room</h1></Grid>
};

export default Header;