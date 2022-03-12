import { Button } from 'antd';
import React from 'react';

interface User {
  name: string;
}

// const PG = (props) => {
//   console.log(props)
//   return (
//     <div>
//       {props.name}

//       I am iron man!
//     </div>
//   );
// };

class PG extends React.Component {
  msg = 'hello';
  render() {
    return (
      <div>
        <Button
          onClick={() => {
            this.msg = 'change msg';
            // 如果父组件不rerender 就算子组件props改变
            // 这样写是因为父组件不render 导致页面不刷新
            // this.forceUpdate()
          }}
        >
          Change
        </Button>

        <DemoView title={this.msg} />
      </div>
    );
  }
}

export default PG;

class DemoView extends React.Component {

  UNSAFE_componentWillReceiveProps(nextProps: any): void {
    console.log(nextProps)
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidUpdate() {
    console.log('-----')
  }
  
  render(): React.ReactNode {
    return <div>{this.props.title}</div>;
  }
}
