import React from 'react';
import ReactDOM from 'react-dom';

export default class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: false
        }
    }
    
    submitButton(event) {
        event.preventDefault();
        const nameInput = this.refs.nameInput;
        const newName = nameInput.value.toString();
        const emailInput = this.refs.emailInput;
        const newEmail = emailInput.value.toString();
//        console.log(name, email);
        console.log(this.props.list);
        
        this.props.addToList(newName, newEmail); 
        this.refs.nameInput.value = '';
        this.refs.emailInput.value = '';
        
    }
    
    
    render() {
        return (
            <form onClick={this.submitButton.bind(this)}>
                <input type="text" placeholder="Type your name" ref="nameInput" defaultValue=''></input>
                <input type="text" placeholder="Type your email" ref="emailInput"></input>
                <button type="submit">Submit</button>
            </form>
            )
    }
    
    
    
    
}