import axios from 'axios'
// import { clearLocalStorageExceptclientIP } from '../utils/common-methods'
// import { errorToast } from '../utils/toasts'
// NEXT_APP_HOST_API_URL= "https://gatewaysvc-dev.azurewebsites.net"
const env = process.env.NEXT_APP_HOST_API_URL
console.log('env',process.env.NEXT_APP_HOST_API_URL);
axios.defaults.baseURL = env
console.log('env',env);

axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: '',
  },
})

/*
  NOTE: intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated
*/

axios.interceptors.response.use(
  console.log(axios.interceptors.response),
  (res) => res,

  (err) => {
    if (err?.response?.status === 401) {
      if (
        window.location.pathname !== '/login'
        // !window.location.pathname.startsWith('/ra-action/')
      ) {
        setTimeout(() => {
            alert({ message: 'Session Expired!', duration: 1500 })
            setTimeout(() => {
              alert({ message: 'Redirecting to login page' })
            }, 1500);
        }, 1000)
        setTimeout(() => {
          window.location = '/login'
          // clearLocalStorageExceptclientIP()
        }, 3000)
      }
    }
    return Promise.reject(err)
  }
)

export default axios
