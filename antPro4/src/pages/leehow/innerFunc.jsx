import { Button, Input } from 'antd';
import React, { Component } from 'react';


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
