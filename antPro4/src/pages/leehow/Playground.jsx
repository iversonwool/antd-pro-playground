import React, { useEffect, useState } from 'react';
import { Button, Form } from 'antd';
import modawer from './modawer';
import LoginComp from './LoginComp';
import Modalable from './modalable';
import FunctionComp from './functionComp';

const Playground = (props) => {
  // 我是一段注释
  // 这个字体好看不
  const { showModal } = props
  const modal = React.useRef(null)
  const [form] = Form.useForm()

  const [text, setText] = useState('hello')

  /**
   * 有副作用的代码不能直接写在function里面
   */
  // setText('Hello, world!')
  // useEffect(() => {
  //   setText('Hello, world!')
  //   console.log('useEffect called')
  // }, [])
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  console.log(date)
  

  useEffect(() => {

    const timerID = setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    return () => {
      if (timerID) clearInterval(timerID)
    }
  }, [])
  return (
    <div>
      {text}

      当前时间是：{date}
      <Button block onClick={() => {
        if (showModal) {
          const hideModal = showModal({
            key: 'Playground-Login',
            onCancel: () => {
              hideModal()
            },
            title: '我是标题',
            onOk: () => {
              console.log(form.getFieldsValue())
              hideModal()
              form.resetFields()
            },
            content: {
              component: LoginComp,
              contentProps: {
                form
              }
            }
          })
        }
      }}>SHOW MODAL</Button>


      <Button block
        onClick={() => {
          if (modal.current) { modal.current.showModal() }
        }}
      > Modalable Show Modal </Button>

      <Modalable ref={modal}>
        <LoginComp />
      </Modalable>

      我是一个兵 来自老百姓


      <FunctionComp />
    </div>
  );
};

export default modawer(Playground)