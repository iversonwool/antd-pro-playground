// eslint-disable-next-line max-classes-per-file
import React, { Component } from 'react';
import {Table, Button} from 'antd'
import styles from './list.less'
import ReactDOM from 'react-dom'

import LayoutTable from '@/components/LayoutTable';

class CCC extends Component {

  componentDidMount() {
    console.log('CCC - componentDidMount - called');
  }

  render() {
    return (
      <div>heee</div>
    )
  }
}

class List extends Component {

  state = {
    height: 200
  }

  /*
  componentDidMount() {
    const container = document.getElementById('container')
    console.log('offsetHeight', container.offsetHeight)
    const tableContainer = document.getElementById('table-container')
    console.log('offsetTop', tableContainer.offsetTop)
    console.log(container.offsetHeight - tableContainer.offsetTop)
    this.setState({
      height: container.offsetHeight - tableContainer.offsetTop
    })

    // const ccc = <CCC />
    // const div = document.createElement('div')
    // ReactDOM.render(ccc, div)
  }
  */

  render() {
    const {height} = this.state
    return (
      // <div id="container" style={{position: 'relative'}}>
  
      //   <Button>hello</Button>
      //   <Button>hello</Button><Button>hello</Button><Button>hello</Button>
      //   <Button>hello</Button><Button>hello</Button>
      //   <div id="table-container">
      //     <Table
      //       className={styles.table}
      //       rowKey="id"
      //       dataSource={
      //         Array(15).fill(null).map((e, index) => ({
      //           id: index,
      //           name: `第${index}个名字`,
      //           title: `${index}个标题`
      //         }))
      //       }
      //       columns={[
      //         {dataIndex: 'name', title:'姓名'},
      //         {dataIndex: 'title', title:'标题'}
      //       ]}
    
      //       scroll={{y: height}}
      //     />
      //   </div>
      // </div>
      <div style={{height: 'calc(100vh - 220px)'}}>
        <LayoutTable />
      </div>
    );
  }
};

export default List;