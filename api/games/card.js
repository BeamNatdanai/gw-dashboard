import fetch from 'isomorphic-unfetch';
import { BaseUrl } from '../../config/url';
import { apiKey } from '../../config/key';

export const getClass = async () => {

    try {

        const response = await fetch(BaseUrl+'games/card/class', {
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

export const getClassById = async ( _id ) => {

    try {

        const response = await fetch(BaseUrl+'games/card/class/'+_id, {
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

export const addClass = async ( obj ) => {

    try {

        const response = await fetch(BaseUrl+'games/card/class', {
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

export const updateClass = async ( _id, obj ) => {

    try {

        const response = await fetch(BaseUrl+'games/card/class/'+_id, {
            method: 'PATCH',
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
      
