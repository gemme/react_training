import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class MyComp extends Component {

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    UNSAFE_componentWillMount() {
        console.log('componentWillMount');
    }

    render(){
        console.log('render child');
        return <div>I am child</div>
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [],
            isMounted: true
        };
        this.onClickEvent = this.onClickEvent.bind(this)
        console.log('constructor');
      }

    onClickEvent(){
        console.log('you pressed me');
        this.setState( prevState => {
            return {
                isMounted: !prevState.isMounted
            }
        })
    }

    render() {
        console.log('render');
        return (<div>
            Hello World
            <button
                onClick={this.onClickEvent}
            >Press Me</button>
                <div>{this.state.names}</div>
                {this.state.isMounted && <MyComp />}
        </div>)
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.setState({
            names: ['Gabriel']
        })
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
