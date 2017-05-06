import React from 'react';
import ReactDOM from 'react-dom';

export default class ElementsList extends React.Component {

    
    render() {
        return (
            <tr>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.email}</td>
                <td style={{cursor: 'pointer'}}>X</td>
            </tr>
        )
    }
}