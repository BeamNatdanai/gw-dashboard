import App from 'next/app';
import 'antd/dist/antd.css';
import Router from 'next/router';
import sess , { getItem , setItem } from '../lib/session';
import { isEmpty } from '../lib/func';

class MyApp extends App {

    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            name: null,
            username: null,
            token: null,
            isAdmin:false
        };
    }

    componentDidMount(){
        if(isEmpty(getItem(sess.name))){
            setItem(sess.name,{
                _id: null,
                name: null,
                username: null,
                token: null,
                isAdmin: false
            })
        }else{
            const mySess = getItem(sess.name)
            this.setState({
                _id: null,
                name: null,
                username: null,
                token: null,
                isAdmin: true
            })
        }
    }

    componentDidUpdate(prevProps , prevState){
        if(prevState.token !== this.state.token){

            if(isEmpty(getItem(sess.name))){
                setItem(sess.name,{
                    _id: null,
                    name: null,
                    username: null,
                    token: null,
                    isAdmin: false
                })
            }else{
                const mySess = getItem(sess.name)
                this.setState({
                    _id: null,
                    name: null,
                    username: null,
                    token: null,
                    isAdmin: true
                })
            }

        }
    }


    render() {
        const { Component, pageProps } = this.props
        return (
            <Component {...pageProps} />
        )
    }
  
}

export default MyApp