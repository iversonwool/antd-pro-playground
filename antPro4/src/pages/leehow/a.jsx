import React from 'react';

const A = (props) => {
  console.log('A render')
  return (
    <div>
      A 区块文本 ----
      {props.text}
    </div>
  );
};

export default A;