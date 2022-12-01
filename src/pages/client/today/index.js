import "./today.css";
import { Time } from "./time.js";

import { React, useState } from "react";
import { CheckCircleOutline } from "antd-mobile-icons";
import { Button, Space, Card, Progress, Popover } from "antd";
import { Avatar, List } from "antd-mobile";
import { ClockCircleFill } from "antd-mobile-icons";
const demoAvatarImages = [
  "https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9",
  "https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
  "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
];
// const [messageApi, contextHolder] = message.useMessage();

function Today() {
  let [isActive, setIsActive] = useState(true);

 

  console.log(isActive);

  return (
    <div className="container">
      <div className="tittle">
        <h1>TODAY</h1>
      </div>
      <script src="time.js"> </script>
      <div className="time" id="dong_ho">
        <div id="thoi_gian">
          <span id="gio">00</span>
          <span>:</span>

          <span id="phut">00</span>
          <span>:</span>

          <span id="giay">00</span>
          <span></span>
        </div>
      </div>

      {/* <script src="time.js"> </script> */}

      <hr></hr>
      <div className="route">
        <div className="name-route">
          <h3>Route today</h3>

          <p className="route-today">1. Le Van Viet</p>
          <p className="route-today">2. Vo Van Ngan</p>
          <p className="route-today">3. Xa lo Ha Noi</p>
        </div>
        <div className="task">
          <h3>List MCP collection</h3>

          <p className="route-today">1. MCP A</p>
          <p className="route-today">2. MCP B</p>
          <p className="route-today">3. MCP C</p>
        </div>
      </div>
      <div className="progess">
        <h3>Task</h3>
        <Progress type="circle" percent={10} format={(percent) => `${percent} %`} />
        {/* <Progress percent={50} status="active" />
        <Progress percent={70} status="active" />
        <Progress percent={100} /> */}
      </div>
      <div className="checkin-checkout">
        <Button
          className="button"
          shape="round"
          href="./checkin"
          // disabled={trangthai1}
        
          size="large"
        >
          Check In
        </Button>

        <Button
         className="button-checkout"
          href="./checkout"
          size="large"
          shape="round"
        
         
        >
          Check Out
        </Button>

        {/* <Button
          className="button"
          href="./checkout"
          size="large"
          shape="round"
          onClick={warning}
        >
          Check Out
        </Button> */}
      </div>
    </div>
  );
}

export default Today;
