import React, { useState, useEffect, useRef } from "react";
import "./chat.css";
import Conversations from "./Conversations";
import { Input, Avatar, Form } from "antd";
import UseAuth from "../../../hooks/UseAuth";
import axios from "axios";
import { SearchOutlined, MoreOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Chat = () => {
  const [form] = Form.useForm();
  const { auth, setAuth } = UseAuth();

  const user = JSON.parse(localStorage.getItem("user"));
  const [conversations, setConversations] = useState([]);
  const [currentChat, setcurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const scrollRef = useRef();
  const [search, setSearch] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    setAuth(user);
  }, []);

  useEffect(() => {
    const getConversations = async () => {
      await axios
        .get("http://localhost:3000/conversations")
        .then((res) => {
          const conversation = res.data.filter((co) =>
            co.members.find((m) => m === auth.id)
          );

          if (search) {
            setConversations(
              conversations.filter((co) =>
                co.members.find((m) => m.toLowerCase().includes(search))
              )
            );
          } else {
            setConversations(conversation);
          }
        })
        .catch((error) => console.log(error));
    };

    getConversations();
  }, [search, auth.id]);
  useEffect(() => {
    localStorage.setItem("currentChat", JSON.stringify(currentChat));
    if (currentChat) {
      navigate("/chat/mess");
    }
  }, [currentChat]);

  return (
    <>
      <div className="chat">
        <div className="header">Messenger</div>
        <div className="search">
          <Input
            className="form-search"
            size="middle"
            placeholder="search"
            prefix={<SearchOutlined />}
            onChange={(e) => {
              setSearch(e.target.value);
              // console.log(search)
            }}
            value={search}
          />
        </div>
        <div className="body">
          <div className="chat-body">
            {conversations.map((c, idx) => (
              <div
                className="chat-conver"
                key={`${c._id}-${idx}`}
                onClick={() => {
                  setcurrentChat(c);
                  // console.log(JSON.parse(localStorage.getItem("currentChat")));
                }}
              >
                <Conversations conversation={c} currentUser={auth.id} />
                
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
