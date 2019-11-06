
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';


class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: 'Fernando',
            lastname: 'Gonzalez',
            isError: false,
            validationMessage: ''
        }
        this.onSubmitEvent = this.onSubmitEvent.bind(this);
    }

    onSubmitEvent(e) {
        e.preventDefault();
        console.log(this.state);
        const {name, lastname} = this.state;
        if(name.length > 10){
            console.error('this exceed the length of name');
            this.setState({
                isError: true,
                validationMessage: 'Error on this element' + name
            })
        }
    }

    render(){
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.onSubmitEvent}>
                    <input
                        defaultValue={this.state.name}
                        type="text" 
                        name="name"
                        onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({
                                name: e.target.value
                            })
                            }}/>
                        {this.state.isError && <span style={{
                            color: 'red'
                        }}>{this.state.validationMessage}</span>}
                    <input type="text" defaultValue={this.state.lastname} name="lastname" onChange={(e) => {
                            console.log(e.target.value)
                            this.setState({
                                lastname: e.target.value
                            })
                            }}/>
                    <button>Validate</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

