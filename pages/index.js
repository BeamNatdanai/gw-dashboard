import { useState , useEffect  } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const Dashboard = () => {

    useEffect(()=>{
        
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
