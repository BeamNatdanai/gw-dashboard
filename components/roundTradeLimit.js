import { useState , useEffect  } from 'react';
import { Form,  Input, Button, InputNumber, Icon, Switch } from 'antd';
import { roundUpdateTradelimit } from '../api/games/round';

const generateArray = (number) => {
    let newArr = [] 
    for(let i = 0 ; i < number ; i++){
        newArr.push({ka:(i+1),credit_limit: null})
        if(i === number - 1){
            return newArr
        }
    }
}

const RoundTrandLimit = (props) => {

    let initForm = {
        trade_limit : generateArray(props.ka)
    }

    const { getFieldDecorator } = props.form;
    const [form , setForm] = useState(initForm)
    
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields( async (err, values) => {
          if (!err) {
      
                const res = await roundUpdateTradelimit(props.round._id,form)
                if(res.status){

                    alert("เพิ่มข้อมูลอั้นผลสำเร็จ")
                    
                }else{
                    alert("เกิดข้อผิดพลาดในการ เพิ่มข้อมูลอั้น กรุณาลองใหม่อีกครั้ง")
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
                                    <strong>อั้นขา</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    {form.trade_limit.map((row,index)=>{
                        return(
                            <div key={`ka_${index}`} className="row">
                                <div className="col-12 offset-lg-3 col-lg-6">
                                    <Form.Item>
                                        {getFieldDecorator(`trade_limit${row.ka}`, {
                                            rules: [{ required: true, message: `กรอกจำนวนเงินที่จะอั้น ขาที่ ${row.ka}!` }],
                                            initialValue: row.answer
                                        })(
                                            <InputNumber disabled={props.round.end_game} style={{width:'100%'}} min={0} max={500000} maxLength="6"  placeholder={`จำนวนเงินอั้น ขาที่ ${row.ka}`} onChange={(value)=>{ onChangeDataForm('trade_limit',index,'credit_limit',value) }} />,
                                        )}
                                    </Form.Item>
                                </div>
                            </div>
                        )
                    })}

                    <div className="col-12">
                        <center>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                บันทึกการ สรุปผล
                            </Button>
                        </Form.Item>
                        </center>
                    </div>
                </Form>
            </div>
        </div>
    )
}

const WrappedRoundTrandLimit = Form.create({ name: 'round_tradelimitn_form' })(RoundTrandLimit);
export default WrappedRoundTrandLimit