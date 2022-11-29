import React, { useEffect, useState, useRef } from "react";
import "./Message.css";
import { Avatar, Button } from "antd";
import axios from "axios";

const Message = ({ message, own }) => {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messTop">
        <Avatar
          src="https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"
          className={own ? "messageimg-own" : "messageimg"}
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        ></Avatar>
        <span className={own ? "messageText-own" : "messageText"}>
          {message.text}
        </span>
      </div>
    </div>
  );
};

export default Message;
