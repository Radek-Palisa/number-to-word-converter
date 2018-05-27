import React, { Component } from 'react';
import MessageItem from './components/MessageItem/MessageItem';
import './DisplayMessages.css'

class DisplayMessages extends Component {
  render() {
    return (
        <div className="displayMessages">
            <ol className="displayMessages__list">
                <MessageItem 
                    position="left"
                    text="I heard you want to join kiwi.com" />
                <MessageItem 
                    position="right"
                    text="Sure! But I need to finish this assignment first..." />
                {this.props.messages.map((message, i) => {
                    return (
                        <MessageItem
                            key={i}
                            position={message.position}
                            text={message.text} />
                    )
                })}
            </ol>
        </div>
    );
  }
}

export default DisplayMessages;