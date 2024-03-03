import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function CommonSideBar({ OnLogOutClick }) {
  const [activeMenuItem, setActiveMenuItem] = useState('Account'); // Initial active item
  // const [activeComponent, setActiveComponent] = useState(null); // State to store the active component

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
    <div style={{
      position: 'fixed',
      top: '225px',
      right: '-30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '10px',
      border: '1px solid #ccc',
      zIndex: '99',
      fontSize: '12px',
      width: '200px',
      borderRadius: "10px"
    }}>
      <div className="w-[200px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-spacing-xs px-0 box-border">
        {menuItem?.map(
          (menuItem, index) => (
            <div
              key={index}
              style={{ width: '200px' }}
              className={`self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover ${menuItem.itemName === activeMenuItem ? 'bg-colors-border-border-tertiary  rounded-radius-sm' : ''
                }`}
              onClick={() => handleClick(menuItem.itemName)}
            >
              <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-2 px-2.5 gap-[0px_12px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src={`${menuItem.icon}`}
                  />
                  <div className="flex-1 relative leading-[24px] font-medium">
                    <Link href='/account'>
                      {menuItem.itemName}
                    </Link>
                  </div>
                </div>
                <div className="w-[7px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
                  ?
                </div>
              </div>
            </div>
          )
        )}
        <div
          style={{ width: '200px' }}
          className={`self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover ${menuItem.itemName === activeMenuItem ? 'bg-colors-border-border-tertiary  rounded-radius-sm' : ''
            }`}
          onClick={() => OnLogOutClick()}
        >
          <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-2 px-2.5 gap-[0px_12px]">
            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
              <img
                className="w-5 relative h-5 overflow-hidden shrink-0"
                alt=""
                src="/log-out-01.svg"
              />
              <div className="flex-1 relative leading-[24px] font-medium">
                LogOut
              </div>
            </div>
            <div className="w-[7px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
              ?
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CommonSideBar;







// import React from 'react'

// function CommonSideBar() {

//     return (
//         <div>
//             <div className="w-[280px] overflow-hidden shrink-0 flex flex-col items-start justify-start py-spacing-xs px-0 box-border">
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
//                     <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/user01.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">
//                                 Account
//                             </div>
//                         </div>
//                         <div className="w-[38px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->P`}</div>
//                     </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
//                     <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/bookclosed.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">
//                                 API Subscriptions
//                             </div>
//                         </div>
//                         <div className="w-5 relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
//                             ⌘S
//                         </div>
//                     </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
//                     <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/bookmarkcheck.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">
//                                 Saved API
//                             </div>
//                         </div>
//                         <div className="w-[39px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->C`}</div>
//                     </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
//                     <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/settings04.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">
//                                 My Listed API
//                             </div>
//                         </div>
//                         <div className="w-[39px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->C`}</div>
//                     </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm">
//                     <div className="flex-1 rounded-radius-sm flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/creditcardshield.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">{`Billing & payment history`}</div>
//                         </div>
//                         <div className="w-[38px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">{`⌘K->T`}</div>
//                     </div>
//                 </div>
//                 <div className="self-stretch flex flex-row items-center justify-start py-px px-spacing-sm text-colors-text-text-secondary-hover">
//                     <div className="flex-1 rounded-radius-sm bg-colors-border-border-tertiary flex flex-row items-center justify-start py-3 px-2.5 gap-[0px_12px]">
//                         <div className="flex-1 flex flex-row items-center justify-start gap-[0px_12px]">
//                             <img
//                                 className="w-5 relative h-5 overflow-hidden shrink-0"
//                                 alt=""
//                                 src="/key01.svg"
//                             />
//                             <div className="flex-1 relative leading-[24px] font-medium">
//                                 API Key
//                             </div>
//                         </div>
//                         <div className="w-[7px] relative text-xs leading-[18px] text-colors-text-text-quarterary-500 hidden">
//                             ?
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CommonSideBar