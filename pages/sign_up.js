import SignUpComponent from "../Components/SignUp/SignUpComponent";

const SignUp = () => {
  return (
    <SignUpComponent/>
    // <div className="w-full relative bg-colors-background-bg-primary h-[960px] flex flex-row items-center justify-start min-h-[960px] text-left text-xs text-colors-text-text-primary-900 font-text-lg-regular">
    //   <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start">
    //     <div className="self-stretch flex-1 bg-colors-background-bg-brand-section flex flex-col items-center justify-center py-spacing-11xl px-0">
    //       <div className="self-stretch flex flex-col items-center justify-center py-0 px-spacing-4xl gap-[96px_0px]">
    //         <div className="rounded-21xl flex flex-col items-center justify-start p-6 relative bg-[url('/content2@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //           <div className="w-[416px] rounded-spacing-xl bg-colors-background-bg-primary h-64 flex flex-col items-start justify-start p-5 box-border relative gap-[8px_0px] z-[0] text-right text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //             <div className="self-stretch flex-1 relative z-[0]">
    //               <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start">
    //                 <div className="self-stretch flex-1 flex flex-col items-start justify-start relative">
    //                   <div className="self-stretch flex-1 flex flex-col items-start justify-between z-[0]">
    //                     <div className="self-stretch h-[22px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="self-stretch h-[17px] flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                     <div className="w-[1216px] h-[17px] hidden flex-row items-center justify-start">
    //                       <div className="flex-1 relative box-border h-px border-t-[1px] border-solid border-colors-border-border-tertiary" />
    //                     </div>
    //                   </div>
    //                   <div className="self-stretch flex flex-row items-center justify-between py-0 px-spacing-md z-[1]">
    //                     <div className="relative leading-[18px]">Jan</div>
    //                     <div className="relative leading-[18px]">Mar</div>
    //                     <div className="relative leading-[18px]">May</div>
    //                     <div className="relative leading-[18px]">Jul</div>
    //                     <div className="relative leading-[18px]">Sep</div>
    //                     <div className="relative leading-[18px]">Nov</div>
    //                     <div className="relative leading-[18px]">Dec</div>
    //                   </div>
    //                   <img
    //                     className="w-full absolute my-0 mx-[!important] h-[calc(100%_-_27px)] top-[0px] right-[0px] bottom-[27px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[2]"
    //                     alt=""
    //                     src="/-chart-data@2x.png"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //             <img
    //               className="w-[72px] absolute my-0 mx-[!important] top-[-43px] right-[-60px] h-[72px] object-cover z-[1]"
    //               alt=""
    //               src="/rectangle-1982@2x.png"
    //             />
    //             <img
    //               className="w-8 absolute my-0 mx-[!important] top-[13px] right-[-68px] h-8 object-cover z-[2]"
    //               alt=""
    //               src="/rectangle-1991@2x.png"
    //             />
    //           </div>
    //           <div className="w-[300px] absolute my-0 mx-[!important] top-[-48px] left-[-48px] shadow-[0px_24px_48px_-12px_rgba(16,_24,_40,_0.18)] h-[201px] z-[1] text-base">
    //             <div className="absolute top-[0px] left-[0px] rounded-lg bg-colors-background-bg-primary box-border w-[300px] flex flex-col items-start justify-start p-5 gap-[16px_0px] border-[1px] border-solid border-colors-border-border-secondary">
    //               <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px]">
    //                 <img
    //                   className="w-10 relative rounded h-10 object-cover"
    //                   alt=""
    //                   src="/image-27@2x.png"
    //                 />
    //                 <div className="flex-1 flex flex-col items-start justify-center gap-[2px_0px]">
    //                   <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
    //                     SportsScoreHub
    //                   </div>
    //                   <div className="flex flex-row items-center justify-center gap-[0px_4px] text-xs text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                     <div className="relative leading-[18px]">By</div>
    //                     <div className="relative leading-[18px] font-medium">
    //                       Harriette
    //                     </div>
    //                     <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary font-body-xs">
    //                       <div className="relative leading-[140%]">99+</div>
    //                     </div>
    //                     <img
    //                       className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
    //                       alt=""
    //                       src="/icon--jamicons--outline--logos--circle.svg"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="self-stretch flex flex-col items-start justify-center gap-[24px_0px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                 <div className="self-stretch flex flex-col items-start justify-start">
    //                   <div className="self-stretch flex flex-col items-start justify-center">
    //                     <div className="self-stretch relative leading-[20px] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
    //                       SportsScoreHub offers real-time sports data for
    //                       various leagues and events.
    //                     </div>
    //                   </div>
    //                 </div>
    //                 <div className="h-[17px] flex flex-row items-center justify-start gap-[0px_12px] text-xs font-body-xs">
    //                   <div className="flex flex-row items-center justify-center gap-[0px_8px]">
    //                     <img
    //                       className="w-4 relative h-4 overflow-hidden shrink-0"
    //                       alt=""
    //                       src="/modem01.svg"
    //                     />
    //                     <div className="relative leading-[140%]">30 ms</div>
    //                     <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
    //                       <div className="relative leading-[140%]">99+</div>
    //                     </div>
    //                     <img
    //                       className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
    //                       alt=""
    //                       src="/icon--jamicons--outline--logos--circle.svg"
    //                     />
    //                   </div>
    //                   <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
    //                   <div className="flex flex-row items-center justify-center gap-[0px_8px]">
    //                     <img
    //                       className="w-4 relative h-4 overflow-hidden shrink-0"
    //                       alt=""
    //                       src="/clockrefresh.svg"
    //                     />
    //                     <div className="relative leading-[140%]">98%</div>
    //                     <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
    //                       <div className="relative leading-[140%]">99+</div>
    //                     </div>
    //                     <img
    //                       className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
    //                       alt=""
    //                       src="/icon--jamicons--outline--logos--circle.svg"
    //                     />
    //                   </div>
    //                   <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-colors-border-border-secondary" />
    //                   <div className="flex flex-row items-center justify-center gap-[0px_8px]">
    //                     <img
    //                       className="w-4 relative h-4 overflow-hidden shrink-0"
    //                       alt=""
    //                       src="/piechart01.svg"
    //                     />
    //                     <div className="relative leading-[140%]">97%</div>
    //                     <div className="rounded-xl bg-coolgray-60 hidden flex-row items-center justify-center py-[0.5px] px-[5.5px] text-center text-colors-background-bg-primary">
    //                       <div className="relative leading-[140%]">99+</div>
    //                     </div>
    //                     <img
    //                       className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
    //                       alt=""
    //                       src="/icon--jamicons--outline--logos--circle.svg"
    //                     />
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="w-[380px] absolute my-0 mx-[!important] top-[225px] left-[148px] rounded-radius-2xl shadow-[0px_32px_64px_-12px_rgba(16,_24,_40,_0.14)] h-[110px] overflow-hidden shrink-0 z-[2] text-[10.5px]">
    //             <div className="absolute right-[0px] bottom-[-17px] w-[379.8px] h-[127px] overflow-hidden">
    //               <div className="absolute top-[0px] left-[0px] rounded-[7.02px] bg-colors-background-bg-primary shadow-[0px_0.6px_1.76px_rgba(16,_24,_40,_0.1),_0px_0.6px_1.17px_rgba(16,_24,_40,_0.06)] box-border w-[480.5px] overflow-hidden flex flex-col items-start justify-start border-[0.6px] border-solid border-colors-border-border-secondary">
    //                 <div className="w-[711.7px] bg-colors-background-bg-primary hidden flex-col items-start justify-start gap-[11.71px_0px]">
    //                   <div className="self-stretch flex flex-row items-start justify-start pt-spacing-2xl px-spacing-3xl pb-0 gap-[9.36px] z-[1]">
    //                     <div className="flex-1 h-[30.4px] flex flex-col items-start justify-center gap-[2.34px_0px]">
    //                       <div className="self-stretch flex flex-row items-center justify-start gap-[0px_4.68px]">
    //                         <div className="relative leading-[16.39px] font-semibold">
    //                           API Subscriptions
    //                         </div>
    //                         <div className="rounded-radius-full bg-component-colors-utility-brand-utility-brand-50 hidden flex-row items-center justify-start py-spacing-xxs px-spacing-md text-center text-6xs text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg border-[0.6px] border-solid border-colors-text-text-tertiary-on-brand">
    //                           <div className="relative leading-[10.53px] font-medium">
    //                             10/20 seats
    //                           </div>
    //                         </div>
    //                       </div>
    //                       <div className="self-stretch relative text-4xs-2 leading-[11.71px] text-component-colors-components-buttons-tertiary-button-tertiary-fg overflow-hidden text-ellipsis whitespace-nowrap">
    //                         These companies have purchased in the last 12
    //                         months.
    //                       </div>
    //                     </div>
    //                     <div className="hidden flex-row items-center justify-start gap-[0px_7.02px] text-4xs-2 text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                       <div className="rounded-radius-md overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px]">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder11.svg"
    //                         />
    //                         <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
    //                           <div className="relative leading-[11.71px] font-semibold">
    //                             Tertiary
    //                           </div>
    //                         </div>
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder12.svg"
    //                         />
    //                       </div>
    //                       <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg border-[0.6px] border-solid border-component-colors-components-buttons-secondary-color-button-secondary-color-border">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder13.svg"
    //                         />
    //                         <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
    //                           <div className="relative leading-[11.71px] font-semibold">
    //                             Secondary
    //                           </div>
    //                         </div>
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder14.svg"
    //                         />
    //                       </div>
    //                       <div className="rounded-radius-md bg-colors-background-bg-primary shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-component-colors-components-buttons-secondary-button-secondary-fg border-[0.6px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder15.svg"
    //                         />
    //                         <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
    //                           <div className="relative leading-[11.71px] font-semibold">
    //                             Secondary
    //                           </div>
    //                         </div>
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder16.svg"
    //                         />
    //                       </div>
    //                       <div className="rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_0.6px_1.17px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-[5.852531433105469px] px-[8.193543434143066px] gap-[0px_2.34px] text-colors-background-bg-primary border-[0.6px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder17.svg"
    //                         />
    //                         <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
    //                           <div className="relative leading-[11.71px] font-semibold">
    //                             Primary
    //                           </div>
    //                         </div>
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/placeholder18.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="flex flex-col items-start justify-start">
    //                       <img
    //                         className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                         alt=""
    //                         src="/dotsvertical1.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <img
    //                     className="self-stretch relative max-w-full overflow-hidden h-[0.6px] shrink-0 z-[0]"
    //                     alt=""
    //                     src="/divider1.svg"
    //                   />
    //                 </div>
    //                 <div className="self-stretch flex flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                   <div className="flex-1 flex flex-col items-start justify-start text-colors-text-text-primary-900">
    //                     <div className="w-[135.2px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-6xs text-component-colors-components-buttons-tertiary-button-tertiary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-row items-center justify-start gap-[0px_2.34px]">
    //                         <div className="relative leading-[10.53px] font-medium">
    //                           APIs
    //                         </div>
    //                         <img
    //                           className="w-[9.4px] relative h-[9.4px] overflow-hidden shrink-0 hidden"
    //                           alt=""
    //                           src="/arrowdown1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar8@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[20px] font-medium">
    //                         FitnessPalAPI
    //                       </div>
    //                     </div>
    //                     <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar9@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[20px] font-medium">
    //                         GeoLocationX
    //                       </div>
    //                     </div>
    //                     <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar10@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[20px] font-medium">
    //                         ImageDetectPro
    //                       </div>
    //                     </div>
    //                     <div className="w-[135.2px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_12px] border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar11@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[20px] font-medium">
    //                         SocialInsights
    //                       </div>
    //                     </div>
    //                     <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar12@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[11.71px] font-medium">
    //                         FitnessPalAPI
    //                       </div>
    //                     </div>
    //                     <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar13@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[11.71px] font-medium">
    //                         FinancePulse
    //                       </div>
    //                     </div>
    //                     <div className="w-[173.2px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl gap-[0px_7.02px] text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="w-[23.4px] relative rounded-radius-md h-[23.4px] bg-[url('/avatar14@3x.png')] bg-cover bg-no-repeat bg-[top]">
    //                         <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-md box-border overflow-hidden border-[0.4px] border-solid border-colors-border-border-secondary" />
    //                       </div>
    //                       <div className="relative leading-[11.71px] font-medium">
    //                         HealthTrackerAPI
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-start text-xs">
    //                     <div className="w-[84.3px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-row items-center justify-start">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Status
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-utility-success-utility-success-700 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="rounded-radius-full bg-component-colors-utility-success-utility-success-50 flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-component-colors-utility-success-utility-success-200">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Published
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-utility-warning-utility-warning-700 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="rounded-radius-full bg-component-colors-utility-warning-utility-warning-50 flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-component-colors-utility-warning-utility-warning-200">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Under Review
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="rounded-radius-full bg-colors-background-bg-primary-hover flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-colors-border-border-secondary">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Draft
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[84.3px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-center text-component-colors-components-buttons-secondary-button-secondary-fg border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="rounded-radius-full bg-colors-background-bg-primary-hover flex flex-row items-center justify-start py-spacing-xxs px-spacing-md border-[0.6px] border-solid border-colors-border-border-secondary">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Draft
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">Free</div>
    //                     </div>
    //                     <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">Free</div>
    //                     </div>
    //                     <div className="w-[187.3px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">Free</div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-start">
    //                     <div className="w-[86.6px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-row items-center justify-start">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Total subscribers
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">472</div>
    //                     </div>
    //                     <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[86.6px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-start">
    //                     <div className="w-[60.9px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-row items-center justify-start">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Revenue
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">₹38,400</div>
    //                     </div>
    //                     <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[60.9px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-start">
    //                     <div className="w-[73.7px] bg-colors-background-bg-primary-hover box-border h-[25.8px] flex flex-row items-center justify-start py-spacing-lg px-spacing-3xl text-xs border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-row items-center justify-start">
    //                         <div className="relative leading-[18px] font-medium">
    //                           Success Rate
    //                         </div>
    //                       </div>
    //                     </div>
    //                     <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">98%</div>
    //                     </div>
    //                     <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[73.7px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[20px]">-</div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                     <div className="w-[93.6px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl text-4xs-2 border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="relative leading-[11.71px]">
    //                         Olivia Rhye
    //                       </div>
    //                     </div>
    //                   </div>
    //                   <div className="flex flex-col items-start justify-start">
    //                     <div className="w-[39.8px] bg-colors-background-bg-primary-hover box-border h-[25.8px] border-b-[0.6px] border-solid border-colors-border-border-secondary" />
    //                     <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] flex flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                     <div className="w-[39.8px] box-border h-[42.1px] hidden flex-row items-center justify-start py-spacing-xl px-spacing-3xl border-b-[0.6px] border-solid border-colors-border-border-secondary">
    //                       <div className="flex flex-col items-start justify-start">
    //                         <img
    //                           className="w-[11.7px] relative h-[11.7px] overflow-hidden shrink-0"
    //                           alt=""
    //                           src="/dotsvertical1.svg"
    //                         />
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <img
    //             className="w-20 absolute my-0 mx-[!important] bottom-[-24px] left-[-40px] h-20 object-cover z-[3]"
    //             alt=""
    //             src="/rectangle-1983@2x.png"
    //           />
    //         </div>
    //         <div className="self-stretch flex flex-col items-center justify-start gap-[32px_0px] text-center text-5xl text-colors-background-bg-primary">
    //           <div className="w-[456px] flex flex-col items-center justify-start gap-[8px_0px]">
    //             <div className="self-stretch relative leading-[32px] font-semibold">
    //               Introducing API Analytics
    //             </div>
    //             <div className="self-stretch relative text-base leading-[24px] font-medium text-colors-text-text-tertiary-on-brand">
    //               Powerful, self-serve product and growth analytics to help you
    //               convert, engage, and retain more users on your API.
    //             </div>
    //           </div>
    //           <div className="self-stretch flex flex-row items-center justify-center">
    //             <div className="flex flex-row items-center justify-center gap-[0px_16px]">
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-background-bg-primary h-2.5 overflow-hidden shrink-0" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0 hidden" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-foreground-fg-brand-secondary-500 h-2.5 overflow-hidden shrink-0 hidden" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
    //               <div className="w-2.5 relative rounded-radius-full bg-colors-border-border-secondary h-2.5 overflow-hidden shrink-0 hidden" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="self-stretch flex-1 flex flex-col items-center justify-center min-w-[480px] text-11xl">
    //     <div className="self-stretch flex-1 flex flex-col items-center justify-center p-8 relative">
    //       <div className="w-full flex flex-col items-start justify-start gap-[32px_0px] max-w-[520px] z-[0]">
    //         <div className="self-stretch flex flex-col items-start justify-start gap-[32px_0px]">
    //           <div className="self-stretch flex flex-col items-center justify-start">
    //             <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
    //               <div className="self-stretch relative leading-[38px] font-semibold">
    //                 Sign up
    //               </div>
    //               <div className="self-stretch relative text-base leading-[24px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                 Sign up in less than 2 minutes.
    //               </div>
    //             </div>
    //           </div>
    //           <div className="self-stretch rounded-spacing-lg flex flex-col items-center justify-start gap-[24px_0px] text-sm text-component-colors-components-buttons-secondary-button-secondary-fg">
    //             <div className="self-stretch flex flex-col items-start justify-start gap-[20px_0px]">
    //               <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
    //                 <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       First Name*
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           Enter your first name
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-4 relative h-4 hidden"
    //                         alt=""
    //                         src="/help-icon.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //                 <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       Last Name*
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           Enter your last name
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-4 relative h-4 hidden"
    //                         alt=""
    //                         src="/help-icon.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                 <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="relative leading-[20px] font-medium">
    //                     Email*
    //                   </div>
    //                   <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                     <div className="flex-1 flex flex-row items-center justify-start">
    //                       <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                         Enter your email
    //                       </div>
    //                     </div>
    //                     <img
    //                       className="w-4 relative h-4 hidden"
    //                       alt=""
    //                       src="/help-icon.svg"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                   This is a hint text to help user.
    //                 </div>
    //               </div>
    //               <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
    //                 <div className="flex-1 h-[70px] flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       Organisation
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           Enter your organisation
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-4 relative h-4 hidden"
    //                         alt=""
    //                         src="/help-icon.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //                 <div className="flex-1 flex flex-col items-start justify-start gap-[8px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       Sector
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           Select team member
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-5 relative h-5 overflow-hidden shrink-0"
    //                         alt=""
    //                         src="/chevrondown.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="self-stretch flex flex-row items-start justify-start gap-[0px_20px]">
    //                 <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       New Password
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           ncsjdnsvs32932
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-5 relative h-5 overflow-hidden shrink-0"
    //                         alt=""
    //                         src="/eyeoff.svg"
    //                       />
    //                     </div>
    //                     <div className="self-stretch relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //                       Must be at least 8 characters.
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //                 <div className="flex-1 flex flex-col items-start justify-start gap-[6px_0px]">
    //                   <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
    //                     <div className="relative leading-[20px] font-medium">
    //                       Confirm New Password
    //                     </div>
    //                     <div className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //                       <div className="flex-1 flex flex-row items-center justify-start">
    //                         <div className="flex-1 relative leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">
    //                           ****************
    //                         </div>
    //                       </div>
    //                       <img
    //                         className="w-5 relative h-5 overflow-hidden shrink-0"
    //                         alt=""
    //                         src="/eye.svg"
    //                       />
    //                     </div>
    //                   </div>
    //                   <div className="w-80 relative leading-[20px] text-component-colors-components-buttons-tertiary-button-tertiary-fg hidden">
    //                     This is a hint text to help user.
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="self-stretch flex flex-col items-start justify-start text-base text-colors-background-bg-primary">
    //               <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[0px_6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
    //                 <img
    //                   className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
    //                   alt=""
    //                   src="/placeholder10.svg"
    //                 />
    //                 <div className="flex flex-row items-center justify-center py-0 px-spacing-xxs">
    //                   <div className="relative leading-[24px] font-semibold">
    //                     Get started
    //                   </div>
    //                 </div>
    //                 <img
    //                   className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
    //                   alt=""
    //                   src="/placeholder10.svg"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="self-stretch flex flex-row items-center justify-center gap-[0px_16px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //           <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
    //           <div className="relative leading-[20px]">or</div>
    //           <div className="w-[90px] relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" />
    //         </div>
    //         <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px]">
    //           <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
    //             <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon11.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon12.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon13.svg"
    //               />
    //             </div>
    //             <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon14.svg"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
    //             <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon12.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon12.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon13.svg"
    //               />
    //             </div>
    //             <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon14.svg"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex-1 flex flex-row items-center justify-center gap-[0px_12px]">
    //             <div className="flex-1 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/icomoonfreegithub1.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon12.svg"
    //               />
    //             </div>
    //             <div className="w-28 rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon13.svg"
    //               />
    //             </div>
    //             <div className="w-[81px] rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] box-border overflow-hidden hidden flex-row items-center justify-center p-2.5 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border">
    //               <img
    //                 className="w-6 relative h-6 overflow-hidden shrink-0"
    //                 alt=""
    //                 src="/social-icon14.svg"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-[720px] my-0 mx-[!important] absolute top-[0px] left-[0px] flex flex-row items-center justify-between p-8 box-border z-[1] text-xl text-colors-gray-dark-mode-900">
    //         <div className="w-[127px] relative h-8">
    //           <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_63.5px)] flex flex-row items-start justify-start">
    //             <img
    //               className="w-8 relative rounded-spacing-md h-8 overflow-hidden shrink-0"
    //               alt=""
    //               src="/content.svg"
    //             />
    //           </div>
    //           <div className="absolute h-full w-[66.93%] top-[0%] right-[0%] bottom-[0%] left-[33.07%]">
    //             <div className="absolute top-[3.13%] left-[0%] leading-[30px] font-semibold">
    //               APIStore
    //             </div>
    //           </div>
    //         </div>
    //         <div className="flex flex-row items-start justify-center gap-[0px_4px] text-sm text-component-colors-components-buttons-tertiary-button-tertiary-fg">
    //           <div className="relative leading-[20px]">
    //             Already have an account?
    //           </div>
    //           <div className="overflow-hidden flex flex-row items-center justify-center gap-[0px_6px] text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
    //             <img
    //               className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
    //               alt=""
    //               src="/placeholder9.svg"
    //             />
    //             <div className="relative leading-[20px] font-semibold">
    //               Log in
    //             </div>
    //             <img
    //               className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
    //               alt=""
    //               src="/placeholder9.svg"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SignUp;
