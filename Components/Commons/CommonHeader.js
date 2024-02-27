'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useWindow from './hasWindow';
import Image from 'next/image';
// import { UserAuth } from '../Firebase/AuthContext'
import { signOut } from 'firebase/auth';
import { auth } from "../Firebase/Firebase"; // Assuming you have `auth` imported from `./Firebase`
import { useRouter } from 'next/router';




export default function CommonHeader() {
    // const {user, googleSignIn, logOut} = UserAuth();
    const hasWindow = useWindow();
    const [userInfo, setuserInfo] = useState({})
    useEffect(() => {
        if (hasWindow) {
            setuserInfo(JSON.parse(localStorage.getItem("userInfo")))
        }
    }, [])
    const profileClick = () => {
        
    }
    
    const router = useRouter();
    const OnLogOutClick = async () => {
        try {
            await signOut(auth);
            // Optional: Clear user information from local storage
            localStorage.removeItem('userInfo');
            // Redirect to login or other appropriate page
            router.push('/log_in'); // Replace with your desired redirect path
            alert('Logged out successfully!');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Logout failed:', errorMessage, errorCode);
            console.error('Logout error:', error);
        }
    };
    console.log("storedUserInfoi  in header userInfo?.stsTokenManager", userInfo)
    return (
        <div className="w-[1440px] relative h-20 z-[5] text-xl text-colors-gray-dark-mode-900">
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-20 flex flex-col items-center justify-center">
                <div className="w-full flex flex-row items-center justify-between py-0 px-container-padding-desktop box-border max-w-[1280px]">
                    <div className="flex flex-row items-center justify-start gap-[0px_32px]">
                        <Link href='/' >
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
                        <div className="w-[540px] flex flex-col items-start justify-start gap-[6px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                                <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0"
                                            alt=""
                                            src="/searchsm.svg"
                                        />
                                        <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                            Search APIs...
                                        </div>
                                    </div>
                                    <img
                                        className="w-4 relative h-4 hidden"
                                        alt=""
                                        src="/help-icon.svg"
                                    />
                                </div>
                            </div>
                            <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                                This is a hint text to help user.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0px_24px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                        <div className="flex flex-row items-center justify-start gap-[0px_32px]">
                            <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder.svg"
                                />
                                <div className="relative leading-[24px] font-medium">
                                    Browse APIs
                                </div>
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder.svg"
                                />
                            </div>
                            <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder.svg"
                                />
                                <div className="relative leading-[24px] font-medium">
                                    Explore
                                </div>
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder.svg"
                                />
                            </div>
                        </div>
                        {userInfo?.stsTokenManager?.accessToken || userInfo?.user?.stsTokenManager?.accessToken ?
                            <>
                                <div onClick={() => profileClick()} style={{ display: 'block', alignItems: 'center', textAlign: 'center', marginLeft: '20px' }}>
                                    <Link href='/account'>
                                        <div className="w-11 relative rounded-radius-full h-11 bg-[url('/avatar15@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-full box-border overflow-hidden border-[0.7px] border-solid border-component-colors-components-avatars-avatar-contrast-border" />
                                        </div>
                                    </Link>
                                    {/* <p> {userInfo?.email} </p> */}
                                    {/* <a href="#" title="Header" data-toggle="popover" data-placement="bottom" data-content="Content">Bottom</a> */}
                                </div>
                                <h5 onClick={()=>OnLogOutClick()} className='cursor-pointer' >LogOut</h5>
                            </>
                            :
                            <div className="flex flex-row items-center justify-start gap-[0px_12px] text-component-colors-components-buttons-secondary-button-secondary-fg">
                                <Link href="/log_in" className="text-decoration-none">
                                    <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                            alt=""
                                            src="/placeholder1.svg"
                                        />
                                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                            <div className="relative leading-[24px] font-semibold">
                                                Log in
                                            </div>
                                        </div>
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                            alt=""
                                            src="/placeholder1.svg"
                                        />
                                    </div>
                                </Link>
                                <Link href="/sign_up" className="text-decoration-none ">
                                    <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                            alt=""
                                            src="/placeholder2.svg"
                                        />
                                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                            <div className="relative leading-[24px] font-semibold">
                                                Sign up
                                            </div>
                                        </div>
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                            alt=""
                                            src="/placeholder2.svg"
                                        />
                                    </div>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
