
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
  } 

class MyComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name
        }
    }

    componentDidUpdate(oldProps){
        console.log('componentDidUpdate');
        console.log(oldProps);
    }

    render(){
        return (
        <div>
            {this.props.name}
        </div>)
    }
}

class App extends Component {


    constructor(props){
        super(props);
        this.state = {
            name: 'Gabriel',
        }
    }

    render() {
      throw new Error('Whats going on')
        return (
        <>
            <button onClick={() => this.setState({
                name: 'Ernesto'
            })}>Click me</button>
            <MyComponent name={this.state.name}/>
        </>
        )
    }
}




ReactDOM.render(
    <ErrorBoundary>
        <App />
    </ErrorBoundary>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

