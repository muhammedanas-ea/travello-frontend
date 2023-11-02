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
        return data
    }catch(err){
        handleApiCallError(err)
    }
}


export async function emailVerify(id,token){
    try{
        const data = await userApi.get(`verify/${id}/${token}`)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}

export async function userLogin(loginData){
    try{
        const data = await userApi.post('/login',loginData)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}

export async function userGoogleSignUp(googleData){
    try{
        const data = await userApi.post('/googleSignUp',googleData)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}

export async function userGoogleSignin(googleSigninData){
    try{
        const data = await userApi.post('/googleSignin',googleSigninData)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}


export async function userForgotPassword(email){
    try{
        const data = await userApi.post('/forgotPassword',email)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}


export async function userRestPassword(resetPasswordData){
    try{
        const data = await userApi.post('/restPasword',resetPasswordData)
        return data
    }catch(err){
        handleApiCallError(err)
    }
}