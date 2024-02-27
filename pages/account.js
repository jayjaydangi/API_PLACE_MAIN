import { useEffect, useState } from "react";
import SuccessPopUp from "../Components/SuccessPopUp";
import Link from "next/link";
import CommonFooter from "../Components/Commons/CommonFooter";
import CommonHeader from "../Components/Commons/CommonHeader";
import AccountComponent from "../Components/Account/AccountComponent";
import ApiSubscriptionsComponent from "../Components/Account/ApiSubscriptionsComponent";
import Saved_API from "../Components/Account/Saved_API";
import Listed_API from "../Components/Account/Listed_API";
import Billing_payment_history from "../Components/Account/Billing_payment_history";
import Api_Key from "../Components/Account/Api_Key";

const Account = () => {
  const [showSucsses, setshowSucsses] = useState(false)
  const onSaveClick = () => {
    setshowSucsses(true)
  }
  const [activeMenuItem, setActiveMenuItem] = useState('Account'); // Initial active item
  const [activeComponent, setActiveComponent] = useState(<AccountComponent />); // State to store the active component

  useEffect(() => {
    const componentMap = {
      'Account': <AccountComponent onSaveClick={onSaveClick}/>,
      'API Subscriptions': <ApiSubscriptionsComponent />,
      'Saved API': <Saved_API />,
      'My Listed API': <Listed_API />,
      'Billing & payment history': <Billing_payment_history />,
      'API Key': <Api_Key />
      // ... Add mappings for other components
    };
    setActiveComponent(componentMap[activeMenuItem]);
  }, [activeMenuItem]);
  const handleClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  const menuItem = [
    { itemName: 'Account', icon: "/user01.svg" },
    { itemName: 'API Subscriptions', icon: "/bookclosed.svg" },
    { itemName: 'Saved API', icon: "/bookmarkcheck.svg" },
    { itemName: 'My Listed API', icon: "/settings04.svg" },
    { itemName: 'Billing & payment history', icon: "/creditcardshield.svg" },
    { itemName: 'API Key', icon: "/key01.svg" },

  ]


  return (
    <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-col items-center justify-start text-left text-sm text-component-colors-components-buttons-secondary-button-secondary-fg font-text-lg-regular">
      <SuccessPopUp showSucsses={showSucsses} setshowSucsses={setshowSucsses} />
      <CommonHeader />
      <div className={`w-[1440px] relative ${activeMenuItem === 'Account' ? 'min-h-[1400px]': 'min-h-[400px]'} z-[1] text-base`}>
      {/* <div className="w-[1440px] relative min-h-[1400px] z-[1] text-base"> */}
        <div className="absolute top-[0px] left-[0px] bg-colors-background-bg-primary w-[1440px] overflow-hidden flex flex-col items-center justify-start py-spacing-6xl px-0 box-border">
          <div className="w-full flex flex-row items-start justify-start py-0 px-container-padding-desktop box-border gap-[0px_16px] max-w-[1280px]">
            <div className="w-full flex flex-row items-start justify-start py-0 px-container-padding-desktop box-border gap-[0px_16px] max-w-[1280px]">
              {/* <CommonSideBar/> */}
              <div className="w-[280px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-spacing-xs px-0 box-border">
                {menuItem.map(
                  (menuItem, index) => (
                    <div
                      key={index}
                      className={`self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover ${menuItem.itemName === activeMenuItem ? 'bg-colors-border-border-tertiary  rounded-radius-sm' : ''
                        }`}
                      onClick={() => handleClick(menuItem.itemName)}
                    >
                      <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
                        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                          {/* Your icons and content here */}
                          <img
                            className="w-5 relative h-5 overflow-hidden shrink-0"
                            alt=""
                            src={`${menuItem.icon}`} // Adapt image paths
                          />
                          <div className="flex-1 relative leading-[24px] font-medium">
                            {menuItem.itemName}
                          </div>
                        </div>
                        {/* Hidden information */}
                        <div className="w-[7px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
                          ?
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              {activeComponent}
              {/* <Api_Key /> */}
            </div>
            {/* <AccountComponent onSaveClick={onSaveClick}/> */}
          </div>
        </div>
      </div>
      <CommonFooter />
    </div>
  );
};

export default Account;
