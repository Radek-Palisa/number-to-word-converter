import React, { Component } from 'react';
import DisplayMessages from './components/DisplayMessages/DisplayMessages';
import DisplayInput from './components/DisplayInput/DisplayInput';
import Suggestions from './components/Suggestions/Suggestions';
import Keyboard from './components/Keyboard/Keyboard';

class Converter extends Component {
    constructor(props) {
        super()
        this.state = {
            currentMessage: '',
            currentInput: {
                numbers: '',
                letters: ''
            },
            suggestions: ['hello', 'world'],
            wordChosen: null
        }

        this.updateCurrentInput = this.updateCurrentInput.bind(this)
        this.addWord = this.addWord.bind(this);
        this.deleteWord = this.deleteWord.bind(this);
    }

    updateCurrentInput(value) {
        this.setState({currentInput: value})
    }

    addWord(word) {
        this.setState(prevState => ({
            currentMessage: prevState.currentMessage ? 
                prevState.currentMessage + word + '_' :
                word + '_',
            currentInput: {
                numbers: '',
                letters: ''
            },
            suggestions: []
        }))
    }

    deleteWord() {

    }

    render() {
        return (
            <div>
                <DisplayMessages />
                <DisplayInput 
                    currentMessage={this.state.currentMessage}
                    currentInput={this.state.currentInput} />
                <Suggestions 
                    suggestions={this.state.suggestions}
                    addWord={this.addWord} />
                <Keyboard 
                    addWord={this.addWord}
                    currentInputValues={this.state.currentInput}
                    updateCurrentInput={this.updateCurrentInput} />
            </div>
        );
    }
}

export default Converter;