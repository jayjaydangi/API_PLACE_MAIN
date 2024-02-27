import Link from 'next/link'
import React from 'react'

function CommonFooter() {
    return (
        <>
            <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start pt-spacing-7xl px-0 pb-spacing-6xl box-border gap-[64px_0px] z-[0] text-11xl text-colors-text-text-primary-900">
                <div className="w-full flex flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-xl text-colors-gray-dark-mode-900">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[48px_64px]">
                        <div className="w-width-xs flex flex-col items-start justify-start gap-[32px_0px]">
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
        </>
    )
}

export default CommonFooter