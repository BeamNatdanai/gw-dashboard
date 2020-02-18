import { useState , useEffect  } from 'react';
import { Form,  Input, Button, InputNumber, Icon, Switch } from 'antd';

const generateArray = (number) => {
    let newArr = [] 
    for(let i = 0 ; i < number ; i++){
        newArr.push({ka:(i+1)})
        if(i === number - 1){
            return newArr
        }
    }
}

const RoundConclusion = (props) => {
    const kas = generateArray(props.ka)
    const { getFieldDecorator } = props.form;
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
          if (!err) {
                console.log({values});
          }
        });

    };
    
    return (
        <div className="row">
            <div className="col-12">
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <strong>เจ้าของ</strong>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <Form.Item>
                                        {getFieldDecorator('owner_result_point', {
                                            rules: [{ required: true, message: 'กรอกแต้ม!' }],
                                        })(
                                            <InputNumber style={{width:'100%'}} min={1} max={9} maxLength="1"  placeholder="จำนวนแต้ม" />,
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="col-6">
                                    <Form.Item>
                                        {getFieldDecorator('owner_result_multiply', {
                                            rules: [{ required: true, message: 'กรอกจำนวนเด้ง!' }],
                                        })(
                                            <InputNumber style={{width:'100%'}} min={1} max={2} maxLength="1"  placeholder="จำนวนเด้ง" />,
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                        </div>

                        <div style={{}} className="col-12 col-sm-6 col-md-6 col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <strong>ผู้เล่น</strong>
                                </div>
                            </div>
                            {kas.map((row,index)=>{
                                return(
                                    <div key={`ka_${index}`} className="row">
                                        <div className="col-6">
                                            <Form.Item>
                                                {getFieldDecorator('owner_result_point', {
                                                    rules: [{ required: true, message: 'กรอกแต้ม!' }],
                                                })(
                                                    <InputNumber style={{width:'100%'}} min={1} max={9} maxLength="1"  placeholder="จำนวนแต้ม" />,
                                                )}
                                            </Form.Item>
                                        </div>
                                        <div className="col-6">
                                            <Form.Item>
                                                {getFieldDecorator('owner_result_multiply', {
                                                    rules: [{ required: true, message: 'กรอกจำนวนเด้ง!' }],
                                                })(
                                                    <InputNumber style={{width:'100%'}} min={1} max={2} maxLength="1"  placeholder="จำนวนเด้ง" />,
                                                )}
                                            </Form.Item>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-12">
                            <center>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    บันทึกการ สรุปผล
                                </Button>
                            </Form.Item>
                            </center>
                        </div>
                    </div>
                </Form>
            </div>
       
        </div>
    )
}

const WrappedRoundConclusionForm = Form.create({ name: 'round_conclusion_form' })(RoundConclusion);
export default WrappedRoundConclusionForm