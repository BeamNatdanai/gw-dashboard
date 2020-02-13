import { useState , useEffect  } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../components/layout';
import { getUserAll } from '../../api/user';
import sess , { getItem , setItem } from '../../lib/session';
import { numberWithCommas } from '../../lib/func';
import { Table, Button, Icon } from 'antd';

const columns = [
    {
      title: 'รหัสบัญชี',
      dataIndex: 'user_id',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn-primary">{text}</p>)
      }
    },
    {
      title: 'ชื่อ',
      dataIndex: 'user_name',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{text}</p>)
      }
    },
    {
      title: 'เครดิต',
      dataIndex: 'user_credit',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{numberWithCommas(text)}</p>)
      }
    },
    {
      title: 'เบอร์',
      dataIndex: 'user_tel',
      align:'center',
      render:(text)=>{
        return (<p className="gw-text-incolumn">{text}</p>)
      }
    },
    {
      title: 'สถาณะ',
      dataIndex: 'user_status',
      width: 120,
      align:'center',
      render:(text)=>{
        return ((text === true ? <p className="gw-text-incolumn-success">เปิด</p> : <p className="gw-text-incolumn-danger">ปิด</p> ) )
      }
    },
    {
      title: 'เครดิต',
      dataIndex: 'credit',
      align:'center',
      width: 140,
      render:(text,data)=>{
        return  (
                <div>
                    <Link href={`/users/credit/topup?user=${data._id}`}><a><Button type="primary" shape="circle" size="default" >เติม</Button></a></Link>&nbsp;
                    <Link href={`/users/credit/withdraw?user=${data._id}`}><a><Button type="danger" shape="circle" size="default" >ถอน</Button></a></Link>&nbsp;
                </div>
          ) 
      }
    },
    {
      title: 'จัดการ',
      dataIndex: 'monitor',
      align:'center',
      width: 140,
      render:(text,data)=>{
        return  (
                  <div>
                    <Button type="danger" shape="circle" icon="delete" size="default" onClick={ async ()=>{ 
                        const res = await updateClass(data._id,{class_is_del:true})
                        if(res.status){
                            alert("ลบข้อมูลเสร็จสิ้นค่ะ")
                            Router.push(Router.asPath)
                        }else{
                            alert("ลบข้อมูล ผิดพลาดค่ะ กรุณาลองใหม่")
                            Router.push(Router.asPath)
                        }
                    }} />
                  </div>
          ) 
      }
    }
];

const Users = ({users}) => {

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
                          <p className="gw-text-h4 default under-line-text text-shadow-black">สมาชิก</p>
                      </div>
                  </div><br/><br/>

                  <div className="row">
                      <div className="col">
                          <Table 
                            bordered 
                            columns={columns} 
                            size="small" 
                            dataSource={users} 
                            scroll={{ x: 500 }} />
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
                      text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
                  }

                  .gw-text-incolumn-primary {
                    color #000;
                    font-family: "Noto Sans Thai Bold";
                    text-shadow: -1px 0 #57aeff, 0 1px #57aeff, 1px 0 #57aeff, 0 -1px #57aeff;
                  }

                  .gw-text-incolumn-success {
                    color #000;
                    font-family: "Noto Sans Thai Bold";
                    text-shadow: -1px 0 #93C54B, 0 1px #93C54B, 1px 0 #93C54B, 0 -1px #93C54B;
                  }

                  .gw-text-incolumn-danger {
                    color #000;
                    font-family: "Noto Sans Thai Bold";
                    text-shadow: -1px 0 #e33d3d, 0 1px #e33d3d, 1px 0 #e33d3d, 0 -1px #e33d3d;
                  }

                  .ant-table-row {
                    cursor: pointer;
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

Users.getInitialProps = async ({ req }) => {
  const results = await getUserAll();
    return { users: results.data.data.filter((row,index) => {
        row.key = index;
        return row;
    }) 
  }
}

export default Users
