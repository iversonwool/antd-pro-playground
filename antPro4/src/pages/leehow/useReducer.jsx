import { Button } from 'antd';
import React, { useReducer } from 'react';


const initialState = { count : 0}

function reducer(state, aciton) {
  switch (aciton.type) {
    case 'increase':
      
      return {count: state.count + 1}
    case 'decrease':
      return {count: state.count -1}

    default:
      return initialState
  }
}

function init(initialValue) {
  return {count: initialValue + 100}
}

const UseReducerPlayground = () => {
  const [state, dispatch] = useReducer(reducer, 900, init)
  return (
    <div>
      <div>count is {state.count}</div>
      <Button onClick={() => { dispatch({type: 'increase',})}}>+1</Button>
      <Button onClick={() => { dispatch({type: 'decrease',})}}>-1</Button>
      <Button onClick={() => { dispatch({type: 'reset',})}}>reset</Button>
    </div>
  );
};

export default UseReducerPlayground;