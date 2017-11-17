// 统一工具函数
import cryptoMd5 from 'crypto-js/md5'
export default {
  /**
   * POST & PUT请求签名采用md5(body + signKey)
   * @param  [params]   [传参]
   */
  encryptPost (params) { 
    if (typeof params === 'object') {
        return cryptoMd5(JSON.stringify(params) + 'sinafenqi').toString();
    } else {
        return cryptoMd5('sinafenqi').toString();
    }
  }
}
