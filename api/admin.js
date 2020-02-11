import fetch from 'isomorphic-unfetch';
import { BaseUrl } from '../config/url';
import { apiKey } from '../config/key';

export const signUp = async ( obj ) => {

    try {

        const response = await fetch(BaseUrl+'admins/', {
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

export const signIn = async ( obj ) => {

    try {

        const response = await fetch(BaseUrl+'admins/login/', {
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
            return await { status:true , ...json }
        }else{
            return await { status:false , ...json }
        }

    } catch(err) {
        // catches errors both in fetch and response.json
        return await { status:false , data:err }
    }
        

}

