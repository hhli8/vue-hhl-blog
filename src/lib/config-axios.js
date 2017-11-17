// ip配置
export const domainConfig = {
  'localhost:8082': {
    url: 'http://10.40.20.162:5558'
  }
}
export const configAxios = {
  init (_axios) {
    _axios.defaults.baseURL = `${domainConfig.url}`
  }
}
