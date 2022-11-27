import React,{useEffect,useState,useRef} from "react";
import "./Message.css";
import { Avatar, Button } from "antd";
import axios from 'axios'
import UseAuth from "../../../hooks/UseAuth";
import { current } from "@reduxjs/toolkit";

const Message = ({messages, own }) => {
  const { auth } = UseAuth();
  const [currentChat, setcurrentChat] = useState(null)
 
  const scrollRef = useRef();
  
 
  return (
   
    <div className={own ? "message own" : "message"}>
      <div className="messTop">
        <Avatar
          className={own ? "messageimg-own" : "messageimg"}
          style={{
            color: "#f56a00",
            backgroundColor: "#fde3cf",
          }}
        ></Avatar>
        <Button
          className="messageText"
          shape="round"
          style={{
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* {messages.text} */}
        
        </Button>
      </div>
    </div>
  );
};

export default Message;
