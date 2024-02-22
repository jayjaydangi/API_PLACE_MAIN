import Link from "next/link";
const ForgotPasswordComponent = ({handleResateClick,setemail, email}) => {
  return (
    <div className="w-full relative bg-colors-background-bg-primary flex flex-col items-center justify-start py-spacing-7xl px-0 box-border gap-[32px_0px] min-h-[960px] text-left text-xl text-colors-gray-dark-mode-900 font-text-lg-regular">
    <img
      className="w-[768px] absolute my-0 mx-[!important] top-[-260px] left-[336px] h-[768px] hidden z-[0]"
      alt=""
      src="/background-pattern-decorative.svg"
    />
    <div className="w-full flex flex-col items-center justify-start py-0 px-container-padding-desktop box-border gap-[64px_0px] max-w-[1280px] z-[1]">
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
      <div className="w-full flex flex-col items-center justify-start gap-[32px_0px] max-w-[360px] text-sm text-colors-text-text-primary-900">
        <div className="self-stretch flex flex-col items-center justify-start text-center text-11xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
            <div className="self-stretch relative leading-[38px] font-semibold">
              Forgot password?
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
              No worries, we’ll send you reset instructions.
            </div>
          </div>
        </div>
        <form onSubmit={handleResateClick}>
          <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px_0px] text-component-colors-components-buttons-secondary-button-secondary-fg">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                  <div className="relative leading-[20px] font-medium">
                    Email
                  </div>
                  <input required value={email} onChange={(e) => setemail(e.target.value)} type="email" placeholder="Enter your email" className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
                  {/* <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
                <div className="flex-1 flex flex-row items-center justify-start">
                  <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
                    Enter your email
                  </div>
                </div>
                <img
                  className="w-4 relative h-4 "
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
            <button type="submit" className="cursor-pointer self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] text-base text-colors-background-bg-primary border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder2.svg"
              />
              <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
                <div className="relative leading-[24px] font-semibold">
                  Reset password
                </div>
              </div>
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                alt=""
                src="/placeholder2.svg"
              />
            </button>
          </div>
        </form>
        <Link href='/log_in' className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
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
        </Link>
      </div>
    </div>
  </div>
  );
};

export default ForgotPasswordComponent;
