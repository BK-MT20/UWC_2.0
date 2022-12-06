import React, { useState } from 'react'
import { NavBar, Space, Toast, Avatar, ImageViewer, Button } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'
import './checkin.css'
import { LeftOutline } from 'antd-mobile-icons'
import { LeftOutlined} from '@ant-design/icons'
const demoAvatarImages = [
  'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
  'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
]
// const Single = () => {
//   const [visible, setVisible] = useState(false)
//   return (
//     <>
//       <Button
//         onClick={() => {
//           setVisible(true)
//         }}
//       >
//         显示图片
//       </Button>
//       <ImageViewer
//         image={demoImage}
//         visible={visible}
//         onClose={() => {
//           setVisible(false)
//         }}
//       />
//     </>
//   )
// }

function Checkin() {
  const handleClick1 = () => {
  
    localStorage.setItem('trangthai',false);
    
    
 
  };

  return (
    <div className="checkin">
    <div className='headercheckin'>
     <a href='/today' className='icon' onClick={handleClick1} >
     <LeftOutlined />
     </a>
    </div>
     <div className="content">
       <div className="QR">YOUR QR CODE CHECKIN HERE</div>
       <div className="QRlogo">

         <img className='QRimg' src="https://i.pinimg.com/564x/60/c1/4a/60c14a43fb4745795b3b358868517e79.jpg"/>
       </div>
     </div>
   </div>

  )
}

export default Checkin