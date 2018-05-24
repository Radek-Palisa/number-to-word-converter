import React, { Component } from 'react';
import KeyboardButton from './components/KeyboardButton/KeyboardButton';

class Keyboard extends Component {
  render() {
    return (
        <div>
            Keyboard
            <KeyboardButton />
        </div>
    );
  }
}

export default Keyboard;