import axios from 'axios';

const userApi = axios.create({
    baseURL:`http://localhost:3001`
})


export async function userSignUp(signupData){
    try{
        const data = await userApi.post('/signup',signupData)
        return data
    }catch(err){
        console.log(err)
    }
}


export async function emailVerify(id,token){
    try{
        const data = await userApi.get(`/${id}/verify/${token}`)
        return data
    }catch(err){
        console.log(err)
    }
}