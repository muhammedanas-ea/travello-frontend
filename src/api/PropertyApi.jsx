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
    const data = await propertyApi.post("/addProperty", addData, config);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function ListProperty(id) {
  try {
    const data = await propertyApi.get(`/listProperty/${id}`);
    return data;
  } catch (err) {
    throw new err(err);
  }
}

export async function SinglePropertyDetails(id){
  try{
    const data = await propertyApi.get(`/propertydetails/${id}`)
    return data 
  }catch(err){
    throw new err(err);
  }
}

export async function BookingDetailsOwner(id,active){
  try{
    const data = await propertyApi.get(`/bookingdetails/${id}/${active}`)
    return data
  }catch(err){
    throw new err(err);
  }
}


export async function EditProperty(editData){
  try{
    const data = await propertyApi.post("/editProperty",editData);
    return data;
  }catch(err){
    throw new err(err);
  }
}
