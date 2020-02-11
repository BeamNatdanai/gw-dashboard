import { useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Layout from '../../../components/layout';
import { getClassById, updateClass } from '../../../api/games/card'
import { Form,  Input, Button, InputNumber, Icon, Switch } from 'antd';


const WrappedFormUpdate = Form.create({ name: 'card_ipdate_class' })( (props) => {
    
    const [ url, setUrl ] = useState(props.class.class_url)
    const [ user_limit, setUserLimit ] = useState(props.class.class_userlimit)
    const [ trade_unit, setTradeUnit ] = useState(props.class.class_trade_unit)
    const [ status, setStatus ] = useState(props.class.class_is_open)

    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
            if (!err) {
                const res = await updateClass(props.class._id,values)
                if(res.status){
                        alert("แก้ไขห้องเสร็จสิ้น")
                        Router.push('/game/card/card_manage')
                }else{
                        alert("แก้ไขห้องไม่สำเร็จ !! กรุณาลองใหม่อีกครั้งค่ะ")
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
                            {getFieldDecorator('class_url', {
                                rules: [{ required: true, message: 'กรุณากรอก URL video stream!' }],
                                initialValue: url,
                            })(
                                <Input placeholder="url video stream" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('class_userlimit', {
                                rules: [{ required: true, message: 'จำนวนจำกัดผู้เล่น!' }],
                                initialValue: user_limit,
                            })(
                                <InputNumber style={{width:'100%'}} min={1} max={200} maxLength="4"  placeholder="จำนวนผู้เล่นจำกัด" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('class_trade_unit', {
                                rules: [{ required: true, message: 'กรุณากรอก จำนวนขา!' }],
                                initialValue: trade_unit,
                            })(
                                <InputNumber style={{width:'100%'}} min={1} max={5} maxLength="1" placeholder="จำนวนขา" />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('class_is_open', {
                                initialValue: status,
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
                                บันทึก
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
    )
});


const UpdateClass = withRouter(({ classes }) => {
    
    return(

        <div>
            <Head>
                <title>GW | เพิ่มห้องเล่น</title>
            </Head>
            <Layout>

                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h4 default under-line-text text-shadow-black">แก้ไขห้อง เกมส์ไพ่</p>
                    </div>
                </div><br/>

                <WrappedFormUpdate class={classes} />

                </Layout>
        </div>
    )

})

UpdateClass.getInitialProps = async ({ query }) => {
    const result = await getClassById(query.class)
    return {
        classes: result.data.data[0]
    }
}

export default UpdateClass