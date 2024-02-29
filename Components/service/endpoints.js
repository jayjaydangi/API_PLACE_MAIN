const hasWindow = typeof window !== 'undefined'; // Corrected condition to check if window is defined
let userInfo = null;
let u_id = "";
console.log('u_id',u_id);

if (hasWindow && localStorage.getItem("userInfo")) {
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  u_id = userInfo.uid;
}
console.log('userInfo',userInfo);

const headers = {
  'Authorization': userInfo ? `Bearer ${userInfo?.stsTokenManager?.accessToken}` : '', 
  'Content-Type': 'application/json'
  // Add any other headers if needed
};

const endpoints = {
  // User
  HOME_API: 'https://gatewaysvc-dev.azurewebsites.net/api/projects',
  PROFILE_API: `https://gatewaysvc-dev.azurewebsites.net/api/users/${u_id}`
};

const API_BOOK = {
  HOME_API: {
    url: endpoints.HOME_API,
    method: 'GET',
  },
  PROFILE_API: {
    url: endpoints.PROFILE_API,
    method: 'GET', 
    headers: headers 
  }
};

export default API_BOOK;
