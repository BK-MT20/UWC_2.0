import { Outlet, useNavigate } from "react-router-dom"
import { Layout as LayoutAntd } from 'antd'
import Navbar from "../../components/navbar"
import { useEffect } from "react"

function Layout() {
    const navigate = useNavigate()

    useEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/today')
        }
    }, [])

    return (
        <LayoutAntd style={{ height: '100%' }}>
            <LayoutAntd.Content>
                <Outlet />

            </LayoutAntd.Content>
            <LayoutAntd.Footer style={{ padding: '16px 5px', boxShadow: '4px 0 10px 1px rgb(0, 0, 0, 0.2)' }}>
                <Navbar />
            </LayoutAntd.Footer>
        </LayoutAntd>
    )
}

export default Layout