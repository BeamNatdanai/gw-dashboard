import { useState , useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router';
import Layout from '../components/layout'
import sess , { getItem , setItem } from '../lib/session';

const Dashboard = () => {

    useEffect(()=>{
        const mySess = getItem(sess.name)
        if(!mySess.isAdmin){
            Router.push('/signin')
        }
    })

    return (
      <div>
            <Head>
                <title>GW | Home</title>
            </Head>
            <Layout>
                Hello World
            </Layout>
      </div>
    )

}

export default Dashboard
