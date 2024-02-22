import Link from "next/link";
import CommonHeader from "../Commons/Header";
import ApiCard from "../Commons/ApiCard";
import { Featured_Apis } from '../HomeComponent/CardData'

const ProductHomePage = () => {

    const Featured_Apisdata = Featured_Apis;
    // console.log('Featured_Apisdata', Featured_Apisdata)
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
                        {/* <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[0] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-2@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        WeatherlyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            John Doe
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
                                            Empower fitness applications with FitnessPalAPI, offering
                                            features like workout tracking, nutrition information, and
                                            health monitoring.
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
                                        <div className="relative leading-[140%]">410 ms</div>
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
                                        <div className="relative leading-[140%]">95%</div>
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
                                </div>
                            </div>
                        </div> */}
                        {Featured_Apisdata.map((Featured_Apis, index) => {
                            return (
                                <div key={index}>
                                    <ApiCard Featured_Apis={Featured_Apis} />
                                </div>
                            )
                        })}


                        {/* <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[1] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-21@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        WeatherlyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            John Doe
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
                                            An API delivering real-time financial data
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
                                        <div className="relative leading-[140%]">35 ms</div>
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
                                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/piechart01.svg"
                                        />
                                        <div className="relative leading-[140%]">99%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[2] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-22@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        WeatherlyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            John Doe
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
                                            <span>
                                                NewsFlasher fetches and delivers real-time news articles
                                                and updates from various sources.
                                            </span>
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
                                        <div className="relative leading-[140%]">210 ms</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                                        <div className="relative leading-[140%]">96%</div>
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
                        <div className="rounded-lg bg-colors-background-bg-primary overflow-hidden flex flex-col items-start justify-start p-5 gap-[16px_0px] z-[3] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-23@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        WeatherlyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            John Doe
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
                                            ImageDetectPro, a powerful API for identifying objects,
                                            faces, and scenes in images.
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
                                        <div className="relative leading-[140%]">255 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                        <div className="w-[150px] absolute my-0 mx-[!important] top-[0px] right-[0px] h-[201px] z-[4]">
                            <div className="absolute top-[0px] right-[0px] [background:linear-gradient(270deg,_#fff,_#fff_30.26%,_rgba(255,_255,_255,_0))] w-[150px] h-[201px]" />
                            <div className="absolute top-[calc(50%_-_17.5px)] right-[0px] rounded-radius-md w-9 h-9 overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0"
                                    alt=""
                                    src="/chevronright.svg"
                                />
                            </div>
                        </div> */}





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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-2@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        QuizGenius
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Palmer
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
                                            HealthTrackerAPI facilitates the integration of health
                                            tracking features into your applications.
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
                                        <div className="relative leading-[140%]">78 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-22@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        RecipeMaster
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Kara
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
                                            Stay informed about cryptocurrency markets with
                                            CryptoWatchAPI
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
                                        <div className="relative leading-[140%]">12 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-24@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        LanguageTranslateX
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Vinnie
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
                                            Seamlessly integrate and enhance your applications with
                                            QuickConnect, an API designed for fast and secure
                                            communication between different software components.
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
                                        <div className="relative leading-[140%]">255 ms</div>
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
                                    <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
                                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/piechart01.svg"
                                        />
                                        <div className="relative leading-[140%]">99%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-25@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        MusicWaveAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Sherril
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
                                            Power your applications with GeoLocationX to retrieve
                                            precise geographical information
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
                                        <div className="relative leading-[140%]">12 ms</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary shadow-[0px_12px_16px_-4px_rgba(16,_24,_40,_0.08),_0px_4px_6px_-2px_rgba(16,_24,_40,_0.03)] box-border flex flex-col items-start justify-start p-5 relative gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch relative h-11 z-[0]">
                                <div className="absolute top-[0px] left-[0px] w-[260px] flex flex-row items-start justify-start gap-[0px_16px]">
                                    <img
                                        className="w-10 relative rounded h-10 object-cover"
                                        alt=""
                                        src="/image-25@2x.png"
                                    />
                                    <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                        <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                            FitnessPalAPI
                                        </div>
                                        <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                            <div className="relative leading-[18px]">By</div>
                                            <div className="relative leading-[18px] font-medium">
                                                Reinaldo
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
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] z-[1] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg font-body-xs">
                                <div className="self-stretch relative text-sm leading-[20px] font-text-lg-regular [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
                                    Enhance security in your applications with CodeVerifyAPI
                                </div>
                                <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
                                    <div className="relative leading-[140%]">99+</div>
                                </div>
                                <img
                                    className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                                    alt=""
                                    src="/icon--jamicons--outline--logos--circle.svg"
                                />
                                <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px]">
                                    <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                                        <img
                                            className="w-4 relative h-4 overflow-hidden shrink-0"
                                            alt=""
                                            src="/modem01.svg"
                                        />
                                        <div className="relative leading-[140%]">78 ms</div>
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
                                        <div className="relative leading-[140%]">95%</div>
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
                                        <div className="relative leading-[140%]">95%</div>
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
                            <img
                                className="w-6 absolute my-0 mx-[!important] top-[48px] left-[226px] h-6 object-cover z-[2]"
                                alt=""
                                src="/cursor@2x.png"
                            />
                            <div className="w-9 my-0 mx-[!important] absolute right-[12px] bottom-[12px] rounded-radius-md h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border z-[3]">
                                <img
                                    className="w-5 relative h-5 overflow-hidden shrink-0"
                                    alt=""
                                    src="/bookmark.svg"
                                />
                            </div>
                        </div>
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-23@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        StockifyAPI
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
                                            API designed to retrieve and analyze social media data.
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
                                        <div className="relative leading-[140%]">210 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-26@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        ImageDetectPro
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Trula
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
                                            An API delivering real-time financial data
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
                                        <div className="relative leading-[140%]">35 ms</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-27@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        SocialInsights
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Aisha
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
                                            Elevate your music-related applications with MusicWaveAPI,
                                            offering access to a vast library of music data
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
                                        <div className="relative leading-[140%]">255 ms</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-28@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        HealthTrackerAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Delores
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
                                            Create interactive quizzes and engaging educational
                                            content with QuizGenius, an API that facilitates the
                                            generation and management of quiz-based applications.
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
                                        <div className="relative leading-[140%]">410 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                                        <div className="relative leading-[140%]">96%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-29@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        SportsScoreHub
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Caterina
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
                                            An API that provides reliable and up-to-date time zone
                                            information for any location.
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
                                        <div className="relative leading-[140%]">102 ms</div>
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
                                        <div className="relative leading-[140%]">96%</div>
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
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-210@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        CodeVerifyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Sandi
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
                                            RecipeMaster provides access to a diverse collection of
                                            recipes.
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
                                        <div className="relative leading-[140%]">50 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                                </div>
                            </div>
                        </div>
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-211@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        WeatherlyAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Natashia
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
                                            <span>
                                                EventBuzz offers event management features, ticketing
                                                information, and real-time updates on upcoming events.
                                            </span>
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
                                        <div className="relative leading-[140%]">320 ms</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-212@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        CryptoWatchAPI
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Tanya
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
                                            Provides accurate and up-to-date weather data for any
                                            location
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
                                        <div className="relative leading-[140%]">35 ms</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                                        <div className="relative leading-[140%]">95%</div>
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
                        <div className="w-[300px] rounded-lg bg-colors-background-bg-primary box-border flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
                                <img
                                    className="w-10 relative rounded h-10 object-cover"
                                    alt=""
                                    src="/image-213@2x.png"
                                />
                                <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
                                    <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                                        NewsFlasher
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        <div className="relative leading-[18px]">By</div>
                                        <div className="relative leading-[18px] font-medium">
                                            Kieth
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
                                            Empower fitness applications with workout tracking,
                                            nutrition information, and health monitoring.
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
                                        <div className="relative leading-[140%]">145 ms</div>
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
                                        <div className="relative leading-[140%]">99%</div>
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
                                        <div className="relative leading-[140%]">100%</div>
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
                            <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-lg px-[18px] gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
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
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-xl text-colors-gray-dark-mode-900">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px_64px]">
                        <div className="w-width-xs flex flex-col items-start justify-start gap-[32px_0px]">
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
                            <div className="w-[335px] relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg inline-block">
                                Unleashing the potential by connecting developers to a world of
                                powerful APIs.
                            </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-start gap-[0px_32px] text-sm text-colors-text-text-quarterary-500">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                                <div className="self-stretch relative leading-[20px] font-semibold">
                                    Products
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Overview
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Features
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Solutions
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Process
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Testimonials
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Contact
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                                <div className="self-stretch relative leading-[20px] font-semibold">
                                    Company
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                About us
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Careers
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Press
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                News
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Media kit
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Contact
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                                <div className="self-stretch relative leading-[20px] font-semibold">
                                    Resources
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Blogs
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Documentation
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Help Center
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Support
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                AngelList
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Dribbble
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[96px]">
                                <div className="self-stretch relative leading-[20px] font-semibold">
                                    Legal
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px] text-base text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Terms
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Privacy
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Cookies
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Licenses
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Settings
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="hidden flex-row items-center justify-start">
                                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                            <div className="relative leading-[24px] font-semibold">
                                                Contact
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-base text-colors-text-text-quarterary-500">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-between pt-spacing-4xl px-0 pb-0 border-t-[1px] border-solid border-colors-border-border-secondary">
                        <div className="relative leading-[24px]">
                            © 2024 APIStore. All rights reserved.
                        </div>
                        <div className="flex flex-row items-center justify-start gap-[0px_24px]">
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/social-icon.svg"
                            />
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/social-icon1.svg"
                            />
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/social-icon2.svg"
                            />
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/social-icon3.svg"
                            />
                            <img
                                className="w-6 relative h-6 overflow-hidden shrink-0"
                                alt=""
                                src="/social-icon4.svg"
                            />
                            <img
                                className="w-6 relative h-6"
                                alt=""
                                src="/social-icon5.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductHomePage;
