import React from 'react';
import { Form, Input } from 'antd';

const LoginComp = (props) => {
  const { form } = props
  return (
    <Form form={form}>
      <Form.Item label="Username" name="username">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default LoginComp;