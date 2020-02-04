
import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router';
import { Layout, Menu, Icon } from 'antd';
import sess , { clear , setItem } from '../../lib/session';
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

const MyLayout  = (props) => {

    const [ collapsed , setCollapsed ] = useState(false)

    const toggle = () => {
        setCollapsed(!collapsed)
    };

    const logout = () => {
        clear()
        setItem(sess.name,{
            _id: null,
            name: null,
            username: null,
            token: null,
            isAdmin: false
        })
        Router.push('/')

    }

    const onClickMenu = (_params) => {
        Router.push(_params)
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
                        {/* <Menu.Item key="dashboard" onClick={()=>{onClickMenu('/')}}>
                            <Icon type="dashboard" />
                            <span>ส่วนควบคุม</span>
                        </Menu.Item> */}
                        {/* <Menu.Item key="config" onClick={()=>{onClickMenu('/config')}}>
                            <Icon type="setting" />
                            <span>ตั้งค่าเกมส์</span>
                        </Menu.Item> */}
                        <Menu.Item key="config" onClick={()=>{onClickMenu('/config')}}>
                            <Icon type="user" />
                            <span>สมาชิก</span>
                        </Menu.Item>
                        <SubMenu
                            key="game"
                            title={
                                <span>
                                    <Icon type="desktop" />
                                    <span>เกมส์</span>
                                </span>
                            }
                        >
                            <Menu.Item key="game_card" onClick={()=>{onClickMenu('/game_card')}}>
                                <Icon type="caret-right" />
                                <span> ไพ่ </span>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="report"
                            title={
                                <span>
                                    <Icon type="file" />
                                    <span>รายงาน</span>
                                </span>
                            }
                        >
                            <Menu.Item key="report_win_lose" onClick={()=>{onClickMenu('/report/report_win_lose')}}>
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
                    <Content className="gw-content-secction">
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

                .gw-content-secction {
                    margin: 24px 16px;
                    padding: 24px;
                    background: #55565e;
                    border-radius: 5px;
                    min-height: 100%;
                }

                @media (min-width: 481px) and (max-width: 767px) {

                    .gw-content-secction {
                        min-height: 120%;
                    }
                
                }

            `}</style>
        </>
    )
}

export default MyLayout 