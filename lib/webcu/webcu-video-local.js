import { QxRequest } from '../request.js'

const base_url = "http://127.0.0.1:9585/icvs2/"; // 本地插件


const videoLocal = {
  /**
  * 
  * @param {*本地抓拍，连拍，录像} params 
  * 
  */
  // 本地抓拍,连拍
  startLocalSnap: (params) => {
    let query ={
      playID: params.playID,
      localPath: params.localPath,
      count: params.count || 1,
      interval: params.interval || 6,
      token: params.token,
    }
    return QxRequest('get',`${base_url}localSnapshot`, query);
  },
  // 停止本地连拍
  stopLocalSnapShot:(params) => {
    return QxRequest('get',`${base_url}cancelLocalSnapshot`, params);
  },
  // 本地录像
  startLocalVideo:(params) => {
    let query ={
      playID: params.playID,
      localPath: params.localPath,
      maxFileTime: params.maxFileTime || 300,
      token: params.token,
    }
    return QxRequest('get',`${base_url}localRecord`, query);
  },
  // 停止本地录像
  stopLocalVideo:(params) => {
    return QxRequest('get',`${base_url}CancelLocalRecord`, params);
  },
}

export { videoLocal }