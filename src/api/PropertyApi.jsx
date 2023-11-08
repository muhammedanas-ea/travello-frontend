import axiosInterceptorInstanceOwner from "../utils/PropertyOwnerMiddleware";

const propertyApi = axiosInterceptorInstanceOwner;

export async function PropertySignUp(signupData) {
  try {
    const data = await propertyApi.post("/propertySignup", signupData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function OtpChecking(otpData) {
  try {
    const data = await propertyApi.post("/otpChecking", otpData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function PropertySignin(loginData) {
  try {
    const data = await propertyApi.post("/propertySignin", loginData);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function AddProperty(addData) {
  try {
    const config = {
      header: {
        "content-type": "multipart/form-data",
      },
      WithCreadentials: true,
    };
    console.log(propertyApi,'in api');
    const data = await propertyApi.post("/addProperty", addData, config);
    return data;
  } catch (err) {
    throw new err(err);
  }
}
