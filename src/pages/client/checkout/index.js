
import { NavBar, Toast, Avatar, Result } from 'antd-mobile'

import { SmileOutline } from 'antd-mobile-icons'
import './checkout.css'
// import { LeftOutline } from 'antd-mobile-icons'

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

function Checkout() {
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })

  const right = (
    <div style={{ fontSize: 24 }}>
      {/* <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space> */}
      <Avatar style={{ marginLeft: '90px', '--border-radius': '40px' }} src={demoAvatarImages[0]} />
    </div>
  )

  return (
    <div className="container3">
      <div title='自定义右侧区域' className="navbarr" padding='0'>
        <a href="/today">
          <NavBar onBack={back} right={right}></NavBar>
        </a>
      </div>.
      <div className="content">
        <div className="firsttt">
        <Result
          status='warning'
          title='Check-Out QR code here'
          description='After checkin, please checkout to update the system'
        />
        </div>
        <div className="second">
          <img src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg"
            height="20%"
            width="60%">         
          </img>
        </div>
      </div>
    </div>

  )
}

export default Checkout