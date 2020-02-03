
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const MyLayout  = (props) => {

    const [ collapsed , setCollapsed ] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    const logout = () => {
        console.log("logout")
    }

    return (
        <>
            <Layout className="gw-home">
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" >
                        {((collapsed) ? 
                            <p className="gw-logo"> GW </p>
                        : 
                            <p className="gw-logo"> GW Dashboard </p>
                        )}
                        
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="dashboard">
                            <Icon type="dashboard" />
                            <span>ส่วนควบคุม</span>
                        </Menu.Item>
                        <Menu.Item key="config">
                            <Icon type="setting" />
                            <span>ตั้งค่าเกมส์</span>
                        </Menu.Item>
                        <Menu.Item key="manageClass">
                            <Icon type="desktop" />
                            <span>จัดการห้องเล่น</span>
                        </Menu.Item>
                        <SubMenu
                            key="report"
                            title={
                                <span>
                                    <Icon type="file" />
                                    <span>รายงาน</span>
                                </span>
                            }
                        >
                            <Menu.Item key="report_win_lose">
                                <Icon type="caret-right" />
                                <span> แพ้ - ชนะ </span>
                            </Menu.Item>
                        </SubMenu>
                        <Menu.Item key="logout" onClick={()=>{logout()}}>
                            <Icon type="poweroff" />
                            <span>ออกจากระบบ</span>
                        </Menu.Item>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header style={{ background: '#011429', padding: 0 }}>
                        <Icon
                        className="trigger"
                        style={{ color:'#F4CD5F' }}
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={()=>{toggle()}}
                        />
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#303138',
                        borderRadius: 5,
                        minHeight: 280,
                        }}
                    >
                        {props.children}
                    </Content>
                </Layout>
                
            </Layout>
            <style global jsx>{`
                .ant-menu.ant-menu-dark .ant-menu-item-selected, .ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
                    background-color: #F4CD5F;
                }
                .ant-menu-dark .ant-menu-item-selected .anticon + span {
                    color: #000;
                }
                .ant-menu-dark .ant-menu-item-selected .anticon {
                    color: #000;
                }
            `}</style>
        </>
    )
}

export default MyLayout 