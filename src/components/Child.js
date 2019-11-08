import React, {Component} from 'react';
import GrandChild from './GrandChild';

export default class Child extends Component{

    render(){
        return(
            <div 
                style={{
                    margin: '50px',
                    height: '100%',
                    width: '100%',
                    background: 'blue'
                }}>
                <h1>Hello world Child Component</h1>
                <GrandChild />
            </div>
        );
    }
}
