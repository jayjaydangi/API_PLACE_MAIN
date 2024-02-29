"client component."
import Link from "next/link";
import React, { useEffect, useRef, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
// import { addDoc, collection } from 'firebase/firestore';
import { auth } from "../Firebase/Firebase";
import Router, { useRouter } from "next/router";
// import { getFirestore } from "firebase/firestore";
// import { Alert } from "flowbite-react";
import axios from "axios";

// import { auth } from '../Components/Firebase/Firebase';
const SignUpComponent = () => {
  const router = useRouter();
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const con_passwordReF = useRef();
  const organisationRef = useRef();
  const sectorRef = useRef();
  const [UserInfo, setUserInfo] = useState(null)
  const [userPersonalDetails, setuserPersonalDetails] = useState(null)
  const [showPass, setshowPass] = useState(false)
  const [showC_Pass, setshowC_Pass] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const dbFireStore = getFirestore();
  // console.log('dbFireStore', dbFireStore)
  console.log('setuserPersonalDetails', userPersonalDetails)
  const password = passwordRef?.current?.value;
  const con_password = con_passwordReF?.current?.value;

  // const onSignUpSubmit = async (e) => {
  //   e.preventDefault();
  //   const fName = fNameRef.current.value;
  //   const lName = lNameRef.current.value;
  //   const email = emailRef.current.value;
  //   const organisation = organisationRef.current.value;
  //   const sector = sectorRef.current.value;

  //   // Get all user information

  //   try {
  //     var user;
  //     if (password === con_password) {
  //       console.log('password === con_password', password, con_password)
  //       try {
  //         const userCredential = await createUserWithEmailAndPassword(auth, email, con_password);
  //         user = userCredential.user;
  //         console.log('userCredential', userCredential.user)
  //         localStorage.setItem('userInfo', JSON.stringify(user));

  //       } catch (error) {
  //         console.log('userCredential error : ', error)

  //       }
  //       // Get the newly created user object
  //     } else {
  //       alert("Password is not same")
  //     }
  //     console.log('userCredential', user)
  //     // Create a user object with all information
  //     // const userData = {
  //     //   uid: user.uid,
  //     //   fName,
  //     //   lName,
  //     //   email,
  //     //   organisation,
  //     //   sector,
  //     //   // Add other relevant user information
  //     // };
  //     var bodyParams = {
  //       "id": user.uid,
  //       "firstName": fName,
  //       "lastName": lName,
  //       "username": email,
  //       "email": email,
  //       "organizationName": organisation,
  //       "profilePictureUrl": "string",
  //       "websiteLink": "string",
  //       "phoneNumber": "string",
  //       "state": sector,
  //       "loginProvider": "string"
  //     }
  //     const headers = {
  //       'Authorization': `Bearer ${user?.stsTokenManager?.accessToken}`, // Replace with your actual authorization token
  //       'Content-Type': 'application/json'
  //       // Add any other headers if needed
  //     };
  //     // Store user data in Firestore
  //     // await dbFireStore.collection('users').doc(user.uid).set(userData);

  //     try {
  //       const response = await axios.post(process.env.NEXT_PUBLIC_BASE_URL, { headers }, bodyParams);
  //       // const response = axios.post("https://gatewaysvc-dev.azurewebsites.net/api/users/", { headers }, bodyParams);
  //       //  const userPersonalDetails = axios.push(`https://gatewaysvc-dev.azurewebsites.net/api/users/${user.uid}`);
  //       // const docRef = await addDoc(collection(dbFireStore, userData))
  //       console.log('Response:', response.data);
  //       setuserPersonalDetails(response)
  //       localStorage.setItem('userPnl_Info', JSON.stringify(response));
  //       console.log('User data inserted', response)
  //       return response.data;
  //     } catch (error) {
  //       console.warn("Error fetching data : ", error);
  //     }

  //     // Optional: Store user information locally (consider security implications)
  //     localStorage.setItem('userInfo', JSON.stringify(user));

  //     // Redirect to login or other appropriate page
  //     router.push('/log_in'); // Replace with your desired redirect path

  //     alert('Signup successful!');
  //     console.log('Signup successful:', user);
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;

  //     alert('Signup failed:', errorMessage, errorCode);
  //     console.error('Signup error:', error);
  //   }
  // };

  const onSignUpSubmit = async (e) => {
    e.preventDefault();
    const fName = fNameRef.current.value;
    const lName = lNameRef.current.value;
    const email = emailRef.current.value;
    const organisation = organisationRef.current.value;
    const sector = sectorRef.current.value;

    try {
      if (password === con_password) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, con_password);
        const user = userCredential.user;

        const bodyParams = {
          "id": user.uid,
          "firstName": fName,
          "lastName": lName,
          "username": email,
          "email": email,
          "organizationName": organisation,
          "profilePictureUrl": "string",
          "websiteLink": "string",
          "phoneNumber": "string",
          "state": sector,
          "loginProvider": "string"
        };

        const headers = {
          'Authorization': `Bearer ${user?.stsTokenManager?.accessToken}`,
          'Content-Type': 'application/json'
        };

        try {
          const response = await axios.post("https://gatewaysvc-dev.azurewebsites.net/api/Users", bodyParams, { headers });
          console.log('Response:', response.data);
          localStorage.setItem('userPnl_Info', JSON.stringify(response.data));
          alert('Signup successful!');
          console.log('Signup successful:', user);
          router.push('/log_in');
        } catch (error) {
          console.warn("Error posting user data: ", error);
          // Handle error appropriately, e.g., show error message to user
        }
      } else {
        alert("Password is not the same");
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Signup failed:', errorMessage, errorCode);
      console.error('Signup error:', error);
    }
  };
  console.log('UserInfo', JSON.stringify(UserInfo), "NEXT_PUBLIC_BASE_URL =", process.env.NEXT_PUBLIC_BASE_URL)


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserInfo(user);
        localStorage.setItem("userInfo", JSON.stringify(user));
      } else {
        setUserInfo(null);
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])


  //  Login with google auth
  const signInWithGoogle = async () => {
    setIsSubmitting(true);
    const provider = new GoogleAuthProvider();
    try {
      const user = await signInWithPopup(auth, provider);
      console.log('provider signInWithGoogle', provider, user)
      localStorage.setItem('userInfo', JSON.stringify(user));
      var headerD = {
        'Authorization': `Bearer ${user?.stsTokenManager?.accessToken}`,
        'Content-Type': 'application/json'
      };
      var bodyParams = {
        "id": user.uid,
        "firstName": user.displayName,
        "lastName": "",
        "username": user.displayName,
        "email": user.email,
        "organizationName": "",
        "profilePictureUrl": "string",
        "websiteLink": "string",
        "phoneNumber": "string",
        "state": "",
        "loginProvider":user.providerId,
      };
      try {
        const response = await axios.post("https://gatewaysvc-dev.azurewebsites.net/api/Users", { headerD }, bodyParams);
        console.log('Response:', response.data);
        localStorage.setItem('userPnl_Info', JSON.stringify(response.data));
        alert('Signup successful!');
      } catch (error) {
        console.error("Error in fetching user api signInWithPopup " , error)
      }

      // await fetch(`https://gatewaysvc-dev.azurewebsites.net/api/users/${user.uid}`, { headerD })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     setUserData(data); // Save user data to state
      //     localStorage.setItem('userPnl_Info', JSON.stringify({
      //       data
      //     }))
      //   })
      //   .catch((error) => console.error('Error fetching user data:', error));
      // setFormValues({
      //   firstName: data?.firstName || '',
      //   lastName: data?.lastName || '',
      //   email: data?.email || '',
      //   username: data?.username || '',
      //   organization: data?.organizationName || '',
      //   category: data?.category || 'Software',
      //   description: data?.description || '',
      //   profilePictureUrl: data?.profilePictureUrl || '',
      // });
      Router.push("/");
      setIsSubmitting(false);
    } catch (error) {
      console.error('Error signing in with google', error.message)
      setIsSubmitting(false);
    }

  }






  return (
    <div className="w-full relative bg-colors-background-bg-primary h-[960px] flex flex-row items-center justify-start min-h-[960px] text-left text-xs text-colors-text-text-primary-900 font-text-lg-regular">
      <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start">
        <div className="self-stretch flex-1 bg-colors-background-bg-brand-section flex flex-col items-center justify-center py-spacing-11xl px-0">
          <div className="self-stretch flex flex-col items-center justify-center py-0 px-spacing-4xl gap-[96px_0px]">
            <div className="rounded-21xl flex flex-col items-center justify-start p-6 relative bg-[url('/content2@3x.png')] bg-cover bg-no-repeat bg-[top]">
              <div className="w-[416px] rounded-spacing-xl bg-colors-background-bg-primary h-64 flex flex-col items-start justify-start p-5 box-border relative gap-[8px_0px] z-[0] text-right text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                <div className="self-stretch flex-1 relative z-[0]">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start relative">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-between z-[0]">
                        <div className="self-stretch h-[22px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                        <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
                          <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-between py-0 px-spacing-md z-[1]">
                        <div className="relative leading-[18px]">Jan</div>
                        <div className="relative leading-[18px]">Mar</div>
                        <div className="relative leading-[18px]">May</div>
                        <div className="relative leading-[18px]">Jul</div>
                        <div className="relative leading-[18px]">Sep</div>
                        <div className="relative leading-[18px]">Nov</div>
                        <div className="relative leading-[18px]">Dec</div>
                      </div>
                      <img
                        className="w-full absolute my-0 mx-[!important] h-[calc(100%_-_27px)] top-[0px] right-[0px] bottom-[27px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
                        alt=""
                        src="/-chart-data@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <img
                  className="w-[72px] absolute my-0 mx-[!important] top-[-43px] right-[-60px] h-[72px] object-cover z-[1]"
                  alt=""
                  src="/rectangle-198@2x.png"
                />
                <img
                  className="w-8 absolute my-0 mx-[!important] top-[13px] right-[-68px] h-8 object-cover z-[2]"
                  alt=""
                  src="/rectangle-199@2x.png"
                />
              </div>
              <div className="w-[300px] absolute my-0 mx-[!important] top-[-48px] left-[-48px] shadow-[0px_24px_48px_-12px_rgba(16,_24,_40,_0.18)] h-[201px] z-[1] text-base">
                <div className="absolute top-[0px] left-[0px] rounded-lg bg-colors-background-bg-primary box-border w-[300px] flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                    <img
                      className="w-10 relative rounded h-10 object-cover"
                      alt=""
                      src="/image-27@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                      <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                        SportsScoreHub
                      </div>
                      <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                        <div className="relative leading-[18px]">By</div>
                        <div className="relative leading-[18px] font-medium">
                          Harriette
                        </div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch flex flex-col items-start justify-center">
                        <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                          SportsScoreHub offers real-time sports data for
                          various leagues and events.
                        </div>
                      </div>
                    </div>
                    <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
                      <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/modem01.svg"
                        />
                        <div className="relative leading-[140%]">30 ms</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                      <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                      <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/clockrefresh.svg"
                        />
                        <div className="relative leading-[140%]">98%</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                      <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                      <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/piechart01.svg"
                        />
                        <div className="relative leading-[140%]">97%</div>
                        <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                          <div className="relative leading-[140%]">99+</div>
                        </div>
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon--jamicons--outline--logos--circle.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[380px] absolute my-0 mx-[!important] top-[225px] left-[148px] rounded-radius-2xl shadow-[0px_32px_64px_-12px_rgba(16,_24,_40,_0.14)] h-[110px] overflow-hidden shrink-0 z-[2] text-[10.5px]">
                <div className="absolute right-[0px] bottom-[-17px] w-[379.8px] h-[127px] overflow-hidden">
                  <div className="absolute top-[0px] left-[0px] rounded-[7.02px] bg-colors-background-bg-primary shadow-[0px_0.6px_1.76px_rgba(16,_24,_40,_0.1),_0px_0.6px_1.17px_rgba(16,_24,_40,_0.06)] box-border w-[480.5px] overflow-hidden flex flex-col items-start justify-start border-[0.6px] border-solid border-colors-border-border-secondary">
                    <div className="w-[711.7px] bg-colors-background-bg-primary hidden flex-col items-start justify-start gap-[11.71px_0px]">
                      <div className="self-stretch flex flex-row items-start justify-start pt-spacing-2xl px-spacing-3xl pb-0 gap-[9.36px] z-[1]">
                        <div className="flex-1 h-[30.4px] flex flex-col items-start justify-center gap-[2.34px_0px]">
                          <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4.68px]">
                            <div className="relative leading-[16.39px] font-semibold">
                              API Subscriptions
                            </div>
                            <div className="rounded-radius-full bg-component-colors-utility-brand-utility-brand-50 hidden flex-row items-center justify-start py-spacing-xxs px-spacing-md text-center text-6xs text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg border-[0.6px] border-solid border-colors-text-text-tertiary-on-brand">
                              <div className="relative leading-[10.53px] font-medium">
                                10/20 seats
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative text-4xs-2 leading-[11.71px] text-component-colors-components-buttons-tertiary-button-tertiary-fg overflow-hidden text-ellipsis whitespace-nowrap">
                            These companies have purchased in the last 12
                            months.
                          </div>
                        </div>
                        <div className="hidden flex-row items-center justify-start gap-[0px_7.02px] text-4xs-2 text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                          <div className="rounded-radius-md overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px]">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                              <div className="relative leading-[11.71px] font-semibold">
                                Tertiary
                              </div>
                            </div>
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                          </div>
                          <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg border-[0.6px] border-solid border-component-colors-components-buttons-secondary-color-button-secondary-color-border">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                              <div className="relative leading-[11.71px] font-semibold">
                                Secondary
                              </div>
                            </div>
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                          </div>
                          <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[0.6px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                              <div className="relative leading-[11.71px] font-semibold">
                                Secondary
                              </div>
                            </div>
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                          </div>
                          <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-colors-background-bg-primary border-[0.6px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                              <div className="relative leading-[11.71px] font-semibold">
                                Primary
                              </div>
                            </div>
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/placeholder.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <img
                            className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                            alt=""
                            src="/dotsvertical.svg"
                          />
                        </div>
                      </div>
                      <img
                        className="self-stretch relative max-w-full overflow-hidden h-[0.6px] shrink-0 z-[0]"
                        alt=""
                        src="/divider.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                      <div className="flex-1 flex flex-col items-start justify-start text-colors-text-text-primary-900">
                        <div className="w-[135.2px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-6xs text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-row items-center justify-start gap-[0px_2.34px]">
                            <div className="relative leading-[10.53px] font-medium">
                              APIs
                            </div>
                            <img
                              className="w-[9.4px] relative h-[9.4px] overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/arrowdown.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar8@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[20px] font-medium">
                            FitnessPalAPI
                          </div>
                        </div>
                        <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar9@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[20px] font-medium">
                            GeoLocationX
                          </div>
                        </div>
                        <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar10@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[20px] font-medium">
                            ImageDetectPro
                          </div>
                        </div>
                        <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar11@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[20px] font-medium">
                            SocialInsights
                          </div>
                        </div>
                        <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar12@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[11.71px] font-medium">
                            FitnessPalAPI
                          </div>
                        </div>
                        <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar13@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[11.71px] font-medium">
                            FinancePulse
                          </div>
                        </div>
                        <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar14@3x.png')] bg-cover bg-no-repeat bg-[top]">
                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
                          </div>
                          <div className="relative leading-[11.71px] font-medium">
                            HealthTrackerAPI
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start text-xs">
                        <div className="w-[84.3px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative leading-[18px] font-medium">
                              Status
                            </div>
                          </div>
                        </div>
                        <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-utility-success-utility-success-700 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="rounded-radius-full bg-component-colors-utility-success-utility-success-50 flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-component-colors-utility-success-utility-success-200">
                            <div className="relative leading-[18px] font-medium">
                              Published
                            </div>
                          </div>
                        </div>
                        <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-utility-warning-utility-warning-700 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="rounded-radius-full bg-component-colors-utility-warning-utility-warning-50 flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-component-colors-utility-warning-utility-warning-200">
                            <div className="relative leading-[18px] font-medium">
                              Under Review
                            </div>
                          </div>
                        </div>
                        <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="rounded-radius-full bg-colors-background-bg-primary-hover flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-colors-border-border-secondary">
                            <div className="relative leading-[18px] font-medium">
                              Draft
                            </div>
                          </div>
                        </div>
                        <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="rounded-radius-full bg-colors-background-bg-primary-hover flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-colors-border-border-secondary">
                            <div className="relative leading-[18px] font-medium">
                              Draft
                            </div>
                          </div>
                        </div>
                        <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">Free</div>
                        </div>
                        <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">Free</div>
                        </div>
                        <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">Free</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[86.6px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative leading-[18px] font-medium">
                              Total subscribers
                            </div>
                          </div>
                        </div>
                        <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">472</div>
                        </div>
                        <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[60.9px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative leading-[18px] font-medium">
                              Revenue
                            </div>
                          </div>
                        </div>
                        <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">₹38,400</div>
                        </div>
                        <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[73.7px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-row items-center justify-start">
                            <div className="relative leading-[18px] font-medium">
                              Success Rate
                            </div>
                          </div>
                        </div>
                        <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">98%</div>
                        </div>
                        <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[20px]">-</div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                        <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="relative leading-[11.71px]">
                            Olivia Rhye
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <div className="w-[39.8px] bg-colors-background-bg-primary-hover box-border h-[25.8px] border-b-[0.6px] border-solid border-colors-border-border-secondary" />
                        <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                        <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
                          <div className="flex flex-col items-start justify-start">
                            <img
                              className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
                              alt=""
                              src="/dotsvertical.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-20 absolute my-0 mx-[!important] bottom-[-24px] left-[-40px] h-20 object-cover z-[3]"
                alt=""
                src="/rectangle-198@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[32px_0px] text-center text-5xl text-colors-background-bg-primary">
              <div className="w-[456px] flex flex-col items-center justify-start gap-[8px_0px]">
                <div className="self-stretch relative leading-[32px] font-semibold">
                  Introducing API Analytics
                </div>
                <div className="self-stretch relative text-base leading-[24px] font-medium text-colors-text-text-tertiary-on-brand">
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users on your API.
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex flex-row items-center justify-center gap-[0px_16px]">
                  <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-background-bg-primary h-2.5 overflow-hidden shrink-0" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0 hidden" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0 hidden" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
                  <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-center min-w-[480px] text-11xl">
        <div className="self-stretch flex-1 flex flex-col items-center justify-center p-8 relative">
          <div className="w-full flex flex-col items-start justify-start gap-[32px_0px] max-w-[460px] z-[0]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                  <div className="self-stretch relative leading-[38px] font-semibold">
                    Sign up
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    Sign up in less than 2 minutes.
                  </div>
                </div>
              </div>
              <form onSubmit={onSignUpSubmit}>
                <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px_0px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            First Name*
                          </div>
                          <input required ref={fNameRef} placeholder="Enter your first name" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                          {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                Enter your first name
                              </div>
                            </div>
                            <img
                              className="w-4 relative h-4 hidden"
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div> */}
                        </div>
                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            Last Name*
                          </div>
                          <input required ref={lNameRef} placeholder="Enter your last name" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                          {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                Enter your last name
                              </div>
                            </div>
                            <img
                              className="w-4 relative h-4 hidden"
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div> */}
                        </div>
                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="relative leading-[20px] font-medium">
                          Email*
                        </div>
                        <input required ref={emailRef} placeholder="Enter your email" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                        {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                          <div className="flex-1 flex flex-row items-center justify-start">
                            <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                              Enter your email
                            </div>
                          </div>
                          <img
                            className="w-4 relative h-4 hidden"
                            alt=""
                            src="/help-icon.svg"
                          />
                        </div> */}
                      </div>
                      <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                        This is a hint text to help user.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                      <div className="flex-1 h-[70px] flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            Organisation
                          </div>
                          <input required ref={organisationRef} placeholder="Enter your organisation" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                          {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                Enter your organisation
                              </div>
                            </div>
                            <img
                              className="w-4 relative h-4 hidden"
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div> */}
                        </div>
                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            Sector
                          </div>
                          <input required ref={sectorRef} placeholder="Select team member" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                          {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                Select team member
                              </div>
                            </div>
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/chevrondown.svg"
                            />
                          </div> */}
                        </div>
                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            New Password
                          </div>
                          <div>
                            <input required ref={passwordRef} placeholder="Enter Password" type={showPass ? "text" : "password"} className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                ncsjdnsvs32932
                              </div>
                            </div>
                            <img
                              className="w-5 relative h-5 overflow-hidden shrink-0"
                              alt=""
                              src="/eyeoff.svg"
                            />
                          </div> */}
                            <div style={{ width: '50px', position: 'relative', top: '-33px', left: '195px' }}>
                              <img
                                className="w-5 relative h-5 overflow-hidden shrink-0"
                                onClick={() => setshowPass(!showPass)}
                                alt="eye ICon"
                                src={showPass ? "/eyeoff.svg" : "/eye.svg"}
                              />
                            </div>
                          </div>
                          <div className="self-stretch relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                            Must be at least 8 characters.
                          </div>
                        </div>
                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                          This is a hint text to help user.
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            Confirm New Password
                          </div>
                          <div>
                            <input required ref={con_passwordReF} type={showC_Pass ? "text" : "password"} placeholder="Confirm Password" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            <div style={{ width: '50px', position: 'relative', top: '-33px', left: '195px' }}>
                              <img
                                className="w-5 relative h-5 overflow-hidden shrink-0"
                                onClick={() => setshowC_Pass(!showC_Pass)}
                                alt="eye ICon"
                                src={showC_Pass ? "/eyeoff.svg" : "/eye.svg"}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                        <div className={`w-80 relative leading-[20px] text-bg-warning  text-component-colors-components-buttons-tertiary-button-tertiary-fg text-red-600 ${(password === con_password) && 'hidden'}`}>
                          Confirm passwoed should be same !
                        </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-base text-colors-background-bg-primary">
                    <button type="submit" className="text-white cursor-pointer self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder10.svg"
                      />
                      <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                        <div className="relative leading-[24px] font-semibold">
                          Get started
                        </div>
                      </div>
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/placeholder10.svg"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center gap-[0px_16px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
              <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
              <div className="relative leading-[20px]">or</div>
              <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
            </div>
            <div onClick={() => signInWithGoogle()} className="cursor-pointer self-stretch flex flex-row items-start justify-start gap-[0px_8px]">
              <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  {isSubmitting ? 'Verifying...' :
                    <img
                      className="w-6 relative h-6 overflow-hidden shrink-0"
                      alt="google icon"
                      // onClick={() => signInWithGoogle()}
                      src="/social-icon6.svg"
                    />
                  }
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon7.svg"
                  />
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon8.svg"
                  />
                </div>
                <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon9.svg"
                  />
                </div>
              </div>
              {/* <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
                <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
                <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/icomoonfreegithub.svg"
                  />
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
                <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
                <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/social-icon.svg"
                  />
                </div>
              </div> */}
            </div>
          </div>
          <div className="w-[720px] my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-row items-center justify-between p-8 box-border z-[1] text-xl text-colors-gray-dark-mode-900">
            <Link href='/'>
              <div className="w-[127px] relative h-8">
                <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_63.5px)] flex flex-row items-start justify-start">
                  <img
                    className="w-8 relative rounded-spacing-md h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/content.svg"
                  />
                </div>
                <div className="absolute h-full w-[66.93%] top-[0%] right-[0%] bottom-[0%] left-[33.07%]">
                  <div className="absolute top-[3.13%] left-[0%] leading-[30px] font-semibold">
                    APIStore
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex flex-row items-start justify-center gap-[0px_4px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
              <div className="relative leading-[20px]">
                Already have an account?
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder9.svg"
                />
                <Link href="/log_in">
                  <div className="relative leading-[20px] font-semibold">
                    Log in
                  </div>
                </Link>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder9.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
