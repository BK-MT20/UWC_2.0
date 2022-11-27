import './today.css';

import { React, useState } from "react";
import { CheckCircleOutline } from 'antd-mobile-icons'
import { Button, Space } from 'antd'
import { Avatar, List } from 'antd-mobile'
import { ClockCircleFill } from 'antd-mobile-icons'
const demoAvatarImages = [
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]

function Today() {
    
    let [trangthai1, setTrangthai1] = useState(false);

    let [trangthai2, setTrangthai2] = useState(true);

    let handleClick1 = () => {
        if (trangthai1 == true) {
            setTrangthai1(false);
            setTrangthai2(true);
        } else {
            setTrangthai1(true);
            setTrangthai2(false);
        }
    }
  

  return (
    <div className="container">
      <div className="heading">TODAY</div>
      <div className="content1">
        <div className="hinhanh">
          <img
            alt=""
            src="https://png.pngtree.com/thumb_back/fw800/background/20190223/ourmid/pngtree-green-fresh-green-environmentally-friendly-city-advertising-background-cityadvertising-backgrounddisplay-board-image_81033.jpg"
            width="100%"
            height="100%"
          />
        </div>
      </div>
      {/* <div className="content2">
                {/* <img
                    alt=""
                    className="hinhanh2"
                    src="http://static.tapchitaichinh.vn/800x450/images/upload/vuminh/01282019/greeninvesting-1146x573.jpg"
                />
                <div className="doanvan">
                    <p className="van1">Garbage collection</p>

                </div> */}
      {/* <div title='配合列表使用' padding='0'>
                    <List>
                        <List.Item
                            prefix={<Avatar src={demoAvatarImages[3]} />}
                            description='Garbage collection'
                        >
                            Thanh Nam
                        </List.Item>
                    </List>
                </div>
                <div className="Box__checkbox"> */}
      {/* <label className="container1">
                        <input type="radio" name="checkbox-checked" checked />
                        <span class="checkmark"></span>
                    </label> */}
      {/* <CheckCircleOutline fontSize={40} color='#76c6b8' />

                </div>
            </div> */} 
            <div className="conten2">
                {/* <h1 className="firstline">8:00 - 9:30</h1>
                <h1 className="secondline">Cleveland Clinic</h1>
                <p className="thirdline">Full Renovation</p>
                <p className="fourthline">Gut</p>
                <h3 className="fifthline">Renovation Job</h3> */}
                <div className="section">
                <ClockCircleFill fontSize={40}/>  <span className="firstline">16:00 - 19:00</span> <br/>
                    <span className="secondline">Route: Lê Văn Việt -- Hoàng Hữu Nam -- Đường 154 -- đường 400(kết thúc)</span> <br/>
                    {/* <span className="thirdline">Full Renovation</span> <br/>
                    <span className="fourthline">Gut</span> <br/>
                    <span className="fifthline">Renovation Job</span> <br/> */}
                </div>
                
            </div>
            <div className="checkin-checkout">
                <Button className="btn-background-circle" href="./checkin"  type='primary' disabled={trangthai1} onClick= {handleClick1}>
                    Check In
                </Button>
                <Button className="btn-background-slide"  disabled={trangthai2} onClick= {handleClick1} >
                    Check Out
                </Button>
            </div>
        </div>
    )
}

export default Today;
