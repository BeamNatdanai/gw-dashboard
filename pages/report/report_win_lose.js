import { useState , useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import Layout from '../../components/layout'
import sess , { getItem , setItem } from '../../lib/session';

const reportWinLose = () => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(!mySess.isAdmin){
            Router.push('/signin')
        }
    })

    return (
      <div>
            <Head>
                <title>GW | report win - lose</title>
            </Head>
            <Layout>
                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h4 default under-line-text text-shadow-black">รายงาน แพ้-ชนะ</p>
                    </div>
                </div>
            </Layout>
      </div>
    )

}

export default reportWinLose
