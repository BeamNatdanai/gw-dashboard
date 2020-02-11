import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../../components/layout';
import { addClass , getClass } from '../../../api/games/card'
import { Form,  Input, Button, InputNumber, Icon, Switch } from 'antd';

const AddClass = (props) => {

    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
          if (!err) {
               const res = await addClass(values)
               if(res.status){
                    alert("สร้างห้องเสร็จสิ้น")
                    Router.push('/game/card/card_manage')
               }else{
                    alert("สร้างห้องไม่สำเร็จ !! กรุณาลองใหม่อีกครั้งค่ะ")
                    Router.push('/game/card/card_add_class')
               }
          }
        });

    };

    const funcGetClass = () => {
        const result = getClass();
    }

    return(

        <div>
                <Head>
                    <title>GW | เพิ่มห้องเล่น</title>
                </Head>
                <Layout>

                    <div className="row">
                        <div className="col-12">
                            <p className="gw-text-h4 default under-line-text text-shadow-black">สร้างห้อง เกมส์ไพ่</p>
                        </div>
                    </div><br/>

                    <div className="row">
                        <div className="offset-sm-2 col-sm-8 offset-lg-4 col-lg-4">
                            <Form onSubmit={handleSubmit}>
                                <Form.Item>
                                    {getFieldDecorator('class_url', {
                                        rules: [{ required: true, message: 'กรุณากรอก URL video stream!' }],
                                    })(
                                        <Input placeholder="url video stream" />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('class_userlimit', {
                                        rules: [{ required: true, message: 'จำนวนจำกัดผู้เล่น!' }],
                                    })(
                                        <InputNumber style={{width:'100%'}} min={1} max={200} maxLength="4"  placeholder="จำนวนผู้เล่นจำกัด" />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('class_trade_unit', {
                                        rules: [{ required: true, message: 'กรุณากรอก จำนวนขา!' }],
                                    })(
                                        <InputNumber style={{width:'100%'}} min={1} max={5} maxLength="1" placeholder="จำนวนขา" />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('class_is_open', {
                                        initialValue: false,
                                        valuePropName: "checked"
                                    })(
                                        <Switch
                                            checkedChildren=""
                                            unCheckedChildren=""
                                        />,
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="login-form-button">
                                        เพิ่มห้อง
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>

                </Layout>
        </div>
    )
}

const WrappedNormalLoginForm = Form.create({ name: 'card_add_class' })(AddClass);
export default WrappedNormalLoginForm