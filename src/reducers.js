// Redux
// single source of truth


// State read only
// Actions

// changes are made with pure functions

const initialState = {
    name: '',
    counter: 0
}

export const reducer = (state, action) => {
    if(state === undefined){
        return initialState;
    }
    if(action.type === 'INCREMENT'){
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type === 'DECREMENT'){
        return {
            ...state,
            counter: state.counter - 1
        }
    } else {
        return state;
    }
}

export const reducer2 = (state, action) => {
    if(state === undefined){
        return initialState;
    }
    if(action.type === 'INCREMENT_TWICE'){
        return {
            ...state,
            counter: state.counter + 2
        }
    } else if(action.type === 'DECREMENT_TWICE'){
        return {
            ...state,
            counter: state.counter - 2
        }
    } else {
        return state;
    }
}

/* const createStore = (reducer) => {
    let state = reducer(undefined, {});
    const callbacks = [];
    const getState =  () => state;
    const subscribe = cb => {
        callbacks.push(cb);
    };
    const dispatch = (action) => {
       state = reducer(state, action);
       callbacks.forEach(cb => cb());
    };
    return {
        subscribe,
        dispatch,
        getState
    }
}

const store = createStore(reducer);
//initial state
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' }); */
/* let newstate = reducer(initialState, { type: 'INCREMENT' });
console.log(newstate);
newstate  = reducer(newstate, { type: 'INCREMENT' });
console.log(newstate); */





















/* const createStore = (reducer) => {

    let state = reducer(undefined, {});

    const callbacks = [];

    const getState = () => state;

    const dispatch = (action) => {
      state = reducer(state, action)
      callbacks.forEach(cb => cb())
    };

    const subscribe = (cb) => {
      callbacks.push(cb);
    };

    return {
      getState: getState,
      dispatch: dispatch,
      subscribe:subscribe
    }

  };

const INITIAL_STATE = {
    name: 'Gabriel',
    counter: 0
};

function reducer(state=INITIAL_STATE, action){

    switch(action.type){
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 }
        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 }
        case 'CUSTOM_DECREMENT':
                return { ...state, name: state.name + ' custom' ,  counter: state.counter + action.payload }
        case 'CUSTOM_INCREMENT':
                return { ...state, counter: state.counter - + action.payload }
        default: return state
    }

}


const store = createStore(reducer);

store.subscribe(() => {
    console.log('State is chaging');
})

store.dispatch({
    type: 'INCREMENT'
})

console.log(store.getState());

store.dispatch({
    type: 'INCREMENT'
})

store.dispatch({
    type: 'INCREMENT'
})
store.dispatch({
    type: 'INCREMENT'
})
console.log(store.getState());
store.dispatch({
    type: 'DECREMENT'
})
console.log(store.getState());
store.dispatch({
    type: 'CUSTOM_DECREMENT',
    payload: 100
})

console.log(store.getState());
 */


/* const arr = Object.freeze({
    name: 'Gabriel',
    innner: Object.freeze({
        lastname: 'Martinez'
    })
});

arr.name = 'ERNESTO'
arr.innner.lastname = 'Gonzales'

console.log(arr); */