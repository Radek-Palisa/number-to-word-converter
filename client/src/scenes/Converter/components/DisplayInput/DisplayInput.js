import React, { Component } from 'react';

class DisplayInput extends Component {

    render() {
        return (
            <div>
                {this.props.currentInput.numbers}
                <br />
                {this.props.currentInput.letters}
                <br />
                Message: 
                {this.props.currentMessage} 
            </div>
        );
    }
}

export default DisplayInput;