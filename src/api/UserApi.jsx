import axiosInterceptorInstance from "../utils/UserMiddleware";

const userApi = axiosInterceptorInstance;

export async function UserSignUp(signupData) {
  try {
    const data = await userApi.post("/signup", signupData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function EmailVerify(id, token) {
  try {
    const data = await userApi.get(`verify/${id}/${token}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserLogin(loginData) {
  try {
    const data = await userApi.post("/login", loginData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserGoogleSignUp(googleData) {
  try {
    const data = await userApi.post("/googleSignUp", googleData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserGoogleSignin(googleSigninData) {
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

export async function UserPropertyList(active,sort) {
  try {
    const data = await userApi.get(
      `/userpropertylist/${active}/${sort}`
    );
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UpdateProfile(profileData, id) {
  try {
    const data = await userApi.put("/userprofile", { profileData, id });
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserProfileData(id) {
  try {
    const data = await userApi.get(`/profileData/${id}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function UserSingleProperty(id) {
  try {
    const data = await userApi.get(`/singleproperty/${id}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function BookingDetails(bookingData){
  try{
    const data = await userApi.post('/bookings',bookingData)
    return data
  }catch(err){
    throw new err(err)
  }
}