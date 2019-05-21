/**
 *Create by sinosoft_wan   ,Create Date 2019-5-7
 */
'use strict'

import axios from 'axios'
import qs from 'qs'
import commont from '../../static/js/common.js'

axios.interceptors.request.use(config => {
  // loading
  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

function checkStatus (response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    console.log(response.data);
    return response.data
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode (res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if(res.rc!=0){
    if (res.status === -404) {
      alert(res.msg)
    }else  if (res.data && (!res.data.success)) {
      console.log("!res.data.success");
      // alert(res.data.error_msg)
    }
  }
  return res
}

export default {
  post (url,data) {
    return axios({
      method: 'post',
      url:commont.BASE_URL+url,
      data: data,//qs.stringify(data),
      timeout: 10000,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        // 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        "Content-type":"application/json; charset=UTF-8"
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    )
  },
  get (method, params) {
    return axios({
      method: 'get',
      //baseURL:commont.BASE_URL+params,
      url: commont.BASE_URL+method+"/"+params,
      // params, // get 请求时带的参数
      timeout: 10000,
      headers: {
        //'X-Requested-With': 'XMLHttpRequest',
        "Content-type":"application/json"
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}
