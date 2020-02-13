import { useState , useEffect  } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { topupCredit } from '../../../api/credit';
import Layout from '../../../components/layout';
import sess , { getItem , setItem } from '../../../lib/session';
import { numberWithCommas } from '../../../lib/func';
import { Table, Button, Icon, Form,  Input, InputNumber } from 'antd';

const WrappedFormTopup = Form.create({ name: 'form_credit_topup' })( (props) => {

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
            if (!err) {

                const res = await topupCredit(Router.query.user,values.credit_transfer)

                if(res.status){
                        alert("เติมเครดิตเสร็จสิ้น")
                        Router.push('/users')
                }else{
                        alert("เติมเครดิตไม่สำเร็จ !! กรุณาลองใหม่อีกครั้งค่ะ")
                        Router.push(Router.asPath)
                }
            }
        });

    };

    return(
            <div className="row">
                <div className="offset-sm-2 col-sm-8 offset-lg-4 col-lg-4">
                    <Form onSubmit={handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('credit_transfer', {
                                rules: [{ required: true, message: 'กรอกจำนวนเครดิต!' }]
                            })(
                                <InputNumber style={{width:'100%'}} min={0} max={10000} maxLength="5"  placeholder="กรอกจำนวนเครดิต" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                เติมเครดิต
                            </Button>&nbsp;
                            <Link href="/users">
                                <Button type="danger" htmlType="submit" className="login-form-button">
                                    ยกเลิก
                                </Button>
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )
});

const CreditTopup = (props) => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(!mySess.isAdmin){
            Router.push('/signin')
        }
    })


    return (

        <div>
              <Head>
                  <title>GW | Credit Topup</title>
              </Head>
              <Layout>

                    <div className="row">
                        <div className="col-12">
                            <p className="gw-text-h4 default under-line-text text-shadow-black">เติม เครดิต</p>
                        </div>
                    </div><br/><br/>

                    <div className="row">
                        <div className="col-12">
                            <WrappedFormTopup/>
                        </div>
                    </div>
                

              </Layout>
              <style global jsx>{`

              `}</style>
        </div>
    )

}


export default CreditTopup
