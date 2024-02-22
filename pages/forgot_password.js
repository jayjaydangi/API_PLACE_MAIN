import Link from "next/link";
import { useState } from "react";
import ForgotPasswordComponent from "../Components/forgotPasswordComponet";
import ResatePassMailComponent from "../Components/resateMailSentUi";
// import ResatePassMailComponent from "../Components/ResatePassMailComponent";

const Forgot_Password = () => {
  const [email, setemail] = useState("")
  const [showSentLinkScreen, setshowSentLinkScreen] = useState(false)
  const handleResateClick = () => {
    console.log('email', email)
    alert('Entered email is : ', email);
    setshowSentLinkScreen(true)

  }
  return (
    <>{showSentLinkScreen ?
      <ResatePassMailComponent />
      :
      <ForgotPasswordComponent 
      handleResateClick={handleResateClick}
      setemail={setemail}
      email={email}
      />
    }
    </>
  );
};

export default Forgot_Password;
