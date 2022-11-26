import { Col, Grid, Menu, Row } from "antd";
import { ClockCircleOutlined, CalendarOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons'
import NavItem from "./NavItem";

function Navbar() {
    const items = [
        {
            text: 'Today',
            path: '/today',
            Icon: ClockCircleOutlined
        },
        // {
        //     text: 'Checkin',
        //     path: '/checkin',
        //     Icon: ClockCircleOutlined
        // },
        {
            text: 'Calendar',
            path: '/calendar',
            Icon: CalendarOutlined
        },
        {
            text: 'Chat',
            path: '/chat',
            Icon: MessageOutlined
        },
        {
            text: 'Settings',
            path: '/settings',
            Icon: EllipsisOutlined
        },
    ]

    return (
        <Row>
            {
                items.map((item, index) => (
                    <Col key={'navitem-' + index} span={6}><NavItem {...item} /></Col>
                ))
            }
        </Row>
    )
}

export default Navbar