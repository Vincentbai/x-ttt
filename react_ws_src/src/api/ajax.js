import axios from 'axios'

 export default function ajax(url, data={}, type='GET'){

    return new Promise((resolve, reject)=>{

        let promise
    
        if(type === 'GET'){
            promise = axios.get(url,{ //配置对象
                params:data // 指定请求参数
            });
        }else{
            promise = axios.post(url, data)
        }
    
        promise.then(response=>{
            resolve(response.data)
        }).catch(error=>{
            console.log('Request Error! ' + error.message)
        })
    })
 }