import { useState , useEffect  } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../../components/layout';
import { Table, Button, Icon, Card } from 'antd';
import { getClassById } from '../../../api/games/card';
import { getRoundByClassId , addRound , updateRound } from '../../../api/games/round';
import { numberWithCommas } from '../../../lib/func'
import * as moment from 'moment';

const tabList = [
    {
      key: 'dashboard',
      tab: 'ส่วนควบคุม',
    },
    {
        key: 'trade_limit',
        tab: 'การอั้น',
    },
    {
      key: 'conclusion',
      tab: 'สรุปผล',
    }
];

const contentList = {
    players: <p>content1</p>,
    tab2: <p>content2</p>,
};

const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

const Monitor = ({classes}) => {

    const [cluck, setCluck] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
    const [tab, setTab] = useState(tabList);
    
    useEffect(()=>{
        setInterval(()=>{ setCluck(moment().format('YYYY-MM-DD HH:mm:ss'))  }, 1000);
    })
    
    const handleClickAddRound = async () => {
        const res = await addRound({
            class_id: classes._id,
            end_game: false,
            round_is_open: false,
        })

        if(res.status){
            alert("เพิ่มรอบเรียบร้อย")
            const resRounds = await getRound()
            setRounds(resRounds.data.data)
        }else{
            alert("เกิดข้อผิดพลาดในการ เพิ่มรอบ กรุณาลองใหม่")
        }
        
    }

    const handleClickLoading = async () => {
        const resRounds = await getRound()
        setRounds(resRounds.data.data)
    }

    const onTabChange = async (type,key) => {
        setTab({ [key]: type });
    }

    return (

        <div>
            <Head>
                <title>GW | Management</title>
            </Head>
            <Layout>
                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h4 default under-line-text text-shadow-black"> มอนิเตอร์ </p><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h5 default text-shadow-black"> {`ห้องเล่น : ${classes._id} `} </p>
                        <p className="gw-text-h5 default text-shadow-black"> {`วิดิโอที่สตรีม : ${classes.class_url} `} </p>
                        <p className="gw-text-h5 default text-shadow-black"> {`ผู้เล่นจำกัด : ${numberWithCommas(classes.class_userlimit)} คน `} </p>
                        <p className="gw-text-h5 default text-shadow-black"> {`สถานะห้อง : ${(classes.class_is_open ? 'เปิด' : 'ปิด' )} `} </p>
                        <p className="gw-text-h5 default text-shadow-black">เวลาปัจจุบัน : <span className="black text-shadow-gold">{cluck}</span> </p><br/>
                    </div>
                    <div className="col-12">
                    <Button onClick={()=>{handleClickAddRound()}} className="gw-btn-add-class pull-right">เปิดรอบใหม่</Button>
                    <Button onClick={()=>{handleClickLoading()}} icon="reload" type="primary" size="default" style={{marginLeft:5,marginRight:5}} className="pull-right" />
                    </div>
                </div><br/>

                <div className="row">
                    <div className="col-12">
                        <Card
                            style={{ width: '100%' }}
                            title={
                                <div className="row">
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <p className="gw-text-h5  "> {`รหัสรอบ : ${classes._id} `} </p>
                                        <p className="gw-text-h5  "> {`สถานะ : ออฟไลน์ `} </p>
                                    </div>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                                        <Button type="primary" onClick={()=>{}} className="gw-btn-add-class pull-right">ออนไลน์</Button>
                                    </div>
                                    <div className="col-12">
                                        <br/>
                                        <Table dataSource={dataSource} columns={columns} size="small" />
                                    </div>
                                </div>
                            }
                            tabList={tabList}
                            activeTabKey={tab.key}
                            onTabChange={key => {
                                onTabChange(key, 'key');
                            }}
                            >
                            {contentList[tab.key]}
                        </Card>
                    </div>
                </div>
                <br/>
                <style global jsx>{`
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

              `}</style>
            </Layout>
        </div>
    )
}

Monitor.getInitialProps = async ({ query }) => {
    const result = await getClassById(query.class)

    return {
        classes: result.data.data[0],
        // rounds: rounds.data.data.filter((row,index) => {
        //     row.key = index;
        //     return row;
        // })
    }
}
  
export default Monitor