import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #303036;
  height: 300px;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <p>hello</p>
      </Container>
    )
  }
}
