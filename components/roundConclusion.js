import { useState , useEffect  } from 'react';
import { Form,  Input, Button, InputNumber, Icon, Switch } from 'antd';
import { roundUpdateConclusion } from '../api/games/round';

const generateArray = (number) => {
    let newArr = [] 
    for(let i = 0 ; i < number ; i++){
        newArr.push({ka:(i+1),answer: null,multiply: null})
        if(i === number - 1){
            return newArr
        }
    }
}


const RoundConclusion = (props) => {

    let initForm = {
        trade_result_owner : [{
            answer: null,
            multiply: null
        }],
        trade_result_player : generateArray(props.ka)
    }
    const { getFieldDecorator } = props.form;
    const [form , setForm] = useState(initForm)
    
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
          if (!err) {

                const res = await roundUpdateConclusion(props.round._id,form)
                console.log({res});
                
                if(res.status){

                    alert("เพิ่มข้อมูลสรุปผลสำเร็จ")
                    
                }else{
                    alert("เกิดข้อผิดพลาดในการ เพิ่มข้อมูล กรุณาลองใหม่อีกครั้ง")
                }
                
          }
        });

    };

    const onChangeDataForm = (mainkey,index,key,value) => {
        let _form = form;
        _form[mainkey][index][key] = value;
        setForm(_form)
    }
    
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
                                            initialValue: form.trade_result_owner[0].answer
                                        })(
                                            <InputNumber disabled={props.round.end_game} style={{width:'100%'}} min={0} max={9} maxLength="1"  placeholder="จำนวนแต้ม" onChange={(value)=>{ onChangeDataForm('trade_result_owner',0,'answer',value) }} />,
                                        )}
                                    </Form.Item>
                                </div>
                                <div className="col-6">
                                    <Form.Item>
                                        {getFieldDecorator('owner_result_multiply', {
                                            rules: [{ required: true, message: 'กรอกจำนวนเด้ง!' }],
                                            initialValue: form.trade_result_owner[0].multiply
                                        })(
                                            <InputNumber disabled={props.round.end_game} style={{width:'100%'}} min={0} max={2} maxLength="1"  placeholder="จำนวนเด้ง" onChange={(value)=>{ onChangeDataForm('trade_result_owner',0,'multiply',value) }} />,
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
                            {form.trade_result_player.map((row,index)=>{
                                return(
                                    <div key={`ka_${index}`} className="row">
                                        <div className="col-6">
                                            <Form.Item>
                                                {getFieldDecorator(`player_result_point_${row.ka}`, {
                                                    rules: [{ required: true, message: 'กรอกแต้ม!' }],
                                                    initialValue: row.answer
                                                })(
                                                    <InputNumber disabled={props.round.end_game} style={{width:'100%'}} min={0} max={9} maxLength="1"  placeholder="จำนวนแต้ม" onChange={(value)=>{ onChangeDataForm('trade_result_player',index,'answer',value) }} />,
                                                )}
                                            </Form.Item>
                                        </div>
                                        <div className="col-6">
                                            <Form.Item>
                                                {getFieldDecorator(`player_result_multiply_${row.ka}`, {
                                                    rules: [{ required: true, message: 'กรอกจำนวนเด้ง!' }],
                                                    initialValue: row.multiply
                                                })(
                                                    <InputNumber disabled={props.round.end_game} style={{width:'100%'}} min={0} max={2} maxLength="1"  placeholder="จำนวนเด้ง"  onChange={(value)=>{ onChangeDataForm('trade_result_player',index,'multiply',value) }} />,
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