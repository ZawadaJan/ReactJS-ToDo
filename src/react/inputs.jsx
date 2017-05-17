import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

export default class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            display: "block",
            inputs: "none",
            confirmation: false
            
        }
    }

    handleOnClick() {
        this.setState({display: "none", inputs: "flex", confirmation: false})
        
    }
    
    //Jesli ktores z pol jest puste lub bledne, wyswietla sie odpowiedni komunikat
    
    showError() {
        if(this.state.error != null) {
            return <span style={{color: 'red', marginTop: "5px"}}>{this.state.error}</span>
        } else {
            return null;
        }
    }  

    showConfirmation() {
        if(this.state.confirmation === true) {
            return <div style={{marginTop: "40px"}}> <img src="./img/checked.png"/><span> User has been succesfully added </span>
                     </div>
        } else {
            return null
        }
    }

    resetFields() {
        return <a onClick={this.handleResetValue.bind(this)} style={{marginTop: "5px", marginLeft: "10px", cursor: "pointer"}}>Reset fields</a>
    }
    
    submitButton(event) {
        event.preventDefault();
        const list = this.props.value;
        const nameInput = this.refs.nameInput;
        const newName = nameInput.value.replace(/\d/g, '');
        const emailInput = this.refs.emailInput;
        const newEmail = emailInput.value;
        const mailReg = /^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$/i
        const nameReg = /^[a-zA-Z]{1,}\s[a-zA-Z]{1,}$/;
        const checkMail = this.checkMail(mailReg, newEmail);
        const checkName = this.checkName(nameReg, newName);
        const checkInputs = this.checkInputs(checkName, checkMail, newName, newEmail, list);
    }

    handleResetValue() {
        
        this.refs.nameInput.value = '';
        this.refs.emailInput.value = '';
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
    
    //walidacja maila
    
    checkMail(mailReg, newEmail) {
        if (mailReg.test(newEmail)) {
                return true
        } else {
                return false
        }
    }  
    
//    walidacja inputow
    
    checkInputs(checkName, checkMail, newName, newEmail, list) {
              
        
        if ((checkName == false && checkMail == false)) {
            return this.setState({error:"Name or e-mail are incorrect"}); 
        }  
        else if (checkMail == false) {
            return this.setState({error:"E-mail is incorrect"});
        } else if (checkName == false) {
            return this.setState({error:"Name is incorrect"});    
        } else if (_.find(list,elem => elem.name === newName)) {
            return this.setState({error:"Name already exist"});
        } else if(_.find(list, elem => elem.email === newEmail)) {
            return this.setState({error: "Email already exist"});
        } else {
        
            this.props.addToList(newName, newEmail);
            this.refs.nameInput.value = '';
            this.refs.emailInput.value = '';
            this.setState({error: null, display: "block", inputs: "none", confirmation: true})
        }
        
    }
    
    
    
    render() {
        return ( <div style={{display: "flex"}}>
                    <div style={{width: "150px", height: "45px", lineHeight: "30px", border: "1px solid green", borderRadius: "5px", display: this.state.display, marginTop: "30px", marginRight: "15px"}}>  
                       <img src="./img/plus.png" style={{cursor: "pointer", marginBottom: "8px", marginLeft:"15%"}} onClick={this.handleOnClick.bind(this)}/> <span style={{fontSize: "18px", lineHeight: "45px", color: "green"}}>Add user</span>
                    </div> {this.showConfirmation()}
                    <form style={{display: this.state.inputs, marginTop: "30px"}}>
                        <input className="input-sm" type="text" placeholder="Type your name" ref="nameInput"></input>
                        <input className="input-sm" style={{margin:"0 10px"}} type="text" placeholder="Type your email" ref="emailInput"></input>
                        <button className="btn-md btn-primary" style={{width: "135px", background:"green", marginRight: "15px"}} type="submit" onClick={this.submitButton.bind(this)}>Submit</button>
                        {this.showError()} {this.resetFields()}
                    </form>
            </div>
                
            )
    }
    
    
    
    
}