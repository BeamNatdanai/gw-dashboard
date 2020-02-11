import { useState , useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import Layout from '../../../components/layout';
import { Table, Button, Icon } from 'antd';

const Monitor = ({classes}) => {

    return (

        <div>
            <Head>
                <title>GW | Management</title>
            </Head>
            <Layout>
                <div className="row">
                    <div className="col-12">
                        <p className="gw-text-h4 default under-line-text text-shadow-black">มอนิเตอร์ </p>
                    </div>
                </div>

                <br/>
            </Layout>
        </div>
    )
}

Monitor.getInitialProps = async ({ req }) => {
    return {}  
}
  
export default Monitor