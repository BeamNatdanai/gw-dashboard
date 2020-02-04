import { useState , useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import Layout from '../components/layout'
import sess , { getItem , setItem } from '../lib/session';
import { Table , Button } from 'antd';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{text}</p>)
      }
    },
    {
      title: 'Age',
      dataIndex: 'age',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{text}</p>)
      }
    },
    {
      title: 'Address',
      dataIndex: 'address',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{text}</p>)
      }
    },
];

const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
];

const Dashboard = () => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(!mySess.isAdmin){
            Router.push('/signin')
        }
    })

    return (
      <div>
            <Head>
                <title>GW | Management</title>
            </Head>
            <Layout>

                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h4 default under-line-text text-shadow-black">Card Game</p>
                    </div>
                </div>

                <br/>
                <div className="row">
                    <div className="col">
                        <Button className="gw-btn-add-class">สร้างห้อง</Button>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col">
                        <Table bordered columns={columns} size="small" dataSource={data} scroll={{ x: 500 }} />
                    </div>
                </div>

            </Layout>
            <style global jsx>{`

                .gw-btn-add-class {
                    float:right;
                }

                .ant-table-column-title {
                    font-family: "Noto Sans Thai Bold";
                    text-shadow: -1px 0 #F4CD5F, 0 1px #F4CD5F, 1px 0 #F4CD5F, 0 -1px #F4CD5F;
                    color #000;
                }

                .gw-text-incolumn {
                    color #000;
                    font-family: "Noto Sans Thai Bold";
                    text-shadow: -1px 0 #93C54B, 0 1px #93C54B, 1px 0 #93C54B, 0 -1px #93C54B;
                }

                @media (min-width: 320px) and (max-width: 480px) {

                    .gw-btn-add-class {
                        margin-top: 0;
                        margin-bottom: 0rem;
                        min-width:100%;
                        margin-top:15px;
                        float:none;
                    }
                
                }

            `}</style>
      </div>
    )

}

export default Dashboard
