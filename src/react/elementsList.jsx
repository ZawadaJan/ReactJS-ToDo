import React from 'react';
import ReactDOM from 'react-dom';

export default class ElementsList extends React.Component {
    
    render() {
        return (
            <tr>
                <td>{this.props.counter + '.'}</td>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.email}</td>
                <td style={{cursor: 'pointer'}} onClick={this.props.delete.bind(this)}>X</td>
            </tr>
        )
    }
}