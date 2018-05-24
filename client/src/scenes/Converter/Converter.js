import React, { Component } from 'react';
import DisplayMessages from './components/DisplayMessages/DisplayMessages';
import DisplayInput from './components/DisplayInput/DisplayInput';
import Suggestions from './components/Suggestions/Suggestions';
import Keyboard from './components/Keyboard/Keyboard';

class Converter extends Component {
  render() {
    return (
        <div>
            <DisplayMessages />
            <DisplayInput />
            <Suggestions />
            <Keyboard />
        </div>
    );
  }
}

export default Converter;