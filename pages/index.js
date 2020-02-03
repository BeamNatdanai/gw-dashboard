import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

const Home = () => {

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

export default Home
