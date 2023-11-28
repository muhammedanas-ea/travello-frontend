import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { CheckInDetailSchema } from "../../../yup/validation";
import { CheckingUserDetails } from "../../../api/UserApi";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function CheckingDetails({ open, setOpen,bookingData}) {
  const handleClose = () => setOpen(open);
  const navigate = useNavigate()
  const initialValues = {
    email: "",
    name: "",
    number: "",
    bookingData,
  };

  const { values, errors, touched, handleBlur, handleSubmit, handleChange } =
    useFormik({
        
      initialValues: initialValues,
      validationSchema: CheckInDetailSchema,
      onSubmit: async (values) => {
        try {
          const response = await CheckingUserDetails(values);
          if(response.data.status){
            navigate(`/booking`, { state: { bookingData} })
          }   
        } catch (err) {
          console.log(err);
        }
      },
    });

  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleClose}
        className="bg-transparent shadow-none"
      >
          <Card className="mx-auto w-full max-w-[24rem]">
        <form onSubmit={handleSubmit}>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Check In
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your checking details.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Enter email
              </Typography>
              <Input
                name="email"
                label="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.email && errors.email && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.email}
                </p>
              )}
              <Typography className="-mb-2" variant="h6">
                Enter name
              </Typography>
              <Input
                name="name"
                label="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.name && errors.name && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.name}
                </p>
              )}
              <Typography className="-mb-2" variant="h6">
                Enter phone
              </Typography>
              <Input
                name="number"
                label="number"
                value={values.number}
                onChange={handleChange}
                onBlur={handleBlur}
                size="lg"
              />
              {touched.number && errors.number && (
                <p className="pt-2 text-xs italic text-red-500">
                  {errors.number}
                </p>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button  type="submit" variant="gradient" fullWidth>
                Book now
              </Button>
            </CardFooter>
        </form>
          </Card>
      </Dialog>
    </>
  );
}
