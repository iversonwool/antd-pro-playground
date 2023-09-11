import React, { useState } from 'react';
import { Modal, Drawer } from 'antd';

export function uniqueKey() {
  let d = new Date().getTime();
  return 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

/**
 * 该组件可以弹出 ant 的 Modal 和 Drawer
 * 同一个页面可以弹出多个Modal 和 Drawer
 */
const modawer = (Comp) => (compProps) => {
  const [modalProps, setModalProps] = useState({});
  const [drawerProps, setDrawerProps] = useState({});

  const showModal = (props) => {
    const mProps = { ...props, visible: true, };
    // const key =  key只能从外面传 不然生成多个Modal 
    setModalProps({
      ...modalProps,
      [props.key]: mProps,
    });
    return () => {
      const nextProps = { ...mProps, visible: false };
      setModalProps({ ...modalProps, [props.key]: nextProps });
    };
  };

  const showDrawer = (props) => {
    const dProps = { ...props, visible: true };
    // const key = uniqueKey();
    setDrawerProps({
      ...modalProps,
      [props.key]: dProps,
    });
    return () => {
      const nextProps = { ...dProps, visible: false };
      setDrawerProps({ ...dProps, [props.key]: nextProps });
    };
  };

  return (
    <>
      <Comp {...compProps} showModal={showModal} showDrawer={showDrawer} />
      {[modalProps, drawerProps].map((container, i) => {
        const Container = i === 0 ? Modal : Drawer;
        return Object.entries(container).map((item) => {
          console.log('item',item)
          const [
            key,
            {
              title,
              width,
              content: { component: Compo, props: contentProps },
              ...others
            },
          ] = item;
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
          );
        });
      })}
    </>
  );
};

export default modawer;

export const decorator = (Container) => (containerProps) => (Comp) => (compProps) => (
  <Container {...containerProps}>
    <Comp {...compProps} />
  </Container>
);

// decorator(Modal)({ title: 'title' })(LoginComp)
