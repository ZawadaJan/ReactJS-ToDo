import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from "react/inputs.jsx";
import NewElements from 'react/new-elements.jsx';

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
        return ( 
                <div className="container">
                    <div>
                        <Inputs addToList = {this.addToList.bind(this)} value={this.state.list}/>    
                        <NewElements list = {this.state.list}/>
                    </div>
                </div>    
        )          
    }
}

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
    <App/>,
        document.getElementById('app')
    );
});