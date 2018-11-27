import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  position: sticky;
  top: 0;
  margin: 0;
  height: 75px;
  width: 100%;
  background: #303036;
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  z-index: 1;
`;

const Btn = styled.a`
  text-decoration: none;
  height: 100%;
  width: 11em;
  background-color: #5CBCEC;
  border: none;
  justify-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0 0 0 0.4em;
  font-weight: 200;
  font-size: 2.5em;
  color: #FFFAFF;
`;

class Header extends React.Component {

  render() {
    return (
      <Container>
        <Title>{ this.props.siteTitle }</Title>
        <Btn href="https://app.currentlyapp.xyz/">
          Sign Up
        </Btn>
      </Container>
    )
  }
}

export default Header;