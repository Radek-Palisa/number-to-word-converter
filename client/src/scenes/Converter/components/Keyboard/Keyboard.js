import React, { Component } from 'react';
import KeyboardButton from './components/KeyboardButton/KeyboardButton';

const t9 = [
    { number: '1', letters: [''] },
    { number: '2', letters: ['a', 'b', 'c'] },
    { number: '3', letters: ['d', 'e', 'f'] },
    { number: '4', letters: ['g', 'h', 'i'] },
    { number: '5', letters: ['j', 'k', 'l'] },
    { number: '6', letters: ['m', 'n', 'o'] },
    { number: '7', letters: ['p', 'q', 'r', 's'] },
    { number: '8', letters: ['t', 'u', 'v'] },
    { number: '9', letters: ['w', 'x', 'y', 'z'] }, 
    { number: '|', letters: [''] }, // uppercase
    { number: '0', letters: ['_'] }, // space
    { number: 'X', letters: [''], } // delete
]

class Keyboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentInput: {
                numbers: '',
                letters: ''
            }
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.submitInput = this.submitInput.bind(this);
    }

    componentDidUpdate() {
        console.log(this.state.currentInput)

        if (this.state.currentInput.numbers) {
            console.log('gonna fetch suggestions')
        } else {
            // ask DisplayInput if previous word need to be deleted
        }
    }

    handleButtonClick(buttonProps) {

        switch (buttonProps.number) {
            case '|':
                // TODO: implement uppercasing
                console.log('uppercase');
                break;
            case 'X':
                this.setState(prevState => ({ 
                    currentInput: {
                        numbers: prevState.currentInput.numbers.slice(0, -1),
                        letters: prevState.currentInput.letters.slice(0, -1)
                    }
                }))
                break;   
            case '0':
                this.submitInput();
                break;
            case '1':
                console.log('number 1 does nothing, sorry');
                break;
            default:
                this.setState(prevState => ({ 
                    currentInput: {
                        numbers: prevState.currentInput.numbers + buttonProps.number,
                        letters: prevState.currentInput.letters + buttonProps.letters[0]
                    }
                }))      
        }
    }

    submitInput() {
        console.log('space calls props.submit to trigger display');
        this.setState({currentInput: { numbers: '', letters: ''}})
    }

    render() {
        return (
            <div>
                Keyboard
                <br />
                {t9.map(item => {
                    return (
                        <KeyboardButton 
                            key={item.number}
                            number={item.number}
                            letters={item.letters}
                            onClick={this.handleButtonClick}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Keyboard;