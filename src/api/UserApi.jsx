import axios from 'axios';
import { GenerateError } from '../toast/Toast';

const userApi = axios.create({
    baseURL:`http://localhost:3001`
})

const handleApiCallError = (error) =>{
    GenerateError(error.response.data.message)
}


export async function userSignUp(signupData){
    try{
        const data = await userApi.post('/signup',signupData)
        console.log(data,'sdfghjkl')
        return data
    }catch(err){
        handleApiCallError(err)
    }
}


export async function emailVerify(id,token){
    try{
        const data = await userApi.get(`/${id}/verify/${token}`)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}