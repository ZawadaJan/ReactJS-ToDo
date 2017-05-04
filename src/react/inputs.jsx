import React from 'react';
import ReactDOM from 'react-dom';

export default class Inputs extends React.Component {
    
    
    submitButton(event) {
        event.preventDefault();
        const nameInput = this.refs.nameInput;
        const newName = nameInput.value;
        const emailInput = this.refs.emailInput;
        const newEmail = emailInput.value;
        
        if((newName === '' || newEmail === '')) {
            return null
        } else {
            
            this.props.addToList(newName, newEmail); 
            this.refs.nameInput.value = '';
            this.refs.emailInput.value = '';
            
        }
        
        
        
    }
    
    
    
    render() {
        return (
            <form onClick={this.submitButton.bind(this)}>
                <input type="text" placeholder="Type your name" ref="nameInput"></input>
                <input type="text" placeholder="Type your email" ref="emailInput"></input>
                <button className="btn btn-primary" type="submit" onClick={this.props.bool}>Submit</button>
            </form>
            )
    }
    
    
    
    
}