import React, { useEffect, useState, useRef } from "react";
import "./Message.css";
import { Avatar, Button } from "antd";
import axios from "axios";
import { UserOutlined } from "@ant-design/icons";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messTop">
        <Avatar
          icon={<UserOutlined />}
          className={own ? "messageimg-own" : "messageimg"}
        ></Avatar>
        <span className={own ? "messageText-own" : "messageText"}>
          {message.text}
        </span>
      </div>
    </div>
  );
};

export default Message;
