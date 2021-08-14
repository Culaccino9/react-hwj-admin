import React, { memo, Suspense } from 'react'

import { renderRoutes } from 'react-router-config'
import { Redirect } from 'react-router-dom'
import { shallowEqual, useSelector } from 'react-redux';

import { Layout } from 'antd';
import WJAside from '@/components/WJAside';
import WJBreadcrumb from '@/components/WJBreadcrumb';
import WJHeader from '@/components/LayoutHeader/WJHeader';
import WJLoading from '@/components/WJLoading';
export default memo(function WJLayout(props) {
    const { route, location } = props
    const role = sessionStorage.role || 'super'
    const fileRoutes = route.routes.filter(routes => {
        return routes.role.includes(role) && routes
    })
    const { pathname } = location

    const { token } = useSelector(state => ({
        token: state.user.token
    }), shallowEqual)
    const isLogin = token

    const sideStyle = { overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <>
            {isLogin ? <Redirect to="/" /> : <Redirect to="/login" />}
            <Layout>
                <Sider style={sideStyle}>
                    {/* <div className="logo" style={{ height: "32px", margin: "16px", background: "rgba(255, 255, 255, 0.2)" }} /> */}
                    <div style={{ height: "32px", margin: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" style={{ width: "32px" }} />
                        <h1 style={{ color: "#fff", fontSize: "17px", marginRight: "18px", fontFamily: "Roboto" }}>React Admin</h1>
                    </div>
                    <WJAside currentRoute={location} />
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ height: "50px", padding: 0, boxShadow: "0 1px 4px rgb(0 21 41 / 8%)" }}>
                        <WJHeader />
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        {
                            isLogin &&
                            (
                                <>
                                    <WJBreadcrumb pathname={pathname} />
                                    <Suspense fallback={<WJLoading />}>
                                        {renderRoutes(fileRoutes)}
                                    </Suspense>
                                </>
                            )
                        }
                    </Content>
                    <Footer style={{ textAlign: 'center', marginTop: "50px" }}>
                        <p>TECH-A Sell ©2021 Created by NZ UED</p>
                        <p style={{ marginTop: "18px" }}>最爱陈奕迅&emsp;@1874</p>
                    </Footer>
                </Layout>
            </Layout>
        </>
    )
})
