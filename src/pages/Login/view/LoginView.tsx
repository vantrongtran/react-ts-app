import React from 'react';
import { Form, Input } from 'semantic-ui-react';

const LoginView = () => {
  return (
    <Form>
      <Form.Field
        control={Input}
        label='Email'
      />
      <Form.Field
        control={Input}
        label='Password'
        type='password'
      />
    </Form>
  );
}

export default LoginView;
