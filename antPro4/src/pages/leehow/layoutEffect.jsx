import React, { useLayoutEffect, useEffect, useState } from 'react';
import './layoutEffect.css'

const LayoutEffect = () => {
  const [text, setText] = useState('world')
  useEffect(() => {
    const square = document.querySelector('.square');
    square.style.transform = "translate(-50%, -50%)";
    square.style.left = "50%";
    square.style.top = "50%";
  });

  return (
    <div className="App">
      <div className="square" />
      <button type="button" onClick={() => { setText('Hello')}}>hit me</button>
    </div>
  );
};

export default LayoutEffect;