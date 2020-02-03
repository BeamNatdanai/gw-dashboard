
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

    return (
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
                    <Menu.Item key="1">
                        <Icon type="setting" />
                        <span>ตั้งค่าเกมส์</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>จัดการห้องเล่น</span>
                    </Menu.Item>
                    <SubMenu
                        key="3"
                        title={
                            <span>
                                <Icon type="file" />
                                <span>รายงาน</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">
                            <Icon type="caret-right" />
                            <span> แพ้ - ชนะ </span>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="3">
                        <Icon type="poweroff" />
                        <span>ออกจากระบบ</span>
                    </Menu.Item>
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                    className="trigger"
                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={()=>{toggle()}}
                    />
                </Header>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default MyLayout 