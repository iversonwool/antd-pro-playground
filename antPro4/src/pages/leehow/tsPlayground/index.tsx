import { Button } from 'antd';
import React from 'react';
import Conditional from '@/pages/portal'

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
  state= {
    active: false
  }
  msg = 'hello';
  render() {
    const {active}  = this.state
    return (
      <div>
        <Button
          onClick={() => {
            // this.msg = 'change msg';
            // 如果父组件不rerender 就算子组件props改变
            // 这样写是因为父组件不render 导致页面不刷新
            // this.forceUpdate()
            this.setState({active: true});
          }}
        >
          Change
        </Button>

        <Conditional active={active}>

          <DemoView title={'hdsadlslfjdsajkfjdkasjfkjdsajkfjdskaj'} />
        </Conditional>

        <Button onClick={()=> {this.setState({active: false})}}>xxxxx</Button>
        

        {/* <DemoView title={this.msg} /> */}
      </div>
    );
  }
}

export default PG;

class DemoView extends React.Component {
  componentDidMount(): void {
    console.log('DemoView-componentDidMount')
  }

  UNSAFE_componentWillReceiveProps(nextProps: any): void {
    console.log(nextProps)
  }

  shouldComponentUpdate() {
    return true
  }

  componentDidUpdate() {
    console.log('-----')
  }

  componentWillUnmount(): void {
    console.log('DemoView - componentWillUnmount')
  }
  
  render(): React.ReactNode {
    return <div>{this.props.title}</div>;
  }
}
