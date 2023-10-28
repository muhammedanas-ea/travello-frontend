import axios from 'axios';

const userApi = axios.create({
    baseURL:`http://localhost:3001`
})


export async function userSignUp(data){
    try{
        const userSignUpData = await userApi.post('/signup',data)
        console.log(userSignUpData,'api working good')
        return userSignUpData
    }catch(err){
        console.log(err)
    }
}