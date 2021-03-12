import React, { useEffect, useState } from 'react';
import { Button, Form, Divider } from 'antd';
import modawer from './modawer';
import LoginComp from './LoginComp';
import Modalable from './modalable';
import FunctionComp from './functionComp';

import UseReducerPlayground from './useReducer';

import A from './a';
import MemorizedPlayground from './memorized';
import StaleExample from './hookStaleExample'
import PreviousState from './previousState'

const Playground = (props) => {
  // 我是一段注释
  // 这个字体好看不
  const { showModal } = props;
  const modal = React.useRef(null);
  const [form] = Form.useForm();

  const [text, setText] = useState('hello');

  const [textB, setTextB] = useState('world');

  /**
   * 有副作用的代码不能直接写在function里面
   */
  // setText('Hello, world!')
  // useEffect(() => {
  //   setText('Hello, world!')
  //   console.log('useEffect called')
  // }, [])
  const [date, setDate] = useState(new Date().toLocaleTimeString());
  // console.log(date)

  // useEffect(() => {

  //   const timerID = setInterval(() => {
  //     setDate(new Date().toLocaleTimeString())
  //   }, 1000)
  //   return () => {
  //     if (timerID) clearInterval(timerID)
  //   }
  // }, [])
  return (
    <div>

      <PreviousState />


      {text}
      当前时间是：{date}
      <Button
        block
        onClick={() => {
          if (showModal) {
            const hideModal = showModal({
              key: 'Playground-Login',
              onCancel: () => {
                hideModal();
              },
              title: '我是标题',
              onOk: () => {
                console.log(form.getFieldsValue());
                hideModal();
                form.resetFields();
              },
              content: {
                component: LoginComp,
                contentProps: {
                  form,
                },
              },
            });
          }
        }}
      >
        SHOW MODAL
      </Button>
      <Button
        block
        onClick={() => {
          if (modal.current) {
            modal.current.showModal();
          }
        }}
      >
        {' '}
        Modalable Show Modal{' '}
      </Button>
      <Modalable ref={modal}>
        <LoginComp />
      </Modalable>
      <UseReducerPlayground />
      {/* <FunctionComp /> */}
      <Divider style={{ borderTop: '50px solid black' }} />


      {/**
       * A 和 MemorizedPlayground
       * 同为父组件的子组件 虽然这里只修改A
       * 但是memorized组件跟着一起渲染了
       * 寻找优化
       */}
      <Button
        onClick={() => {
          setText('修改A');
        }}
      >
        修改A的文本
      </Button>
      <Button
        onClick={() => {
          setTextB('修改B');
        }}
      >
        修改B的文本
      </Button>
      <A text={text} />
      <MemorizedPlayground text={textB} />

      <Divider style={{ borderTop: '50px solid black' }} />
      <StaleExample />
    </div>
  );
};

export default modawer(Playground);
