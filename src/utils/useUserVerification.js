import { useEffect } from "react"
import { EmailVerify } from "../api/UserApi"
import { useDispatch } from "react-redux";
import setUserDetails from '../redux/userSlice/UserSlice'

export const useUserVerification = (userId,userToken) =>{
    const dispatch = useDispatch();

    useEffect(() =>{
        if(userId,userToken) userEmailverification()
    },[userId,userToken])

    const userEmailverification = async () =>{
        const response = await EmailVerify(userId,userToken)
        if (response.data.status) {
            localStorage.setItem("userToken", response.data.usertoken);
            const userDetails = {
              id: response.data.userData._id,
              name: response.data.userData.name,
              email: response.data.userData.email,
              number: response.data.number,
              houseName: response.data.houseName,
              state: response.data.state,
              city: response.data.city,
            };
            dispatch(
              setUserDetails({
                userInfo: userDetails,
              })
            );
        }
    }
}