import { QxRequest } from '../request.js'
import { base_url } from '../config'

const download = {
  /**
  * 
  * @param {*下载} params 
  * 
  */
  // 下载云文件
  downloadCloudFile: (params) => {
    return QxRequest('get',`${base_url}downloadCloudFile2`, params);
  },
  
  // 下载前端文件
  downloadDeviceFile: (params) => {
    return QxRequest('get',`${base_url}downloadDeviceFile2`, params);
  },
  
  // 暂停下载
  setPuaseDownload: (params) => {
    return QxRequest('get',`${base_url}puaseDownload2`, params);
  },

  // 恢复下载
  setRestoreDownload: (params) => {
    return QxRequest('get',`${base_url}restoreDownload2`, params);
  },

  // 停止下载
  setStopDownload: (params) => {
    return QxRequest('get',`${base_url}stopDownload2`, params);
  },

}

export { download }