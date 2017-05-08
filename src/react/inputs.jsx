import React from 'react';
import ReactDOM from 'react-dom';

export default class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }
    
    //Jesli ktores z pol jest puste lub bledne, wyswietla sie odpowiedni komunikat
    
    showError() {
        if(this.state.error != null) {
            return <p style={{color: 'red'}}>{this.state.error}</p>
        } else {
            return null;
        }
    }
    
    
    submitButton(event) {
        event.preventDefault();
        const nameInput = this.refs.nameInput;
        const newName = nameInput.value.replace(/\d/g, '');
        const emailInput = this.refs.emailInput;
        const newEmail = emailInput.value;
        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i
        const nameReg = /^[a-zA-Z]{1,}\s[a-zA-Z]{1,}$/;
        const checkMail = this.checkMail(mailReg, newEmail);
        const checkName = this.checkName(nameReg, newName);
        const checkInputs = this.checkInputs(checkName, checkMail, newName, newEmail);
//        console.log(newName.length, checkName);
        
    }
    
    //walidacja maila
    
    checkMail(mailReg, newEmail) {
        if (mailReg.test(newEmail)) {
                return true
        } else {
                return false
        }
    }
    
    checkName(nameReg, newName) {
        if(newName.length > 20 ) {
           return false
           } else if(nameReg.test(newName)) {
               return true
           } else {
               return false
           }
    }
    
//    walidacja inputow
    
    checkInputs(checkName, checkMail, newName, newEmail) {
        
//        console.log("wartosc maila:"+checkMail);
//        console.log("wartosc name:"+checkName);
        
        
        if ((checkName == false && checkMail == false)) {
            return this.setState({error:"Name or e-mail are incorrect"});
            
        }  
        
        else if (checkMail == false) {
            return this.setState({error:"E-mail is incorrect"});
            
        } else if (checkName == false) {
            return this.setState({error:"Name is incorrect (Max length of name is 20)"});
        }
        
        
        else {
        
            this.props.addToList(newName, newEmail);
            this.setState({error: null});
            this.refs.nameInput.value = '';
            this.refs.emailInput.value = '';
        }
        
    }
    
    
    
    render() {
        return ( <div>
                    <form>
                        <input className="input-sm" type="text" placeholder="Type your name" ref="nameInput"></input>
                        <input className="input-sm" type="text" placeholder="Type your email" ref="emailInput"></input>
                        <button className="btn-md btn-primary" type="submit" onClick={this.submitButton.bind(this)}>Submit</button>
                        {this.showError()} 
                    </form>
            </div>
                
            )
    }
    
    
    
    
}