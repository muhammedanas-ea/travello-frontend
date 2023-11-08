import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Name"),
  email: Yup.string()
    .email("Invalid email")
    .required("please enter your email"),
  password: Yup.string().min(6).required("Please enter password"),
});

export const LoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("please enter your email"),
  password: Yup.string().min(6).required("Please enter password"),
});

export const ForgotSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("please enter your email"),
});

export const ResetPasswordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Password must be at least 8 characters")
    .required("Password is required"),
  conformPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const AdminLoginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("please enter your email"),
  password: Yup.string().min(4).required("Please enter password"),
});

export const PropertySignupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please Enter Your Name"),
  number: Yup.number().min(10).required("please enter your number"),
  email: Yup.string()
    .email("Invalid email")
    .required("please enter your email"),
  password: Yup.string().min(6).required("Please enter password"),
});

export const AddPropertySchema = Yup.object({
  propertyName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  price: Yup.number().min(0).required("please enter price"),
  room: Yup.string().min(0).required("please enter room"),
  gust: Yup.string().min(0).required("please enter gust"),
  state: Yup.string().required("please enter state"),
  location: Yup.string().required("please enetr location"),
  propertyType: Yup.string().required("please enter property type"),
  number: Yup.number().min(10).required("please enter your number"),
  amenities: Yup.array()
    .of(Yup.string())
    .required("Select at least one amenity"),
  describe: Yup.string().required("Required"),
  images: Yup.array().required("Required"),
});
