import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
        display: 'flex',
        
    };



export default class Header extends React.Component {
    
    showName() {
        const propsList = this.props.list;
        
        function fn (element, index) {
            console.log(element.name);
        }
        
        propsList.map(fn);
    }
    
    
    render() {
        return ( <table style={{border:'1px solid black'}}>
          <tbody>
           <tr>
            <th>Name</th>
            <th>E-mail</th>
            </tr>
            <tr>
                {this.showName()}
            </tr>
            </tbody>
        </table>
        )
    }
}