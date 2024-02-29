import axios from './axios'
import { ToggleLoader } from './interceptor'

let apicount = 0 ;


const API = async ({
  url,
  method,
  data, // API Body
  params, // API Query params
  headers,
  responseType,
  
}) => {
  //REQUEST JSON

  let axiosRequestObject = {
    method,
    url,
    data,
    headers: {
      ...headers,
      clientIp: localStorage.clientIP,
      Authorization:
        localStorage.token && localStorage.user
          ? `Bearer ${localStorage.token}`
          : '',
    },
    params,
    responseType,

  }

  if (manageLoader) {
    apicount += 1;
  }

  REQUEST
  if (apicount > 0 && manageLoader) {
    alert({ setLoading: true });
  }
  let request = await axios
    .request(axiosRequestObject)
    .then(handleSuccessRequest)
    .catch(handleErrorRequest)
    .finally(() => {
      if (manageLoader) {
        apicount -= 1;
      }
      if (apicount === 0 && manageLoader) {
        alert({ setLoading: false });
      }
    })
  
  return request
}

const handleSuccessRequest = (response) => {
  return { status: response.status, data: response.data }
}

const handleErrorRequest = (err) => {
  if (err?.response?.config?.responseType === 'arraybuffer') {
    try {
      if ('TextDecoder' in window) {
        // Decode as UTF-8
        const dataView = new DataView(err.response.data)
        const decoder = new TextDecoder('utf8')
        err.response.data = JSON.parse(decoder.decode(dataView))
      } else {
        // Fallback decode as ASCII
        const decodedString = String.fromCharCode.apply(
          null,
          new Uint8Array(err.response.data)
        )
        err.response.data = JSON.parse(decodedString)
      }
    } catch (error) {
      console.error('Error: conversion error occured')
    }
  }

  if (!err.response) {
    return Promise.reject()
  } else return err.response
}

export default API
