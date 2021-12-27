import { QxRequest } from '../request.js'

const base_url = "http://127.0.0.1:9585/icvs2/"; // 本地插件


const historyPlay = {
  /**
  * 
  * @param {*下载} params 
  * 
  */
  // 点播前端文件
  getVodDeviceFile: (params) => {
    return QxRequest('get',`${base_url}vodDeviceFile2`, params);
  },

  // 点播云文件
  getVodCloudFile: (params) => {
    return QxRequest('get',`${base_url}vodCloudFile2`, params);
  },

  // 暂停点播(云，前端)
  setPuaseVod: (params) => {
    return QxRequest('get',`${base_url}puaseVod2`, params);
  },

  // 恢复点播(云，前端)
  setRestoreVod: (params) => {
    return QxRequest('get',`${base_url}restoreVod2`, params);
  },

  // 设置点播速度(云，前端)
  setSpeedVod: (params) => {
    return QxRequest('get',`${base_url}setVodSpeed2`, params);
  },

  // 设置点播位置(云，前端)
  setOffsetVod: (params) => {
    return QxRequest('get',`${base_url}setVodOffset2`, params);
  },
}

export { historyPlay }