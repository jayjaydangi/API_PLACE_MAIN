import { collection, getDocs } from 'firebase/firestore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import { dbFireStore } from '../Firebase/Firebase'
import useWindow from '../Commons/hasWindow';

function AccountComponent({ onSaveClick }) {
  const hasWindow = useWindow();
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    organization: '',
    category: 'Software',
    description: '',
    // profilePictureUrl:'',
  });
  const [userInfo, setuserInfo] = useState({})
  useEffect(() => {
    if (hasWindow) {
      setuserInfo(JSON.parse(localStorage.getItem("userInfo")))
      setFormValues(JSON.parse(localStorage.getItem("userPnl_Info")))
    }
  }, [hasWindow])
  const u_id = userInfo?.uid;
  const [userData, setUserData] = useState({});
  console.log('userData', userData)
  const headers = {
    'Authorization': `Bearer ${userInfo?.stsTokenManager?.accessToken}`,
    'Content-Type': 'application/json'
    // Add any other headers if needed
  };
  useEffect(() => {
    // Fetch user information from the API
    fetch(`https://gatewaysvc-dev.azurewebsites.net/api/users/${u_id}`, { headers })
      .then((response) => response.json())
      .then((data) => {
        setUserData(data); // Save user data to state
        localStorage.setItem('userPnl_Info', JSON.stringify({
          firstName: data?.firstName || '',
          lastName: data?.lastName || '',
          email: data?.email || '',
          username: data?.username || '',
          organization: data?.organizationName || '',
          category: data?.category || 'Software',
          description: data?.description || '',
          profilePictureUrl: data?.profilePictureUrl || '',
        }));
        // setFormValues({
        //   firstName: data?.firstName || '',
        //   lastName: data?.lastName || '',
        //   email: data?.email || '',
        //   username: data?.username || '',
        //   organization: data?.organizationName || '',
        //   category: data?.category || 'Software',
        //   description: data?.description || '',
        //   profilePictureUrl: data?.profilePictureUrl || '',
        // });
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, [u_id, userInfo]);

  console.log('UserPersonalInfo userInfo: ', userInfo, formValues)


  const handleInputChange = (fieldName, value) => {
    setFormValues({ ...formValues, [fieldName]: value });
  };
  const onUpdate_SaveClick = () => {
    localStorage.setItem("userPnl_Info", {})
    // Implement the logic to send a request to update the user information
    // Use the formValues state to get the updated user data
    const updatedUser = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      username: formValues.username,
      organization: formValues.organization,
      category: formValues.category,
      description: formValues.description,
    };

    fetch(`https://gatewaysvc-dev.azurewebsites.net/api/users/${u_id}`, {
      method: 'PUT', // Assuming your API supports updating via PUT
      headers:{headers},
      body: JSON.stringify(updatedUser),
    })
      .then((response) => response.json())
      .then((updatedUserData) => {
        console.log('User information updated successfully:', updatedUserData);
        // Optionally update the state or perform any other actions
      })
      .catch((error) => console.error('Error updating user data:', error));
  };


  return (
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
                    <input placeholder="Enter First Name" value={formValues?.firstName} onChange={(e) => handleInputChange('firstName', e.target.value)} className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                    <input placeholder="Enter Last name" value={formValues?.lastName} onChange={(e) => handleInputChange('lastName', e.target.value)} className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                    <input placeholder="Enter email" value={formValues?.email} onChange={(e) => handleInputChange('email', e.target.value)} className="self-stretch rounded-radius-md bg-colors-background-bg-primary-hover shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-quarterary-500 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                    <input placeholder="Enter Username" value={formValues?.username} onChange={(e) => handleInputChange('username', e.target.value)} className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
                    <input placeholder="Enter Organisation" value={formValues?.organization} onChange={(e) => handleInputChange('organisation', e.target.value)} className="self-stretch rounded-radius-md bg-colors-background-bg-primary shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-center justify-start py-2.5 px-3.5 gap-[0px_8px] text-base text-colors-text-text-primary-900 border-[1px] border-solid border-component-colors-components-buttons-secondary-button-secondary-border" />
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
              <div onClick={() => onUpdate_SaveClick()} className="cursor-pointer relative leading-[20px] font-semibold">
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
        {/* <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-colors-border-border-secondary" /> */}
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
  )
}

export default AccountComponent