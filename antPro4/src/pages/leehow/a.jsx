import React from 'react';

const A = (props) => {
  console.log('A render')
  return (
    <div>
      A εΊεζζ¬ ----
      {props.text}
    </div>
  );
};

export default A;