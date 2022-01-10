import { QxRequest } from '../request.js'
import { base_url } from '../config'

const videoFront = {
  /**
  * 
  * @param {*前端抓拍，连拍，录像} params 
  * 
  */
  // 开始前端抓拍
  startSGSnapshot: (params) => {
    return QxRequest('get',`${base_url}SG/C_SG_StartSnapshot`, params);
  },

  // 开始前端录像
  startSGStorage: (params) => {
    params.IVIdx = params.idx || '0'
    return QxRequest('get',`${base_url}SG/VODFile.flv`, params);
  },

  // 查询前端文件（录像，抓拍，录音）
  getDeviceFile: (params) => {
    return QxRequest('get',`${base_url}SG/C_SG_QueryRecordFiles`, params);
  },


}

export { videoFront }