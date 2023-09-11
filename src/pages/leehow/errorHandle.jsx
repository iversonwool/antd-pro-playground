import { Button } from 'antd';
import React, { Component } from 'react';
import errorBoundary from './errorBoundary'

// 装饰器写法
@errorBoundary
class ErrorHandle extends Component {

  state = {
    list: ['apple', 'orange', 'pear']
  }


  genError = () => {
    this.setState({
      list: null
    })
  }

  render() {
    const {list} = this.state
    return (
      <div style={{border: '1px solid magenta'}}>
        <ul>
          {list.map(ele => <li key={ele}>{ele}</li>)}
        </ul>


        <Button onClick={this.genError}>generate an error</Button>
      </div>
    );
  }
}

// export default errorBoundary(ErrorHandle);
export default ErrorHandle