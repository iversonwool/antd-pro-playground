import { Button } from 'antd';
import React, { useEffect, useState } from 'react';


const promise = () => Promise.resolve(9)

const FunctionComp = (props, ref) => {
  function privateMethod() {
    alert('private')
  }
  React.useImperativeHandle(ref, () => {
    return {
      privateMethod,
    }
  })

  

  let number = null
  const [count, setCount] = useState(() => 0)
  useEffect(() => {
    promise()
      .then(r => {
        number = r
      })
  }, [])
  return (
    <div>
      count is {count}


      <Button onClick={() => { 
        setCount(count + 1)
        console.log('number', number)
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
        // setCount((prevCount) => prevCount + 1);
       }}>+1</Button>

       <div>number is {number}</div>
    </div>
  );
};

export default React.forwardRef(FunctionComp);