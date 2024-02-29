import Link from "next/link";
// import CommonHeader from "../Commons/Header";
import ApiCard from "../Commons/ApiCard";
import { Featured_Apis } from './Featured_SectionData'
import { Browse_Apis } from "./BrowseSectionData";
import CommonFooter from "../Commons/CommonFooter";
import { useEffect, useState } from "react";
import { getFeatureReportsAction } from "../../Components/store/actions/homeAction"
import { connect } from "react-redux";
import CommonHeader from "../Commons/CommonHeader";


const ProductHomePage = ({
    getFeatureReportsAction,
    homefeatureData
}) => {
    useEffect(() => {
        const fetchData = async () => {
            await getFeatureReportsAction();
        };

        fetchData();
    }, [getFeatureReportsAction]);


    return (
        <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start text-left text-5xl text-colors-text-text-primary-900 font-text-lg-regular">
            <CommonHeader />
            <div className="self-stretch flex flex-row items-center justify-center py-spacing-7xl px-0 z-[4] text-[48px]">
                <div className="flex-1 flex flex-row items-center justify-center py-0 px-container-padding-desktop box-border max-w-[1280px]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
                                <div className="self-stretch flex flex-col items-start justify-start">
                                    <div className="w-[579px] relative tracking-[-0.02em] leading-[60px] inline-block">
                                        <span>
                                            <span>Empowering Developers,</span>
                                            <span className="font-semibold font-text-lg-regular">{` `}</span>
                                        </span>
                                        <b className="text-component-colors-components-buttons-primary-button-primary-bg">
                                            Connecting APIs
                                        </b>
                                    </div>
                                </div>
                                <div className="w-[579px] relative text-lg leading-[28px] text-coolgray-90 inline-block">
                                    Unleash the potential of your projects - we empower developers
                                    by seamlessly connecting them to a world of powerful APIs.
                                </div>
                            </div>
                            <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] text-base text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder2.svg"
                                />
                                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                    <div className="relative leading-[24px] font-semibold">
                                        Browse APIs
                                    </div>
                                </div>
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder2.svg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border gap-[32px_0px] z-[3]">
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                            <div className="self-stretch relative leading-[32px] font-semibold">
                                Featured API’s
                            </div>
                            <div className="self-stretch relative text-base leading-[24px] text-coolgray-90">
                                Explore curated Featured APIs to fuel innovation and elevate
                                your projects with cutting-edge solutions
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-base">
                    <div className="self-stretch flex flex-row items-start justify-start relative gap-[0px_16px] overflow-auto ">

                        {homefeatureData?.map((Featured_Apis, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`api_detail/${Featured_Apis?.id}`} style={{ textDecoration: 'none' }} >
                                        <ApiCard ApiCardData={Featured_Apis} />
                                    </Link>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
            <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border gap-[32px_0px] z-[2]">
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                            <div className="self-stretch relative leading-[32px] font-semibold">
                                Browse API’s
                            </div>
                            <div className="self-stretch relative text-base leading-[24px] text-coolgray-90">
                                Discover, Evaluate, and Integrate Powerful APIs Tailored to Your
                                Development Needs
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row items-start justify-start py-0 px-container-padding-desktop box-border gap-[0px_16px] max-w-[1280px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                    <div className="flex-1 flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-base text-colors-text-text-quarterary-500">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-[9px] px-2.5">
                                <div className="flex-1 relative leading-[24px] font-semibold">
                                    Filter
                                </div>
                                <div className="w-[15px] relative text-xs leading-[18px] hidden">
                                    32
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover">
                            <div className="flex-1 rounded-radius-sm bg-colors-background-bg-primary-hover flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    All
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    319
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Featured
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    01
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Newly added
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    8
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Saved
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    4
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-spacing-xs px-4">
                            <img
                                className="flex-1 relative max-w-full overflow-hidden h-px"
                                alt=""
                                src="/divider.svg"
                            />
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-quarterary-500">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-[9px] px-2.5">
                                <div className="flex-1 relative leading-[20px] font-semibold">
                                    Categories
                                </div>
                                <div className="w-[15px] relative text-xs leading-[18px] hidden">
                                    32
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    AI
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    10
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Authentication
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    14
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Data Storage
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    18
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Databases
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    37
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    E-commerce
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    27
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Education
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    11
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Geolocation
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    13
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">{`Government `}</div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    21
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Public Services
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    29
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Image Processing
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    1
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Video Processing
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    34
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Internet of Things (IoT)
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    39
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Language Translation
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    19
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Machine Learning
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    17
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Messaging Communication
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    23
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px]">
                                    <span className="font-medium">{`Music `}</span>
                                    <span>Entertainment</span>
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    31
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Payment Processing
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    22
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Security
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    6
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Social Media Integration
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    25
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Travel
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    8
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Utilities and Energy
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    12
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Utilities and Tools
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    7
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                            <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-1 px-2.5">
                                <div className="flex-1 relative leading-[20px] font-medium">
                                    Weather
                                </div>
                                <div className="relative text-xs leading-[18px] text-colors-text-text-quarterary-500">
                                    16
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[932px] flex flex-row flex-wrap items-start justify-start gap-[16px] text-base text-colors-text-text-primary-900">
                        {/* {homefeatureData?.items?.map((Browse_Api, index) => {
                            return (
                                <div key={Browse_Api?.id}>
                                    <Link href={`api_detail/${index + 1}`} style={{ textDecoration: 'none' }} >
                                        <ApiCard ApiCardData={Browse_Api} />
                                    </Link>
                                </div>
                            )
                        })} */}
                          {homefeatureData?.map((Featured_Apis, index) => {
                            return (
                                <div key={index}>
                                    <Link href={`api_detail/${Featured_Apis?.id}`} style={{ textDecoration: 'none' }} >
                                        <ApiCard ApiCardData={Featured_Apis} />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
            <img
                className="w-[1847px] absolute my-0 mx-[!important] top-[-459.2px] right-[-575px] h-[1385.3px] z-[1]"
                alt=""
                src="/background-pattern.svg"
            />
            <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start pt-spacing-7xl px-0 pb-spacing-6xl box-border gap-[64px_0px] z-[0] text-11xl">
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-center">
                    <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-spacing-7xl gap-[32px] border-b-[1px] border-solid border-colors-border-border-secondary">
                        <div className="w-full flex flex-col items-center justify-center gap-[16px_0px] min-w-[480px] max-w-[768px]">
                            <div className="self-stretch relative leading-[38px] font-semibold">
                                Want to contribute? Add your API
                            </div>
                            <div className="self-stretch relative text-xl leading-[30px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                Join over 300+ developers already growing with APIStore.
                            </div>
                        </div>
                        <div className="flex flex-row items-start justify-start gap-[0px_12px] text-left text-base text-colors-background-bg-primary">
                            <Link href='/account'>
                                <div className="text-white text-decoration-none  rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-lg px-[18px] gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                        alt=""
                                        src="/placeholder2.svg"
                                    />
                                    <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                        <div className="relative leading-[24px] font-semibold">
                                            Add API’s
                                        </div>
                                    </div>
                                    <img
                                        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                        alt=""
                                        src="/placeholder2.svg"
                                    />
                                </div>
                            </Link>
                            <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-lg px-[18px] gap-[0px_6px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/placeholder1.svg"
                                />
                                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                    <div className="relative leading-[24px] font-semibold">
                                        Learn more
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
                </div>
                <CommonFooter />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => (console.log("state------", state), {
    homefeatureData: state.homeFeatureReducer.homefeatureData,

});

export default connect(mapStateToProps, {
    getFeatureReportsAction
})(ProductHomePage);


// export default ProductHomePage;
