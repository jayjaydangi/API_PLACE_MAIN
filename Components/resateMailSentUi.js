import Link from "next/link";

const ResatePassMailComponent = () => {
    return (
      <div className="w-[1440px] bg-colors-background-bg-primary flex flex-col items-center justify-start py-spacing-7xl px-0 box-border relative gap-[32px_0px] min-h-[960px] text-left text-xl text-colors-gray-dark-mode-900 font-text-lg-regular">
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
          <div className="w-full flex flex-col items-center justify-start gap-[32px_0px] max-w-[360px] text-center text-colors-text-text-primary-900">
            <div className="self-stretch flex flex-col items-center justify-start gap-[24px_0px]">
              <img
                className="w-8 relative rounded-[15998.4px] h-8"
                alt=""
                src="/featured-icon-outline.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px_0px]">
                <div className="self-stretch relative leading-[30px] font-semibold">
                  Reset link sent!
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
                  A link to reset your password has been emailed to you.
                </div>
              </div>
            </div>
            <Link href='/log_in' className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-left text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
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
  
  export default ResatePassMailComponent;
  