import fetch from 'isomorphic-unfetch';
import { BaseUrl } from '../config/url';
import { apiKey } from '../config/key';

export const getUserAll = async () => {

    try {

        const response = await fetch(BaseUrl+'users/', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        })

        const json = await response.json()
        if(json.status){
            return await { status:true , data:json }
        }else{
            return await { status:false , data:json }
        }

    } catch(err) {
        return await { status:false , data:err }
    }
        
}

export const getUserById = async ( _id ) => {

    try {

        const response = await fetch(BaseUrl+'users/'+_id, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        })
        const json = await response.json()
        if(json.status){
            return await { status:true , data:json }
        }else{
            return await { status:false , data:json }
        }

    } catch(err) {
        return await { status:false , data:err }
    }
        
}