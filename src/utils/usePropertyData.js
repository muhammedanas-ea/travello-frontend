import { useEffect, useState } from "react";
import { PropertySwiperData } from "../api/UserApi";

const usePropertyData = () => {
  const [propertyInfo, setPropertyInfo] = useState([]);
  const fetchData = async () => {
    const response = await PropertySwiperData();
    setPropertyInfo(response?.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return propertyInfo;
};

export default usePropertyData;
