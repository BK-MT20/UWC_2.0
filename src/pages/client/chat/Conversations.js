import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Conversation.css";
const Conversations = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser);
    // console.log(currentUser)
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:3000/users/" + friendId);

        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://ss-images.saostar.vn/wp700/pc/1613810558698/Facebook-Avatar_3.png"
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversations;
