import { Space, Typography } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavItem({ text, path, Icon }) {
    const navigate = useNavigate()
    const style = window.location.pathname.includes(path) ? { color: '#0085FF' } : { color: 'rgba(0, 0, 0, 0.7)' }

    return (
        <Space
            direction='vertical'
            align='center'
            size={4}
            style={{ width: '100%', ...style }}
            onClick={() => navigate(path)}
        >
            <Icon style={{ fontSize: '32px' }} />
            <Typography.Text style={style}>{text}</Typography.Text>
        </Space>
    )
}

export default NavItem