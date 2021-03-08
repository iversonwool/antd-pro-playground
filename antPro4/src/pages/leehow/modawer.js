import React, { useState } from 'react';
import { Modal, Drawer } from 'antd';
import LoginComp from './LoginComp';

/**
 * 该组件可以弹出 ant 的 Modal 和 Drawer
 * 同一个页面可以弹出多个Modal 和 Drawer
 */
const modawer = (Comp) => (compProps) => {
  const [modalProps, setModalProps] = useState({})
  const [drawerProps, setDrawerProps] = useState({})

  const showModal = (props) => {
    const mProps = { ...props, visible: true }
    const { key } = props
    setModalProps({
      ...modalProps,
      [key]: mProps, 
    })
    return () => {
      const nextProps = { ...mProps, visible: false }
      setModalProps({ ...modalProps, [key]: nextProps })
    }
  }

  const showDrawer = (props) => {
    const dProps = { ...props, visible: true }
    const { key } = props
    setDrawerProps({
      ...modalProps,
      [key]: dProps, 
    })
    return () => {
      const nextProps = { ...dProps, visible: false }
      setDrawerProps({ ...dProps, [key]: nextProps })
    }
  }

  return (
    <>
      <Comp {...compProps} showModal={showModal} showDrawer={showDrawer} />
      {[modalProps, drawerProps].map((container, i) => {
        const Container = i === 0 ? Modal : Drawer
        return Object.values(container).map((item) => {
          const { 
            key, 
            title, 
            width,
            content: { component: Compo, props: contentProps},
            ...others
          } = item
          return (
            <Container
              key={key}
              title={title || 'Title'}
              width={width || 1000}
              destroyOnClose
              {...others}
            >
              <Compo {...contentProps} />
            </Container>
          )
        })
      })}
    </>
  );
};

export default modawer;

export const decorator = (Container) => (containerProps) => (Comp) => (compProps) => (
  <Container {...containerProps}>
    <Comp {...compProps} />
  </Container>
)

// decorator(Modal)({ title: 'title' })(LoginComp)
