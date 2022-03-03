/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 17:14:01
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-02 11:11:34
 */
const axios = require('axios')

const AxiosInstance = axios.create({
  //   baseURL: 'https://api.github.com',
  //   headers: {},
  timeout: 10000,
})

AxiosInstance.interceptors.request.use((config) => {
  return config
})

AxiosInstance.interceptors.response.use((response) => {
  return response
})

// 获取模板列表
const getTemplateList = async () => {
  const url = `https://api.github.com/orgs/zhurong-cli/repos`
  const res = await AxiosInstance.get(url)
  return res.data
}

// 下载模板
const fetchTemplate = async () => {
  const url = `https://api.github.com/orgs/zhurong-cli/repos`
  const res = await AxiosInstance.get()
  return res.data
}

module.exports = { AxiosInstance, getTemplateList, fetchTemplate }
