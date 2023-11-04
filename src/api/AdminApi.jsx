import axios from 'axios';
import { GenerateError } from '../toast/Toast';

const adminApi = axios.create({
    baseURL:`http://localhost:3001/admin`
})

const handleApiCallError = (error) =>{
    GenerateError(error.response.data.message)
    return
}

export async function UserDetails(userData){
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
        return data
    }catch(err){
        handleApiCallError(err)
    }
}


export async function UserBlock(id){
    try{
        // console.log(id);
        const data = await adminApi.put('/blockuser',id)
        return data
    }catch(err){
        console.log(err)
    }
}

export async function UserUnblock(id){
    try{
        const data = await adminApi.put('/ublockUser',id)
        return data
    }catch(err){
        console.log(err)
    }
}
