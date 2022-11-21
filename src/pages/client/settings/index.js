import { Avatar, Col, Divider, List, Row, Space, Typography } from "antd"
import { UserOutlined, NotificationOutlined, GlobalOutlined, LogoutOutlined, InfoCircleOutlined } from '@ant-design/icons'

function Settings() {
    const data = [
        {
            title: 'Infomation',
            icon: InfoCircleOutlined
        },
        {
            title: 'Notification',
            icon: NotificationOutlined
        },
        {
            title: 'Language',
            icon: GlobalOutlined
        },
        {
            title: 'Logout',
            icon: LogoutOutlined
        },
    ]
    return (
        <Space direction="vertical" style={{ width: '100%', padding: '0 16px' }}>
            <Typography.Title
                level={2}
                style={{
                    position: 'fixed',
                    top: '0'
                }}
            >Settings</Typography.Title>
            <Row justify='center' style={{ marginTop: '42px', padding: '16px 20px' }}>
                <Col span={20}>
                    <Space direction="vertical" align="center" style={{ width: '100%' }}>
                        <Avatar size={96} icon={<UserOutlined />} />
                        <Typography.Title level={4}>Nguyen Quang</Typography.Title>
                    </Space>
                </Col>
            </Row>
            <Divider style={{ padding: '0', margin: '0' }} />
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<item.icon style={{ fontSize: '20px', marginTop: '20px' }} />}
                            title={item.title}
                        />
                    </List.Item>
                )}
            />
        </Space>
    )
}

export default Settings