import React from 'react'
import {Table} from 'antd'
import PropTypes from 'prop-types'

import styles from './index.less'

const LayoutTable = (props) => {
  const {layout} = props
  return (
    <div className={styles.layoutTable}>
  
      <Table
        className={styles.fixedTable}
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
        /** 
         * 弊端：如果使用scroll属性 如果不满table区域 也会显示滚动条 
         * 比方：我展示10条数据却铺不满这个高度calc(100% - 54.8px)
         * 
         **/
        scroll={{ y: `calc(100% - 54.8px)` }}
      />
    </div>
  )
}

LayoutTable.defaultProps = {
  // layout: PropTypes.a
}

export default LayoutTable

