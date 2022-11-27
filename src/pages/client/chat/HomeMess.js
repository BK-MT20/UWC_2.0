import React, { useState, useEffect, useRef } from "react";
import "./HomeMess.css";
import Message from "./Message";
import { Input, Avatar, Button, Form } from "antd";
import axios from "axios";
import { LeftOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import UseAuth from "../../../hooks/UseAuth";
const HomeMess = ({ own }) => {
  const scrollRef = useRef();
  const { auth } = UseAuth();
  const { form } = Form.useForm();
  const [search, setSearch] = useState(null);
  const [messages, setMessages] = useState(null);
  const [currentChat, setcurrentChat] = useState(null);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("http://localhost:3000/message");

        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  return (
    <>
      <div className="homemess">
        <div className="header-mess">
          <div className="out">
            <a href="/chat">
              <LeftOutlined />
            </a>
          </div>
          <div className="name-people">Hoàng Phiếm</div>
          <div className="avatar">
            <Avatar
              style={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                width: "70%",
                height: "70%",
              }}
            ></Avatar>
          </div>
        </div>
        <div className="body-mess">
          <div className="chat-type">
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
            <Message own={true} />
            <Message own={false} />
          </div>
        </div>
      
      <div className="type-mess">
        <Form className="form-mess" form={form}>
          <FormItem>
            <Input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              size="normal"
              placeholder="type messenger"
            />
          </FormItem>
          <Form.Item className="send-message">
            <Button
              style={{
                width: "100%",
                backgroundColor: "#7DA863",
                borderRadius: "10px",
                border: "1px solid #7DA863",
                // color: 'white'
              }}
              type=""
              htmlType="submit"
            >
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
