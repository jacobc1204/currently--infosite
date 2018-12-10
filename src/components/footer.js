import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #303036;
  height: 300px;
  font-size: 2em;
  text-align: center;
  display: grid;
`;

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <a href="https://www.jacobhcarlton.com" >jacobhcarlton.com</a>
        <a class="bmc-button" target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/fZzVWj2Ml">
        <img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ marginLeft: 5 }}>Buy me a coffee</span>
        </a>
      </Container>
    )
  }
}
