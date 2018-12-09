import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #303036;
  height: 300px;
  font-size: 2em;
  text-align: center;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <a href="https://www.jacobhcarlton.com" >jacobhcarlton.com</a>
      </Container>
    )
  }
}
