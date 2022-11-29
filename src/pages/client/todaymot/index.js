import './todaymot.css';

import { React, useState } from "react";

import { Button } from 'antd'

import { ClockCircleFill } from 'antd-mobile-icons'


function Todaymot() {
    
    let [trangthai1, setTrangthai1] = useState(false);

    let [trangthai2, setTrangthai2] = useState(true);

    let handleClick1 = () => {
        if (trangthai1 === true) {
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
                <Button className="btn-background-slide"  type='primary' disabled={trangthai2} onClick= {handleClick1}>
                    Check In
                </Button>
                <Button className="btn-background-slide"  disabled={trangthai1} onClick= {handleClick1} href="./checkout" >
                    Check Out
                </Button>
            </div>
        </div>
    )
}

export default Todaymot;
