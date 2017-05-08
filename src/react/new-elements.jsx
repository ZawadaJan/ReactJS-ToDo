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
    
        showName() {
        
            const props = this.state.list;
            return _.map(props, (element, index) => {
                const counter = index+1;
                  
                return <ElementsList key={counter} value={element} counter={counter}/>
    
                
            });
            
            
        }
    
        showHeader() {
            if(this.state.list.length > 0) {
                return <Header/>
            } else {
                return null
            }
            
        }
    
    render() {
        
        return (
            
            <table className="table table-striped">
                {this.showHeader()}
                    <tbody>         
                        {this.showName()}  
                    </tbody>   
            </table>
        )
    }
}