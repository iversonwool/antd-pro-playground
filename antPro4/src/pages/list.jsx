import React, { Component } from 'react';
import {Table, Button} from 'antd'
import styles from './list.less'

class List extends Component {

  state = {
    height: 200
  }

  componentDidMount() {
    const container = document.getElementById('container')
    console.log('offsetHeight', container.offsetHeight)
    const tableContainer = document.getElementById('table-container')
    console.log('offsetTop', tableContainer.offsetTop)
    console.log(container.offsetHeight - tableContainer.offsetTop)
    this.setState({
      height: container.offsetHeight - tableContainer.offsetTop
    })
  }

  render() {
    const {height} = this.state
    return (
      <div id="container" style={{position: 'relative'}}>
  
        <Button>hello</Button>
        <Button>hello</Button><Button>hello</Button><Button>hello</Button>
        <Button>hello</Button><Button>hello</Button>
        <div id="table-container">
          <Table
            className={styles.table}
            rowKey="id"
            dataSource={
              Array(15).fill(null).map((e, index) => ({
                id: index,
                name: `第${index}个名字`,
                title: `${index}个标题`
              }))
            }
            columns={[
              {dataIndex: 'name', title:'姓名'},
              {dataIndex: 'title', title:'标题'}
            ]}
    
            scroll={{y: height}}
          />
        </div>
      </div>
    );
  }
};

export default List;