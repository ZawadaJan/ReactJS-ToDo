import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from "react/inputs.jsx";
import Header from 'react/header.jsx';

const list = [
    
        
    
    
]; 


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list
        };
    }
    
    
    addToList(name, email) {
        this.state.list.push({
            name,
            email
        });
        
        this.setState({list: this.state.list});
    }
    
    
    
    render() {
        return <div>
            <Inputs list = {this.state.list} addToList = {this.addToList.bind(this)}/>
            <Header list = {this.state.list}/>
        </div>
                
    }
}


document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
    <App/>,
        document.getElementById('app')
    );
});