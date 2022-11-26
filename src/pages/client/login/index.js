import './login.css'
import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
function Login() {

   return (


      <div className="overlay">
         <div className="form">
            <div className="con">
               <header className="head-form">
                  <h2>Log in</h2>
                  <p>login here using your username and password</p>
               </header>
               <br></br>
               <Form>
                  <Form.Item
                     label="Username"
                     name="username"
                     rules={[
                        {
                           required: true,
                           message: 'Please input your username!',
                        },
                     ]}
                  >
                     <Input />
                  </Form.Item>

                  <Form.Item
                     label="Password"
                     name="password"
                     rules={[
                        {
                           required: true,
                           message: 'Please input your password!',
                        },
                     ]}
                  >
                     <Input.Password />
                  </Form.Item>
                  <Form.Item
                     name="remember"
                     valuePropName="checked"
                     wrapperCol={{
                        offset: 8,
                        span: 16,
                     }}
                  >
                     <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item
                     wrapperCol={{
                        offset: 8,
                        span: 16,
                     }}
                  >
                     <Button type="primary" htmlType="submit">
                        Submit
                     </Button>
                  </Form.Item>
               </Form>

            </div>
         </div>
      </div>
   )
}

export default Login