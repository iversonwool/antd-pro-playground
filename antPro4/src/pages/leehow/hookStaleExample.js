import React, {useRef, useState, useEffect} from 'react';

function usePrevious(count) {
  console.log('usePrevious called')
  const countRef = useRef();
  useEffect(() => {
    countRef.current = count;
  })
  return countRef.current
}

// https://reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function
function Example() {
  const [count, setCount] = useState(0);
  // const freshValue = usePrevious(count);

  const countRef = useRef();
  useEffect(() => {
    countRef.current = count;
  })
  /**
   * stale
   */
  // function handleAlertClick() {
  //   setTimeout(() => {
  //     alert('You clicked on: ' + count);
  //   }, 3000);
  // }

  /**
   * stale
   */
  // const handleAlertClick = () => {
  //   setTimeout(() => {
  //     alert('You clicked on: ' + count);
  //   }, 3000);
  // }


  /**
   * fresh
   */
  const handleAlertClick = () => {
    setTimeout(() => {
      // eslint-disable-next-line no-alert
      alert(`You clicked on: ${countRef.current}`);
      
      // alert(`You clicked on: ${freshValue}`);
    }, 3000);
  }
  console.log(count)
  // console.log(freshValue)

  console.log(countRef.current)
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
    </div>
  );
}

export default Example;