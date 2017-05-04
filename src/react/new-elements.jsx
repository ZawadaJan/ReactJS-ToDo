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
    
//        function test() {
//            const propsList = this.state.list;
//            function fn (element, index) {
//                let nameElem = element.name;
//                return nameElem;
//            }   
//        }
    
        showName() {
        
            const props = this.state.list;
            return _.map(props, (element, index) => {
                
              return <ElementsList key={index} value={element}/>
//                console.log(element);
    
                
            });
            
            
    }
    
    render() {
        let test = this.state.list;
        
        return (
            
            <table className="table table-condensed">
                <Header/>
                    <tbody>
                        
                            
                                {this.showName()}
                            
                        
                    </tbody>
                    
                
            </table>
            )
    }
}