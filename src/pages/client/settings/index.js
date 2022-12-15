import {
  Avatar,
  Col,
  Divider,
  List,
  Row,
  Space,
  Typography,
  Modal,
} from "antd";
import {
  UserOutlined,
  NotificationOutlined,
  GlobalOutlined,
  LogoutOutlined,
  InfoCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import UseAuth from "../../../hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "antd-mobile";

function Settings() {
  const { auth, setAuth } = UseAuth();
  const navigate = useNavigate();
  const data = [
    {
      title: "Infomation",
      icon: InfoCircleOutlined,
    },
    {
      title: "Notification",
      icon: NotificationOutlined,
    },
    {
      title: "Language",
      icon: GlobalOutlined,
    },
    {
      title: "Logout",
      icon: LogoutOutlined,
    },
  ];
  const warning = () => {
    Modal.warning({
      title: "Are you sure want to log out",
      onOk() {
        localStorage.removeItem("user");
        localStorage.removeItem("active");
        navigate("/");
      },
    });
  };
  return (
    <Space direction="vertical" style={{ width: "100%", padding: "24px 16px" }}>
      <Typography.Title
        level={1}
        style={{
          margin: "0 20px"
        }}
      >
        Settings
      </Typography.Title>
      <Row justify="center" style={{ marginTop: "12px", padding: "16px 20px" }}>
        <Col span={20}>
          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <Avatar size={96} icon={<UserOutlined />} />
            <Typography.Title level={4}>{auth.username}</Typography.Title>
          </Space>
        </Col>
      </Row>
      <Divider style={{ padding: "0", margin: "0" }} />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              onClick={() => {
                if (item.title === "Logout") {
                  return warning();
                }
              }}
              avatar={
                <item.icon style={{ fontSize: "20px" }} />
              }
              title={item.title}
            />
            <Button fill="none"><RightOutlined /></Button>
          </List.Item>
        )}
      />
    </Space>
  );
}

export default Settings;
