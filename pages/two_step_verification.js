const TwoFactorAuth = () => {
    return (
      <div className="w-full relative bg-colors-background-bg-primary flex flex-col items-center justify-start pt-spacing-7xl px-0 pb-spacing-6xl box-border min-h-[960px] text-left text-xl text-colors-gray-dark-mode-900 font-text-lg-regular">
        <div className="w-full flex flex-col items-center justify-start py-0 px-container-padding-desktop box-border gap-[64px_0px] max-w-[1280px]">
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
          <div className="flex flex-col items-center justify-start gap-[32px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
            <div className="self-stretch flex flex-col items-center justify-start text-center text-11xl text-colors-text-text-primary-900">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                <div className="self-stretch relative leading-[38px] font-semibold">
                  Two-step verification
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  <span>We sent a verification code to j</span>
                  <span className="font-medium">ohndoe@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[32px_0px] text-component-colors-components-buttons-secondary-button-secondary-fg">
              <div className="flex flex-col items-start justify-start gap-[6px_0px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                  <div className="w-[84px] relative leading-[20px] font-medium hidden">
                    Secure code
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[0px_8px] text-center text-11xl text-component-colors-components-buttons-primary-button-primary-bg">
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className=" leading-[38px] font-medium  w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        3
                      </div>
                    </div> */}
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        5
                      </div>
                    </div> */}
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        1
                      </div>
                    </div> */}
                    <div className="w-7 relative text-41xl tracking-[-0.02em] leading-[72px] font-medium text-component-colors-components-buttons-secondary-button-secondary-border flex items-center justify-center h-16 shrink-0">
                      -
                    </div>
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_rgba(158,_119,_237,_0.24)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/> */}
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_rgba(158,_119,_237,_0.24)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        8
                      </div>
                    </div> */}
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] text-component-colors-components-buttons-secondary-button-secondary-border border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border"/> */}
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] text-component-colors-components-buttons-secondary-button-secondary-border border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        0
                      </div>
                    </div> */}
                    <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text" className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] border-[2px] border-solid border-component-colors-components-buttons-primary-button-primary-bg"/>
                    {/* <input style={{fontSize:'24px', textAlign:'center'}} maxLength="1" type="text"  className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] text-component-colors-components-buttons-secondary-button-secondary-border border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border"/> */}
                    {/* <div className="w-16 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-spacing-xxs px-spacing-md min-h-[64px] text-component-colors-components-buttons-secondary-button-secondary-border border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                      <div className="self-stretch relative leading-[38px] font-medium">
                        0
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="w-[460px] relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
                  This is a hint text to help user.
                </div>
              </div>
              <div className="w-[360px] rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] text-base text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder10.svg"
                />
                <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                  <div className="relative leading-[24px] font-semibold">
                    Continue
                  </div>
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder10.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[0px_4px]">
              <div className="relative leading-[20px]">
                Didn’t receive the email?
              </div>
              <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder9.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  Click to resend
                </div>
                <img
                  className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/placeholder9.svg"
                />
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px]">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/arrowleft.svg"
              />
              <div className="relative leading-[20px] font-semibold">
                Back to log in
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
    );
  };
  
  export default TwoFactorAuth;
  