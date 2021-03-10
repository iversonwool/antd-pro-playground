import { Button } from 'antd';
import React, { useState } from 'react';

const FunctionComp = () => {

  const [count, setCount] = useState(() => 0)

  return (
    <div>
      count is {count}


      <Button onClick={() => { 
        // setCount(count + 1)
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
        setCount((prevCount) => prevCount + 1);
       }}>+1</Button>
    </div>
  );
};

export default FunctionComp;