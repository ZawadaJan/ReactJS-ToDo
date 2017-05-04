import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from "react/inputs.jsx";
import NewElements from 'react/new-elements.jsx';

const list = [
    {
        name: "Jan Zawada",
        email:"zetwude@gmail.com"
    },
    {
        name: "JayZet",
        email: "zzz@ppp.pl"
    }
    
]; 


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list,
            bool: false
        };
    }
    
    
    addToList(name, email) {
        this.state.list.push({
            name,
            email
            
        });
        
        this.setState({list: this.state.list});
    }
    
    changeBool() {
        if(this.state.bool === this.state.bool) {
            this.setState({
                bool: !this.state.bool
            });
        }
    }
    
    
    
    render() {
        return <div>
            <Inputs addToList = {this.addToList.bind(this)} bool={this.changeBool.bind(this)}/>
            <NewElements list = {this.state.list}/>
        </div>
                
    }
}


document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
    <App/>,
        document.getElementById('app')
    );
});