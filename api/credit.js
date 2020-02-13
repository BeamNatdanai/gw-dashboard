import fetch from 'isomorphic-unfetch';
import { BaseUrl } from '../config/url';
import { apiKey } from '../config/key';

export const topupCredit = async ( id , credit_transfer ) => {

    try {

        const obj = {
            person_receive: id,
            credit_transfer: credit_transfer,
            is_transfer: true
        }

        const response = await fetch(BaseUrl+'credit', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            },
            body: JSON.stringify(obj)
          })
        const json = await response.json()
        if(json.status){
            return await { status:true , data:json }
        }else{
            return await { status:false , data:json }
        }

    } catch(err) {
        // catches errors both in fetch and response.json
        return await { status:false , data:err }
    }
        
}

export const withdrawCredit = async ( id , credit_transfer ) => {

    try {

        const obj = {
            person_receive: id,
            credit_transfer: (credit_transfer - (credit_transfer * 2)),
            is_transfer: false
        }

        const response = await fetch(BaseUrl+'credit', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            },
            body: JSON.stringify(obj)
          })
        const json = await response.json()
        if(json.status){
            return await { status:true , data:json }
        }else{
            return await { status:false , data:json }
        }

    } catch(err) {
        // catches errors both in fetch and response.json
        return await { status:false , data:err }
    }
        
}