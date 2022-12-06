import "./login.css";
import React, { useState, useEffect } from "react";
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
              const id = res.id;
              // console.log(res.id)
              localStorage.setItem(
                "user",
                JSON.stringify({ username, password, id })
              );
              setAuth(JSON.parse(localStorage.getItem("user")));

              return res;
            }
          });
          if (user.length === 0) {
            message.error("Please check your username and password carefully");
          } else {
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
  // console.log(auth);

  return (
    <div className="login">
      <div className="login-header">
        <div className="text">
        <h1>Welcome to</h1>
        <h1>UWC 2.0</h1>
        <p>Sign in to continue</p>
        </div>
       
        {/* <img src="https://i.pinimg.com/564x/9d/9d/ef/9d9def01a4db9fad23d0aca705b667dd.jpg"/> */}
      
      </div>
      <div className="form">
      
        <div className="form-login-body">
          <Form form={form} onFinish={onFinish} className="form-login">
            <h6>Username</h6>
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
                value={username}
                size="large"
                prefix={<UserOutlined />}
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                
              />
            </Form.Item>
<h6>Password</h6>
            <Form.Item className="p"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
               size="large"
                value={password}
                prefix={<LockOutlined />}
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item className="form-button">
              <Button
              className="button"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  border: "1px solid #7DA863",
                  justifyContent:"center"
                }}
                shape="round"
                size="large"
                htmlType="submit"
              >
                Sign in
              </Button>
            </Form.Item>
          </Form>
          </div>
        </div>
    </div>
  );
}

export default Login;
