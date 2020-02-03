import App from 'next/app';
import 'antd/dist/antd.css';
import Router from 'next/router';
// import UserContext from '../context/user';
import sess , { getItem , setItem } from '../lib/session';
import { isEmpty } from '../lib/func';

class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){

    }

    componentDidUpdate(prevProps , prevState){

    }


    render() {
        const { Component, pageProps } = this.props
        return (
            <Component {...pageProps} />
        )
    }
  
}

export default MyApp