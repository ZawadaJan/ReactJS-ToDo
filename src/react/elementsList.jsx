import React from 'react';
import ReactDOM from 'react-dom';

export default class ElementsList extends React.Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            key: this.props.index
//        }
//    }
    
    render() {
        return (
            <tr>
                <td>{this.props.value.name}</td>
                <td>{this.props.value.email}</td>
            </tr>
        )
    }
}