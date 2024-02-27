import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import "./global.css";
import { useRouter } from "next/router";
// import { Router } from "next/router";

function MyApp({ Component, pageProps }) {
  const [UserInfo, setUserInfo] = useState(null)
  const [accessToken, setaccessToken] = useState(null)
  const router = useRouter();
  // console.log('routerdata===', router)
  useEffect(() => {
    const storedUserInfo = localStorage.getItem("userInfo");
    if (storedUserInfo) {
      const parsedUserInfo = JSON.parse(storedUserInfo);
      setUserInfo(parsedUserInfo);
      setaccessToken(UserInfo?.stsTokenManager?.accessToken)
      console.log('storedUserInfo', storedUserInfo, UserInfo)
      if(router.asPath == "/log_in"){
        // router.push("/")
      }
    }
    if(storedUserInfo == null){
      // router.push("/log_in")

    }

  }, []);
  
  // console.log('stsTokenManager', UserInfo?.stsTokenManager?.accessToken)
  // console.log('UserInfo', UserInfo)
  return (
    <Fragment>
      <Head>
        <title>ApiStore</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps}/>
    </Fragment>
  );
}

export default MyApp;
