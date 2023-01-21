import React from 'react';


import { createStore,applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const initalState = {
  count: "10",
}


const counterReducer = (state = initalState, action) => {
  switch (action.type){
    case "INCREMENT":
      const myCount = typeof action.payload === "number" ? action.payload : 1
      return{
        count: state.count + myCount,
      };
      
      case "DECREMENT":
        return {
          count: state.count - 1,
        };

      case "RESET":
        return {
          count: 0,
        };

      default:
        return state;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(counterReducer,
  composeEnhancers(applyMiddleware(thunk))
  );

  const addCount = (newvalue)=>({
    type:"INCREMENT",
    payload:newvalue
  })

  const removeCount =(newvalue)=>({
    type:"DECREMENT",
    payload:newvalue
  })


  const resetCount =(newvalue)=>({
    type:"RESET",
    payload:newvalue
  })



  store.dispatch(addCount());
  store.dispatch(resetCount());
  store.dispatch(removeCount());
  store.dispatch(addCount());


console.log(store.getState());




const CounterApp = () => {
  return (
    <div>CounterApp</div>
  )
}

export default CounterApp;