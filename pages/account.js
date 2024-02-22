import { useState } from "react";
import SuccessPopUp from "../Components/SuccessPopUp";
import Link from "next/link";
import CommonHeader from "../Components/Commons/Header";

const Account = () => {
  const [showSucsses, setshowSucsses] = useState(false)
  const onSaveClick = () => {
    setshowSucsses(true)
  }
  return (
    <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start text-left text-sm text-component-colors-components-buttons-secondary-button-secondary-fg font-text-lg-regular">
      <SuccessPopUp showSucsses={showSucsses} setshowSucsses={setshowSucsses} />
      {/* <div className="w-[400px] my-0 mx-[!important] absolute top-[24px] right-[24px] rounded-radius-md bg-component-colors-utility-success-utility-success-100 overflow-hidden flex flex-row items-center justify-start py-spacing-lg px-container-padding-mobile box-border max-w-[1280px] z-[3]">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
          <div className="flex-1 flex flex-row items-center justify-start gap-[0px_16px]">
            <img
              className="w-5 relative rounded-9980xl h-5"
              alt=""
              src="/featured-icon-outline.svg"
            />
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start">
              <div className="relative leading-[20px] font-medium">
                Profile photo updated successfully!
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <div className="w-9 rounded-radius-md h-9 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/xclose.svg"
              />
            </div>
          </div>
        </div>
      </div> */}

      <CommonHeader />
      <div className="w-[1440px] relative h-[1456px] z-[1] text-base">
        <div className="absolute top-[0px] left-[0px] bg-colors-background-bg-primary w-[1440px] overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border">
          <div className="w-full flex flex-row items-start justify-start py-0 px-container-padding-desktop box-border gap-[0px_16px] max-w-[1280px]">
            <div className="w-[280px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-spacing-xs px-0 box-border">
              <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover">
                <div className="flex-1 rounded-radius-sm bg-colors-border-border-tertiary flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/user01.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Account
                    </div>
                  </div>
                  <div className="w-[38px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->P`}</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/bookclosed.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      API Subscriptions
                    </div>
                  </div>
                  <div className="w-5 relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
                    ⌘S
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkcheck.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      Saved API
                    </div>
                  </div>
                  <div className="w-[7px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
                    ?
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/settings04.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">
                      My Listed API
                    </div>
                  </div>
                  <div className="w-[39px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->C`}</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0"
                      alt=""
                      src="/creditcardshield.svg"
                    />
                    <div className="flex-1 relative leading-[24px] font-medium">{`Billing & payment history`}</div>
                  </div>
                  <div className="w-[38px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->T`}</div>
                </div>
              </div>
              <Link href='/api_key' style={{textDecoration:'none'}}>
                <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
                  <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0"
                        alt=""
                        src="/key01.svg"
                      />
                      <div className="flex-1 relative leading-[24px] font-medium">
                        API Key
                      </div>
                    </div>
                    <div className="w-[38px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->T`}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] text-5xl text-colors-text-text-primary-900">
              <div className="relative leading-[32px] font-semibold">
                Account
              </div>
              <div className="w-[760px] flex flex-col items-start justify-start gap-[24px_0px] text-lg text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                <div className="self-stretch flex flex-col items-end justify-center gap-[16px_0px] text-sm text-colors-background-bg-primary">
                  <div className="self-stretch relative text-lg leading-[28px] font-semibold text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                    Account details
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
                    <div className="w-24 relative h-24">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-radius-full w-24 h-24"
                        alt=""
                        src="/avatar-profile-photo.svg"
                      />
                      <div className="absolute right-[-7px] bottom-[-7px] rounded-radius-full bg-component-colors-components-buttons-primary-button-primary-bg overflow-hidden flex flex-row items-center justify-center p-2 gap-[0px_4px] border-[3px] border-solid border-colors-background-bg-primary">
                        <img
                          className="w-4 relative h-4 overflow-hidden shrink-0"
                          alt=""
                          src="/edit02.svg"
                        />
                        <div className="hidden flex-row items-center justify-center py-0 px-spacing-xxs">
                          <div className="w-[78px] relative leading-[20px] font-semibold hidden">
                            Button CTA
                          </div>
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder2.svg"
                        />
                      </div>
                    </div>
                    <div className="w-[600px] hidden flex-col items-start justify-start text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                      <div className="self-stretch rounded-radius-xl bg-colors-background-bg-primary flex flex-col items-center justify-start py-spacing-xl px-spacing-3xl border-[1px] border-solid border-colors-border-border-secondary">
                        <div className="self-stretch flex flex-col items-center justify-start gap-[12px_0px]">
                          <img
                            className="w-10 relative rounded-radius-md h-10"
                            alt=""
                            src="/featured-icon.svg"
                          />
                          <div className="self-stretch flex flex-col items-center justify-start gap-[4px_0px]">
                            <div className="self-stretch flex flex-row items-start justify-center gap-[0px_4px]">
                              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px]">
                                <img
                                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/placeholder9.svg"
                                />
                                <div className="relative leading-[20px] font-semibold">
                                  Click to upload
                                </div>
                                <img
                                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                                  alt=""
                                  src="/placeholder9.svg"
                                />
                              </div>
                              <div className="relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                                or drag and drop
                              </div>
                            </div>
                            <div className="self-stretch relative text-xs leading-[18px] text-component-colors-components-buttons-tertiary-button-tertiary-fg text-center">
                              SVG, PNG, JPG or GIF (max. 800x400px)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px_0px] text-component-colors-components-buttons-secondary-button-secondary-fg">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                            <div className="relative leading-[20px] font-medium">
                              First Name*
                            </div>
                            <input placeholder="Enter First Name" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  John
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
                            <input placeholder="Enter Last name" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  Doe
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
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                            <div className="relative leading-[20px] font-medium">
                              Email*
                            </div>
                            <input placeholder="Enter email" className="self-stretch rounded-radius-md bg-colors-background-bg-primary-hover shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary-hover shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  johndoe@gmail.com
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
                              Username
                            </div>
                            <input placeholder="Enter Username" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  johndoe321
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
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                        <div className="flex-1 h-[70px] flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                            <div className="relative leading-[20px] font-medium">
                              Organisation
                            </div>
                            <input placeholder="Enter Organisation" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start">
                                <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                  ABC Org
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
                            <select className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <option>Software</option>
                              <option>Software</option>
                              <option>Software</option>
                            </select>
                            {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                              <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px]">
                                <div className="relative leading-[24px]">
                                  Software
                                </div>
                                <div className="w-[54px] relative leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                                  @olivia
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
                    </div>
                    <div className="self-stretch h-[180px] flex flex-col items-start justify-start gap-[6px_0px]">
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="relative leading-[20px] font-medium">
                          Description
                        </div>
                        <textarea className="self-stretch flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start py-spacing-lg px-3.5 text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                          Outside of coding, I enjoys the adrenaline of
                          football matches and the freedom of exploring the
                          open road on his motorcycle.
                        </textarea>
                        {/* <div className="self-stretch flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start py-spacing-lg px-3.5 text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                          <div className="self-stretch flex-1 relative leading-[24px]">
                            Outside of coding, I enjoys the adrenaline of
                            football matches and the freedom of exploring the
                            open road on his motorcycle.
                          </div>
                        </div> */}
                      </div>
                      <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                        This is a hint text to help user.
                      </div>
                    </div>
                  </div>
                  <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[0px_4px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/checkcircle.svg"
                    />
                    <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                      <div onClick={() => onSaveClick()} className="cursor-pointer relative leading-[20px] font-semibold">
                        Save
                      </div>
                    </div>
                    <img
                      className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder2.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative leading-[28px] font-semibold">
                      Change Password
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-center gap-[20px_0px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="w-[370px] flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            Current Password
                          </div>
                          <input placeholder="Enter Current Password" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                          {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                            <div className="flex-1 flex flex-row items-center justify-start">
                              <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                                ************
                              </div>
                            </div>
                            <img
                              className="w-4 relative h-4 hidden"
                              alt=""
                              src="/help-icon.svg"
                            />
                          </div> */}
                        </div>
                        <Link href='/forgot_password'>
                          <div className="self-stretch relative leading-[20px] font-medium text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                            Forgot password?
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
                        <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                          <div className="relative leading-[20px] font-medium">
                            New Password
                          </div>
                          <input placeholder="Enter New Password" type="password" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                          <input type="password" placeholder="Confirm New Password" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                    <div className="cursor-pointer rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-3.5 gap-[0px_4px] text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <img
                        className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                        alt=""
                        src="/checkcircle.svg"
                      />
                      <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                        <div className="relative leading-[20px] font-semibold">
                          Change Password
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
                <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
                  <div className="relative leading-[28px] font-semibold">
                    Social linked
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] text-base text-colors-text-text-primary-900">
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[0px_24px]">
                      <div className="flex-1 rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-md pr-spacing-md pl-2.5 gap-[0px_16px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/google.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-center gap-[4px_0px]">
                          <div className="relative leading-[24px] font-medium">
                            Google
                          </div>
                          <div className="self-stretch relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg overflow-hidden text-ellipsis whitespace-nowrap">
                            john.doe@gmail.com
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                          <div className="rounded-radius-xs bg-colors-background-bg-primary-hover flex flex-row items-start justify-start py-spacing-xxs px-spacing-xs border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="relative leading-[20px]">⌘C</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-radius-md overflow-hidden flex flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_4px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0"
                          alt=""
                          src="/checkcircle.svg"
                        />
                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                          <div className="relative leading-[20px] font-semibold">
                            Linked
                          </div>
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[0px_24px]">
                      <div className="flex-1 rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-md pr-spacing-md pl-2.5 gap-[0px_16px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/github.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-center gap-[4px_0px]">
                          <div className="relative leading-[24px] font-medium">
                            Github
                          </div>
                          <div className="self-stretch relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg overflow-hidden text-ellipsis whitespace-nowrap">
                            Connect your github account
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                          <div className="rounded-radius-xs bg-colors-background-bg-primary-hover flex flex-row items-start justify-start py-spacing-xxs px-spacing-xs border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="relative leading-[20px]">⌘C</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_4px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/checkcircle.svg"
                        />
                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                          <div className="relative leading-[20px] font-semibold">
                            Connect
                          </div>
                        </div>
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/placeholder1.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-start gap-[0px_24px]">
                      <div className="flex-1 rounded-radius-md overflow-hidden flex flex-row items-center justify-start py-spacing-md pr-spacing-md pl-2.5 gap-[0px_16px]">
                        <img
                          className="w-8 relative h-8"
                          alt=""
                          src="/facebook.svg"
                        />
                        <div className="flex-1 flex flex-col items-start justify-center gap-[4px_0px]">
                          <div className="relative leading-[24px] font-medium">
                            Facebook
                          </div>
                          <div className="self-stretch relative text-sm leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg overflow-hidden text-ellipsis whitespace-nowrap">
                            Connect your Facebook account
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                          <div className="rounded-radius-xs bg-colors-background-bg-primary-hover flex flex-row items-start justify-start py-spacing-xxs px-spacing-xs border-[1px] border-solid border-colors-border-border-secondary">
                            <div className="relative leading-[20px]">⌘C</div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-spacing-md px-spacing-lg gap-[0px_4px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/checkcircle.svg"
                        />
                        <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                          <div className="relative leading-[20px] font-semibold">
                            Connect
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start pt-spacing-7xl px-0 pb-spacing-6xl box-border gap-[64px_0px] z-[0] text-11xl text-colors-text-text-primary-900">
        <div className="w-[1280px] hidden flex-col items-start justify-start py-0 px-container-padding-desktop box-border max-w-[1280px] text-center">
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

export default Account;
