import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import sess , { getItem , setItem } from '../lib/session';

const Signin = (props) => {

    const handleClickSignin = (_event) => {
        const member_username = document.getElementById("member_username").value
        const member_pass = document.getElementById("member_pass").value
        event.preventDefault();

        console.log({member_username,member_pass})
 
    }

    return(
        <div className="gw-body-default" >
                <Head>
                    <title>GW | Signin</title>
                </Head>
                <div className="container">
                    <div className="space-40" />
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p className="gw-text-h1 default">Games World Dashboard</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <p className="gw-text-h2 default">ยืนยันตัวตน</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="gw-form">
                                <form onSubmit={handleClickSignin}>
                                    <input id="member_username" className="gw-input-middle" placeholder="ชื่อบัญชี" maxLength="16" type="text" pattern="[[A-Za-z0-9]+" title="กรอกเฉพาะภาษาอังกฤษเท่านั้น" required/>
                                    <input id="member_pass" className="gw-input-middle" placeholder="รหัสผ่าน" maxLength="8" type="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="ต้องมีอักขระ 8 ตัวขึ้นไป ประกอบด้วย ตัวพิมพ์เล็ก และ ตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว" required/>
                                    <br/><br/>
                                    <Link href="/"><button className="gw-btn-main pointer" style={{marginRight:8}} >ยกเลิก</button></Link>
                                    <input className="gw-btn-main pointer" type="submit" value="ยืนยัน" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <style global jsx>{`
                    body {
                        background-color: #011429;
                    }
                `}</style>
        </div>
    )
}

export default Signin