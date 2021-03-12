import React, { useState, useRef, useEffect } from 'react';
import { Button } from 'antd';

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}


function Counter() {
  const [count, setCount] = useState(0);

  // const prevCountRef = useRef();
  // useEffect(() => {
  //   prevCountRef.current = count;
  // });
  // const prevCount = prevCountRef.current;
  const prevCount = usePrevious(count);
  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >+1</Button>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
    </div>
  );
}

export default Counter;
