import React, {Component} from 'react';
import Child from './Child';
import {connect} from 'react-redux';

class Parent extends Component {

    constructor(props) {
        super(props);
    }
/* 
    componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    } */

    render() {
        return(
            <div 
                style={{
                    height: 500,
                    width: '100%',
                    background: 'lightblue'
                }}>
                <h1>Hello world Parent Component</h1>
                <h2>{this.props.counter}</h2>
                <button onClick={() => {
                    //store.dispatch({ type: 'DECREMENT'})
                    this.props.decrement();
                    }}>Decrement</button>
                <Child />
            </div>
                )
            }
}

const mapStateToProps = (state) =>{
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Parent);