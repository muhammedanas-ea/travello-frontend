import axios from 'axios';
import { GenerateError } from '../toast/Toast';

const adminApi = axios.create({
    baseURL:`http://localhost:3001/admin`
})

const handleApiCallError = (error) =>{
    GenerateError(error.response.data.message)
    return
}

export async function userDetails(userData){
    try{
        const data = await adminApi.get('/userlist',userData)
        return data
    }catch(err){
        handleApiCallError(err)
    }

}

export async function AdminLoginVerify(loginData){
    try{
        const data = await adminApi.post('/adminLogin',loginData)
        console.log(data,'isssssssssssssssssssss');
        return data
    }catch(err){
        handleApiCallError(err)
    }
}

