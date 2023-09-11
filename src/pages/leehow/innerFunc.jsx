import { Button, Input } from 'antd';
import React, { Component } from 'react';
import moment from 'moment';



function abc() {

  
  const a1 = [2, 4, 6]
  const b1 = a1.map(e => [e]) // [[3], [5], [7]]
  let x = a1[0]
  let i = 0
  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }
  const c1 = 1
  while (i < a1.length) {
    if (a1[i+1] -x >= 2) {
      b1[i] = b1[i].concat(range(a1[i]+1, a1[i+1]))
    }
    i+=1
  }
  console.log('results', b1)
}


// 所有的时间段的数据
function timestampsMaker(mod = 5) {

  const first = moment(`2023-09-01 00:00:0${mod}`).unix()

  const last  = moment(`2023-09-01 23:59:5${mod}`).unix()
  const allTimeSegments = []
  {
    let firstSeg = first
    while (firstSeg <= last) {
      allTimeSegments.push(firstSeg)
      firstSeg += 10 // 10秒搜集一个点
    }
  }
  // 构造数组
  return allTimeSegments.map(e => moment(e * 1000).format('YYYY-MM-DD HH:mm:ss'))
}

// 构造展示数据
function displayDataMaker(serverData, serverTime) {
  const allTimeSegments = timestampsMaker()
  const allData = Array(allTimeSegments.length).fill(0)
  for (let index = 0; index < allTimeSegments.length; index++) {
    const idx = serverTime.findIndex((e) => e === allTimeSegments[index])
    if (idx !== -1) {
      allData[index] = serverData[idx]
    }
  }
  return allData
}


/**
 * component
 */
// class WrappedInput extends Component {

//   render() {
//     return <Input ref={this.props.forwardRef} />;
//   }
// }


// function WrappedInput(props) {

//   return <Input ref={props.forwardRef} />;
// }

// export default React.forwardRef((props, ref) => {
//   return <WrappedInput {...props} forwardRef={ref} />;
// });


export default React.forwardRef((props, ref) => {


  const testData = {a: {b: 1}}

  console.log('testData.a?.c', testData.a?.c)
  const serverTimeData = ['2023-09-01 00:00:35']
  const serverSOCData = [3]
  
  console.log('--', displayDataMaker(serverSOCData, serverTimeData))

  const inputRef = React.useRef();
  const inputRef1 = React.useRef();
  /** 可以为多个引用组件暴露方法 */
  React.useImperativeHandle(ref, () => ({
    renameFocus: () => { 
      inputRef.current.focus() 
    },
    anotherFocus: () => {
      inputRef1.current.focus()
    }
  }))

  return <>
    <Input ref={inputRef} />

    <Input ref={inputRef1} />
  </>
});
