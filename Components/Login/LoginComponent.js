import Link from "next/link";
import Router from "next/router";
import { useState } from "react";

const LogInComponent = () => {
    const [Password, setPassword] = useState('')
const [Email, setEmail] = useState('')

    const onClickSignIn =()=>{
        alert(`Email: ${Email} and Pass: ${Password}`);
        Router.push("/")
    }
    return (
        <div className="w-full relative bg-colors-background-bg-primary h-[960px] flex flex-row items-center justify-start min-h-[960px] text-left text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg font-text-lg-regular">
            <div className="self-stretch flex-1 bg-colors-background-bg-brand-section overflow-hidden flex flex-col items-center justify-center py-spacing-11xl px-0">
                <div className="self-stretch flex flex-col items-center justify-center py-0 px-container-padding-desktop gap-[64px_0px]">
                    <div className="rounded-21xl flex flex-col items-center justify-start p-6 relative bg-[url('/content1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                        <div className="w-[416px] rounded-[8.35px] bg-colors-background-bg-primary shadow-[0px_0.7px_2.09px_rgba(16,_24,_40,_0.1),_0px_0.7px_1.39px_rgba(16,_24,_40,_0.06)] box-border overflow-hidden flex flex-col items-start justify-start z-[0] border-[0.7px] border-solid border-colors-border-border-secondary">
                            <div className="w-[567.1px] flex flex-row items-start justify-start">
                                <div className="w-40 flex flex-col items-start justify-start text-colors-text-text-primary-900">
                                    <div className="w-[186.6px] bg-colors-background-bg-primary-hover box-border h-[33.9px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-3xs-3 text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-row items-center justify-start gap-[0px_3.08px]">
                                            <div className="relative leading-[13.88px] font-medium">
                                                APIs
                                            </div>
                                            <img
                                                className="w-[12.3px] relative h-[12.3px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/arrowdown.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[186.6px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[20px] font-medium">
                                            CodeVerifyAPI
                                        </div>
                                    </div>
                                    <div className="w-[186.6px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar1@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[20px] font-medium">
                                            MusicWaveAPI
                                        </div>
                                    </div>
                                    <div className="w-[186.6px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar2@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[20px] font-medium">
                                            GeoLocationX
                                        </div>
                                    </div>
                                    <div className="w-[186.6px] bg-colors-background-bg-primary-hover box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar3@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[20px] font-medium">
                                            TravelerCompanion
                                        </div>
                                    </div>
                                    <div className="w-40 box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_9.25px] text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar4@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[15.42px] font-medium">
                                            FitnessPalAPI
                                        </div>
                                    </div>
                                    <div className="w-40 box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_9.25px] text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar5@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[15.42px] font-medium">
                                            FinancePulse
                                        </div>
                                    </div>
                                    <div className="w-40 box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_9.25px] text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="w-[30.8px] relative rounded-radius-md h-[30.8px] bg-[url('/avatar6@3x.png')] bg-cover bg-no-repeat bg-[top]">
                                            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.6px] border-solid border-colors-border-border-secondary" />
                                        </div>
                                        <div className="relative leading-[15.42px] font-medium">
                                            HealthTrackerAPI
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[116px] flex flex-col items-start justify-start text-2xs-8">
                                    <div className="w-[128.8px] bg-colors-background-bg-primary-hover box-border h-[33.9px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-3xs-3 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="hidden flex-row items-center justify-start">
                                            <div className="w-[52px] relative leading-[13.88px] font-medium hidden">
                                                Plan Details
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[128.8px] box-border h-[55.5px] flex flex-row items-center justify-end py-spacing-xl px-spacing-3xl gap-[0px_9.25px] text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.8px_1.54px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_3.08px] border-[0.8px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder3.svg"
                                            />
                                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                                <div className="relative leading-[15.42px] font-semibold">
                                                    Upgrade plan
                                                </div>
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder4.svg"
                                            />
                                        </div>
                                        <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_4.63px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder5.svg"
                                            />
                                            <div className="relative leading-[15.42px] font-semibold">
                                                Edit
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder6.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[128.8px] box-border h-[55.5px] flex flex-row items-center justify-end py-spacing-xl px-spacing-3xl gap-[0px_9.25px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_3.08px]">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder7.svg"
                                            />
                                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                                <div className="relative leading-[15.42px] font-semibold">
                                                    Upgrade plan
                                                </div>
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder8.svg"
                                            />
                                        </div>
                                        <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_4.63px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder5.svg"
                                            />
                                            <div className="relative leading-[15.42px] font-semibold">
                                                Edit
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder6.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[128.8px] box-border h-[55.5px] flex flex-row items-center justify-end py-spacing-xl px-spacing-3xl gap-[0px_9.25px] border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="rounded-radius-md overflow-hidden hidden flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_3.08px]">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder7.svg"
                                            />
                                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                                <div className="relative leading-[15.42px] font-semibold">
                                                    Upgrade plan
                                                </div>
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder8.svg"
                                            />
                                        </div>
                                        <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_4.63px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder5.svg"
                                            />
                                            <div className="relative leading-[15.42px] font-semibold">
                                                Edit
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder6.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="bg-colors-background-bg-primary-hover box-border h-[55.5px] flex flex-row items-center justify-end py-spacing-xl px-spacing-3xl gap-[0px_9.25px] text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.8px_1.54px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_3.08px] border-[0.8px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder3.svg"
                                            />
                                            <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                                <div className="relative leading-[15.42px] font-semibold">
                                                    Upgrade plan
                                                </div>
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder4.svg"
                                            />
                                        </div>
                                        <div className="overflow-hidden hidden flex-row items-center justify-center gap-[0px_4.63px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder5.svg"
                                            />
                                            <div className="relative leading-[15.42px] font-semibold">
                                                Edit
                                            </div>
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder6.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                </div>
                                <div className="w-[136px] flex flex-col items-start justify-start text-component-colors-components-buttons-secondary-button-secondary-fg">
                                    <div className="w-[140px] bg-colors-background-bg-primary-hover box-border h-[34px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative leading-[18px] font-medium">
                                                Usage
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[140px] box-border h-[55px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-[calc(100%_+_0.7px)] top-[0px] right-[-0.7px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[80.61%] top-[0px] right-[19.39%] left-[0%] rounded-radius-full bg-colors-foreground-fg-warning-secondary h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[20px] font-medium">
                                                81%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[140px] box-border h-14 flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-[calc(100%_-_0.2px)] top-[0px] right-[0.2px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[60.54%] top-[0px] right-[39.46%] left-[0%] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[20px] font-medium">
                                                60%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[140px] box-border h-[55px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-[calc(100%_+_0.7px)] top-[0px] right-[-0.7px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[30.27%] top-[0px] right-[69.73%] left-[0%] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[20px] font-medium">
                                                35%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[140px] bg-colors-background-bg-primary-hover box-border h-14 flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-[calc(100%_+_0.3px)] top-[0px] right-[-0.3px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-radius-full bg-colors-foreground-fg-error-secondary h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[20px] font-medium">
                                                100%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[169.6px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[20.12%] top-[0px] right-[79.88%] left-[0%] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[15.42px] font-medium">
                                                20%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[169.6px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-[calc(100%_-_0.5px)] top-[0px] right-[0.5px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[10.06%] top-[0px] right-[89.94%] left-[0%] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[15.42px] font-medium">
                                                10%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[169.6px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[0px_9.25px]">
                                            <div className="flex-1 relative rounded-spacing-md h-[6.2px]">
                                                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-radius-full bg-colors-border-border-secondary h-[6.2px]" />
                                                <div className="absolute w-[40.24%] top-[0px] right-[59.76%] left-[0%] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg h-[6.2px]" />
                                            </div>
                                            <div className="relative leading-[15.42px] font-medium">
                                                40%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <div className="w-[89.4px] bg-colors-background-bg-primary-hover box-border h-[33.9px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative leading-[18px] font-medium">
                                                Plan Details
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[89.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[20px]">Free</div>
                                    </div>
                                    <div className="w-[89.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[20px]">Free</div>
                                    </div>
                                    <div className="w-[89.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[20px]">Free</div>
                                    </div>
                                    <div className="w-[89.4px] bg-colors-background-bg-primary-hover box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[20px]">Pro</div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                    <div className="w-[246.7px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">Free</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <div className="w-[97.9px] bg-colors-background-bg-primary-hover box-border h-[33.9px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-row items-center justify-start">
                                            <div className="relative leading-[18px] font-medium">
                                                Total Request
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[97.9px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-colors-text-text-primary-900 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex flex-col items-start justify-start">
                                            <div className="relative leading-[20px]">768</div>
                                            <div className="relative text-xs leading-[18px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                                out of 1,500
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[97.9px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-colors-text-text-primary-900 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex flex-col items-start justify-start">
                                            <div className="relative leading-[20px]">600</div>
                                            <div className="relative text-xs leading-[18px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                                out of 1,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[97.9px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-colors-text-text-primary-900 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex flex-col items-start justify-start">
                                            <div className="relative leading-[20px]">700</div>
                                            <div className="relative text-xs leading-[18px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                                out of 2,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[97.9px] bg-colors-background-bg-primary-hover box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-colors-text-text-primary-900 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="self-stretch flex flex-col items-start justify-start">
                                            <div className="relative leading-[20px]">10,000</div>
                                            <div className="relative text-xs leading-[18px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                                out of 10,000
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[123.4px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">
                                            Olivia Rhye
                                        </div>
                                    </div>
                                    <div className="w-[123.4px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">
                                            Olivia Rhye
                                        </div>
                                    </div>
                                    <div className="w-[123.4px] box-border h-[55.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-2xs-8 border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="relative leading-[15.42px]">
                                            Olivia Rhye
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-start">
                                    <div className="w-[68px] bg-colors-background-bg-primary-hover box-border h-11 border-b-[0.8px] border-solid border-colors-border-border-secondary" />
                                    <div className="w-[52.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[52.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[52.4px] box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[52.4px] bg-colors-background-bg-primary-hover box-border h-[55.5px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[68px] box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[68px] box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[68px] box-border h-[342.5px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.8px] border-solid border-colors-border-border-secondary">
                                        <div className="flex flex-col items-start justify-start">
                                            <img
                                                className="w-[15.4px] relative h-[15.4px] overflow-hidden shrink-0"
                                                alt=""
                                                src="/dotsvertical.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="w-[72px] absolute my-0 mx-[!important] top-[-19px] right-[-36px] h-[72px] object-cover z-[1]"
                            alt=""
                            src="/rectangle-198@2x.png"
                        />
                        <img
                            className="w-8 absolute my-0 mx-[!important] top-[37px] right-[-44px] h-8 object-cover z-[2]"
                            alt=""
                            src="/rectangle-199@2x.png"
                        />
                        <div className="w-[216px] absolute my-0 mx-[!important] top-[-35px] left-[-52px] shadow-[0px_32px_64px_-12px_rgba(16,_24,_40,_0.14)] h-[106px] z-[3] text-11xl text-colors-text-text-primary-900">
                            <div className="absolute right-[0px] bottom-[0px] rounded-spacing-lg bg-component-colors-alpha-alpha-white-90 [backdrop-filter:blur(16px)] w-[216px] flex flex-col items-start justify-start p-4 box-border">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
                                    <div className="self-stretch relative leading-[38px] font-semibold">
                                        ₹58,144.00
                                    </div>
                                    <div className="flex flex-row items-center justify-center gap-[0px_4px] text-center text-sm text-colors-text-text-success-primary-600">
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0"
                                            alt=""
                                            src="/trendup01.svg"
                                        />
                                        <div className="relative leading-[20px] font-medium">
                                            ₹2,264.00 (+14%)
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="w-20 absolute my-0 mx-[!important] bottom-[-23.9px] left-[-40px] h-20 object-cover z-[4]"
                            alt=""
                            src="/rectangle-198@2x.png"
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center gap-[48px_0px] text-center text-xl text-colors-background-bg-primary">
                        <div className="w-[400px] flex flex-col items-center justify-start gap-[8px_0px]">
                            <div className="self-stretch relative leading-[30px] font-medium">
                                Welcome to your new dashboard
                            </div>
                            <div className="self-stretch relative text-base leading-[24px] font-medium text-colors-text-text-tertiary-on-brand">
                                Sign in to explore changes we’ve made.
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
            <div className="self-stretch flex-1 flex flex-col items-center justify-start relative min-w-[480px] text-11xl text-colors-text-text-primary-900">
                <div className="self-stretch flex-1 flex flex-col items-center justify-center py-0 px-container-padding-desktop z-[0]">
                    <div className="w-full flex flex-col items-start justify-start gap-[32px_0px] max-w-[360px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px]">
                            <div className="self-stretch flex flex-col items-center justify-start">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                                    <div className="self-stretch relative leading-[38px] font-semibold">
                                        Log in
                                    </div>
                                    <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                        Welcome! Please enter your details.
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px_0px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                                <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                                            <div className="relative leading-[20px] font-medium">
                                                Email
                                            </div>
                                            <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                                    <div className="self-stretch h-[70px] flex flex-col items-start justify-start gap-[6px_0px]">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                                            <div className="relative leading-[20px] font-medium">
                                                Password
                                                {/* Confirm New Password */}
                                            </div>
                                            <input  value={Password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                                <div className="flex-1 flex flex-row items-center justify-start">
                                                    <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                        ****************
                                                    </div>
                                                </div>
                                                <img
                                                    className="w-5 relative h-5 overflow-hidden shrink-0"
                                                    alt=""
                                                    src="/eye.svg"
                                                />
                                            </div> */}
                                        </div>
                                        <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                                            This is a hint text to help user.
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-row items-center justify-start">
                                    <div className="flex-1 flex flex-row items-start justify-start gap-[0px_8px]">
                                        <div className="flex flex-row items-center justify-center pt-spacing-xxs px-0 pb-0">
                                            {/* <div class="form-check">
                                              <label class="form-check-label">
                                                Remember for 30 days
                                              </label>
                                            </div> */}
                                            <input type="checkbox" className=" cursor-pointer form-check-input" name="" id="" value="checkedValue" />
                                            {/* <div className="w-4 relative rounded-spacing-xs box-border h-4 overflow-hidden shrink-0 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" /> */}
                                        </div>
                                        <div className="flex-1 flex flex-col items-start justify-start">
                                            <div className="self-stretch relative leading-[20px] font-medium">
                                                Remember for 30 days
                                            </div>
                                            <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                                                Save my login details for next time.
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/forgot_password">
                                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder9.svg"
                                            />
                                            <div className="relative leading-[20px] font-semibold">
                                                Forgot password
                                            </div>
                                            <img
                                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                                alt=""
                                                src="/placeholder9.svg"
                                            />
                                        </div>
                                    </Link>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-base text-colors-background-bg-primary">
                                    <button onClick={()=>onClickSignIn()} className="text-white  cursor-pointer self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                                        <img
                                            className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                            alt=""
                                            src="/placeholder10.svg"
                                        />
                                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                                            <div className="relative leading-[24px] font-semibold text">
                                                Sign in
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
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-center gap-[0px_16px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                            <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
                            <div className="relative leading-[20px]">or</div>
                            <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px]">
                            <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
                                <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <img
                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                        alt="google icon"
                                        // onClick={handleSignIn}
                                        src="/social-icon6.svg"
                                    />
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
                                        src="/social-icon10.svg"
                                    />
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
                            <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
                                <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <img
                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/icomoonfreegithub.svg"
                                    />
                                </div>
                                <div className="w-[51.3px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <img
                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/social-icon7.svg"
                                    />
                                </div>
                                <div className="w-[51.3px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <img
                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/social-icon8.svg"
                                    />
                                </div>
                                <div className="w-[51.3px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                                    <img
                                        className="w-6 relative h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/social-icon9.svg"
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="w-[720px] my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-row items-center justify-between p-8 box-border z-[1] text-xl text-colors-gray-dark-mode-900">
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
                    <div className="flex flex-row items-baseline justify-center gap-[0px_4px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                        <div className="relative leading-[20px]">
                            Don’t have an account?
                        </div>
                        <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                            <img
                                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                alt=""
                                src="/placeholder9.svg"
                            />
                            <Link href="/sign_up">
                                <div className="relative leading-[20px] font-semibold">
                                    Sign up
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
    );
};

export default LogInComponent;
