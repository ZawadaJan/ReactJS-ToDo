import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Header from 'react/header.jsx';
import ElementsList from 'react/elementsList.jsx';

export default class NewElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: this.props.list      
        };
    }
    
        addUser() {
        
            const props = this.props.list;
            return _.map(props, (element, index) => {
                return <ElementsList key={index} value={element} counter={index+1} delete={this.deleteList.bind(this, element)}/>    
            });    
        }
    
        showHeader() {
            if(this.props.list.length > 0) {
                return <Header/>
            } else {
                return null
            }
            
        }
    
        deleteList(elementToDelete) {
            console.log(elementToDelete);
            _.remove(this.props.list, currentElement => currentElement === elementToDelete);
            this.setState({list: this.state.list})
            
        }
    
    render() {
        
        return (
            
            <table className="table table-striped">
                {this.showHeader()}
                    <tbody>         
                        {this.addUser()}  
                    </tbody>   
            </table>
        )
    }
}