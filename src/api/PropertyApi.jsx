import axios from 'axios';
import { GenerateError } from '../toast/Toast';

const propertyApi = axios.create({
    baseURL:`http://localhost:3001/property`
})

const handleApiCallError = (error) =>{
    GenerateError(error.response.data.message)
}




export async function propertySignUp(signupData){
    try{
        const data = await propertyApi.post('/propertySignup',signupData)
        return data
    }catch(err){
        handleApiCallError(err);
    }
}