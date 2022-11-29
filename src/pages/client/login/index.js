import "./login.css";
import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import authService from "../../../Services/auth";
import { message } from "antd";
import UseAuth from "../../../hooks/UseAuth";
function Login() {
  const [form] = Form.useForm();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = UseAuth();

  const navigate = useNavigate();

  const onFinish = (values) => {
    try {
      authService.login().then(
        (response) => {
          const user = response.data.filter((res) => {
            if (
              res.username === values.username &&
              res.password === values.password
            ) {
              return res;
            }
          });
          if (user.length === 0) {
            message.error("Please check your username and password carefully");
          } else {
            setAuth(user);
            console.log(auth);

            navigate("/today");
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="overlay">
      <div className="form">
        <div className="con">
          <header className="head-form">
            <h2>Log in</h2>
            <p>login here using your username and password</p>
          </header>
          <br></br>
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input
                className="inputuser"
                value={username}
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                className="inputpassword"
                value={password}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #7DA863",
                }}
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>
            </Form.Item>
          </Form>
          <div class="other">
                    
                    <button class="btn submits frgt-pass">Forgot Password?</button>
                   
                    <button class="btn submits sign-up">Sign Up
                      
                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                    </button>
                   
                </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
