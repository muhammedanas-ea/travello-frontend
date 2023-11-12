import { Button } from "@material-tailwind/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./PropertySearch.css";
import { useEffect, useState } from "react";
import { GetState } from "react-country-state-city";
import { useFormik } from "formik";
import PropertySort from "../propertySort/PropertySort";

export default function PropertySearch() {
  const [state, setState] = useState([]);
  const [searchData,setsearchData] = useState()

  useEffect(() => {
    GetState(101).then((result) => {
      setState(result);
    });
  }, []);

  const initialValues = {
    checkInDate: "",
    checkOutDate: "",
    state: "",
  };
  const { values, handleBlur, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      onSubmit: async (values) => {
        setsearchData(values)
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit} action="">
        <div className="grid grid-cols-1  md:grid-cols-4 gap-3 items-center w-full h-[80px] rounded-md bg-[#fcfbfb] box-shadow mb-[10rem] md:my-4">
          <div className="h-[45px] md:ml-4 rounded-md  bg-gray-100 border border-gray-700  flex items-center">
            <DatePicker
              selected={values.checkInDate}
              onChange={(date) => setFieldValue("checkInDate", date)}
              placeholderText="Check In"
              className="w-full h-[45px] bg-transparent  outline-none px-4"
            />
          </div>

          <div className="h-[45px] rounded-md bg-gray-100 border border-gray-700 flex items-center">
            <DatePicker
              selected={values.checkOutDate}
              onChange={(date) => setFieldValue("checkOutDate", date)}
              placeholderText="Check Out"
              className="w-full bg-transparent outline-none px-4"
            />
          </div>
          <div className="h-[45px]  rounded-md bg-gray-100 border border-gray-700 flex items-center">
            <select
              className="outline-none rounded-md  w-full px-4"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Destination</option>
              {state.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <Button
            type="submit"
            className="rounded-md h-[45px] md:mr-4"
            size="md"
          >
            Search
          </Button>
        </div>
      </form>
      <PropertySort search={searchData}/>
    </>
  );
}
