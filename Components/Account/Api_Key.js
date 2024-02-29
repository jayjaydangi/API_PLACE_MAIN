import React, { useEffect, useState } from 'react'
import useWindow from '../Commons/hasWindow';
import axios from 'axios';

function Api_Key() {

    const hasWindow = useWindow();
    const [userInfo, setuserInfo] = useState({})
    useEffect(() => {
        if (hasWindow) {
            setuserInfo(JSON.parse(localStorage.getItem("userInfo")))
        }
    }, [])
    console.log('userInfo', userInfo)
    const [showGenerateKey, setshowGenerateKey] = useState(false);
    const [keyRes, setkeyRes] = useState(null);
    const [loading, setloading] = useState(false);
    const headers = {
        'Authorization': `Bearer ${userInfo?.stsTokenManager?.accessToken}`,
        'Content-Type': 'application/json'
        // Add any other headers if needed
    };
    const handleGenerateApiKey = async()=> {
        setloading(true)
        try {
            await axios.get('https://gatewaysvc-dev.azurewebsites.net/api/Users/apikey/generate', { headers }).then(res => {
                setkeyRes(res)
                console.log('generate api key :', res);
              })
              .catch(error => {
                console.error('Error generate api key Res:', error);
              });

            await axios.get('https://gatewaysvc-dev.azurewebsites.net/api/Users/apikey', { headers }).then(res => {
                setkeyRes(res)
                console.log('Fetched projects:', res);
              })
              .catch(error => {
                console.error('Error fetching api key Res:', error);
              });
            console.log('response handleGenerateApiKey');
            // setkeyRes();
            setloading(false);
            setshowGenerateKey(true)
        } catch (error) {
            console.error('handleGenerateApiKey error : ',error);
            setloading(false);
        }

    }
    // const [copySuccess, setCopySuccess] = useState('');
    // const textAreaRef = useRef(null);
    // function copyToClipboard(e) {
    //     textAreaRef.current.select();
    //     document.execCommand('copy');
    //     // This is just personal preference.
    //     // I prefer to not show the whole text area selected.
    //     e.target.focus();
    //     setCopySuccess('Copied!');
    //   };
    return (
        <>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] text-5xl text-colors-text-text-primary-900">
                <div className="relative leading-[32px] font-semibold">
                    API Key
                </div>
                <div className="self-stretch flex flex-col items-start justify-center gap-[16px_0px] text-sm">
                    <div className="self-stretch relative text-base leading-[24px]">
                        Use this API key in all requests for authentication and
                        access.
                    </div>
                    {showGenerateKey ?
                        <>
                            <div className="w-[560px] flex flex-col items-start justify-start gap-[6px_0px] text-component-colors-components-buttons-secondary-button-secondary-fg">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                                    <div className="w-[55px] relative leading-[20px] font-medium hidden">
                                        Website
                                    </div>
                                    <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-start justify-start text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                        <div className="flex-1 rounded-tl-spacing-md rounded-tr-none rounded-br-none rounded-bl-spacing-md bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-start py-spacing-md px-spacing-lg gap-[0px_8px] z-[1] border-t-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border border-b-[1px] border-l-[1px]">
                                            <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                {keyRes?.data?.apiKey ?? "aC3BhR8t9W1eQ4z5"}
                                            </div>
                                            <img
                                                className="w-4 relative h-4 hidden"
                                                alt=""
                                                src="/help-icon.svg"
                                            />
                                        </div>
                                        <div className="cursor-pointer rounded-tl-none rounded-tr-radius-md rounded-br-radius-md rounded-bl-none bg-colors-background-bg-primary overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[0px_4px] z-[0] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0"
                                                alt=""
                                                src="/copy-01.png"
                                            />
                                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                                <div className="relative leading-[20px] font-semibold">
                                                    Copy
                                                </div>
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder1.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[400px] relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                                    This is a hint text to help user.
                                </div>
                            </div>
                            <div onClick={()=>handleGenerateApiKey()} className="cursor-pointer rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[0px_4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/checkcircle.svg"
                                />
                                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                    <div className="relative leading-[20px] font-semibold">
                                        Generate new API Key
                                    </div>
                                </div>
                                <img
                                    className={`w-5 relative h-5 overflow-hidden shrink-0 ${loading ? "" : "hidden"}`}
                                    alt=""
                                    src="/placeholder2.svg"
                                />
                            </div>
                        </>
                        :
                        <>
                            <div onClick={() => handleGenerateApiKey()} className="cursor-pointer rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[0px_4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                <img
                                    className={`w-5 relative h-5 overflow-hidden shrink-0 ${keyRes ? "" : "hidden"}`}
                                    alt=""
                                    src="/checkcircle.svg"
                                />
                                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                    <div className="relative leading-[20px] font-semibold">
                                        Generate API Key
                                    </div>
                                </div>
                                <img
                                    className={`w-5 relative h-5 overflow-hidden shrink-0 ${loading ? "" : "hidden"} `}
                                    alt=""
                                    src="/placeholder2.svg"
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Api_Key