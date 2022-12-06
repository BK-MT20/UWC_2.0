import React, { useState, useEffect, useRef } from "react";
import "./HomeMess.css";
import Message from "./Message";
import { Input, Avatar, Button, Form } from "antd";
import axios from "axios";
import { LeftOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import UseAuth from "../../../hooks/UseAuth";
import { UserOutlined } from "@ant-design/icons";
const HomeMess = ({ own }) => {
  const { auth, setAuth } = UseAuth();
  const user = JSON.parse(localStorage.getItem("user"));

  const { form } = Form.useForm();
  const [newMessage, setNewMessage] = useState(null);
  const scrollRef = useRef();

  const [currentChat, setcurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const cur = JSON.parse(localStorage.getItem("currentChat"));
  const friend = cur.members.filter((c) => c !== auth.username);
  useEffect(() => {
    const getMessages = async () => {
      try {
        let response = await axios.get("http://localhost:3000/message");
        response = response.data.filter(
          (r) => r.conversationId === currentChat?.id
        );
        setMessages(response);
        // console.log(response, auth);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    setAuth(user);
    setcurrentChat(cur);
  }, []);

  const onFinish = () => {
    axios
      .post("http://localhost:3000/message", {
        sender: auth.username,
        text: newMessage,
        conversationId: currentChat.id,
      })
      .then((res) => {
        // console.log(res.data, currentChat.id);
        setMessages([...messages, res.data]);
        setNewMessage(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="homemess">
        <div className="header-mess">
          <div className="out">
            <a href="/chat" style={{ backgroundColor: "white" }}>
              <LeftOutlined />
            </a>
          </div>
          <div className="name-people">{friend[2]}</div>
          <div className="avatar">
            <Avatar icon={<UserOutlined />}></Avatar>
          </div>
        </div>
        <div className="body-mess">
          <div className="chat-type">
            {messages?.map((m, index) => (
              <div key={`message-item-${m._id}-${index}`} ref={scrollRef}>
                <Message message={m} own={m.sender === auth.username} />
              </div>
            ))}
          </div>
        </div>

        <div className="type-mess">
          <Form
            className="form-mess"
            form={form}
            onFinish={onFinish}
            layout="inline"
          >
            <FormItem>
              <Input
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
                className="input-message"
                value={newMessage}
                size="normal"
                placeholder="type messenger"
              />
            </FormItem>
            <Form.Item className="send-message">
              <Button type="primary" htmlType="submit" className="button-send">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HomeMess;
