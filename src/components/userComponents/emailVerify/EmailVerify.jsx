import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { emailVerify } from "../../../api/UserApi";

export default function EmailVerify() {
  const params = useParams();
  console.log(params.id,params.token,'params reched in to the console')
  const [verifyUrl, setVerifyUrl] = useState(false);
  useEffect(() => {
    console.log('hiiiiiiiiiiiiiiii')
    const verifyEmailUrl = async () => {
      try {

        const response = await emailVerify(params.id, params.token);
        if (response) {
          setVerifyUrl(true);
        } else {
          setVerifyUrl(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    verifyEmailUrl();
  }, [params]);

  return verifyUrl === true ? (
    <div>
      <h1>welocoms</h1>
    </div>
  ) : (
    <div>
      <h1>welocoms</h1>
    </div>
  );
}
