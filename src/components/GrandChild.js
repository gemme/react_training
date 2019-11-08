import React, { Component } from 'react';
import { connect } from 'react-redux';

class GrandChild extends Component{

    /* componentDidMount() {
        store.subscribe(() => this.forceUpdate());
    } */

    render(){
        //const { counter } = store.getState();
        return(
            <div 
                style={{
                    margin: '50px',
                    height: '100%',
                    width: '100%',
                    background: 'lightgreen'
                }}>
                <h1>Hello world Grand Child Component</h1>
                <h1>Counter: {this.props.counter}</h1>
                <button onClick={() => {
                    //store.dispatch({ type: 'INCREMENT'})
                    this.props.increment();
                }}>Increment</button>
            </div>
        );
    }
}

// mapStateToProps
// mapDispatchToProps

const promise = new Promise((success, error)=> {
    setTimeout(() => {
        return success('wtf');
    }, 3000)
})

const mapStateToProps = (state) =>{
    console.log(state)
    return {
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) =>{
    console.log(dispatch)
    return {
        increment: () => dispatch(
            (dispatch) => {
            // Yay! Can invoke sync or async actions with `dispatch`
            promise.then(v => dispatch({type: 'INCREMENT'}))
        })
    }
}

/* increment: () => dispatch(
    (dispatch) => {
            console.log('inner', dispatch);
            setTimeout(() => {
                // Yay! Can invoke sync or async actions with `dispatch`
                return dispatch({type: 'INCREMENT'})
              }, 2000);
    }) */

    /* increment: () => promise.then((success) => {
        console.log(success);
        // Yay! Can invoke sync or async actions with `dispatch`
        return dispatch({type: 'INCREMENT'})
      }) */

export default connect(mapStateToProps, mapDispatchToProps)(GrandChild)