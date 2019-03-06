import React from 'react';
import { Form, Input } from 'antd';

const Index = (props) => {
  const { getFieldDecorator } = props.form

  return (
    <Form >
      <Form.Item>
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input placeholder="Username" />
        )}
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'normal_login' })(Index);