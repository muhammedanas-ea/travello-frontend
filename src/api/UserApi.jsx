import axiosInterceptorInstance from "../utils/UserMiddleware";

const userApi = axiosInterceptorInstance;

export async function userSignUp(signupData) {
  try {
    const data = await userApi.post("/signup", signupData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function emailVerify(id, token) {
  try {
    const data = await userApi.get(`verify/${id}/${token}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function userLogin(loginData) {
  try {
    const data = await userApi.post("/login", loginData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function userGoogleSignUp(googleData) {
  try {
    const data = await userApi.post("/googleSignUp", googleData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function userGoogleSignin(googleSigninData) {
  try {
    const data = await userApi.post("/googleSignin", googleSigninData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserForgotPassword(email) {
  try {
    const data = await userApi.post("/forgotPassword", email);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserRestPassword(resetPasswordData) {
  try {
    const data = await userApi.post("/restPasword", resetPasswordData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserPropertyList(){
  try{
    const data = await userApi.get('/userpropertylist')
    return data
  }catch(err){
    throw new err(err)
  }
}