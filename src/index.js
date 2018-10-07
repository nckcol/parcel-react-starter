import React, {Component} from 'react';
import {render} from 'react-dom';
import styled from 'astroturf';

const Title = styled('h1')`
  font-family: sans-serif;
  text-align: center;

  &.primary {
    color: blue;
  }
`;

class App extends Component {
  render() {
    return <Title primary>Hello world!</Title>;
  }
}

render(<App />, document.querySelector('#root'));
