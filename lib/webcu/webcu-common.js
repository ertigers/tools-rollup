import { QxRequest } from "../request.js";
import { base_url, websocket_url } from "../config";
import { xml2json } from "../x2js.js";

const common = {
  // 登录
  login: async (params, callback) => {
    let reslut = {
      code: -1,
    };
    
    let res = await QxRequest("post", `${base_url}login`, params);
    if (res.msg === "OK") {
      reslut.code = 0;
      reslut.msg = res.msg;
      reslut.token = res.token;
      // 连接ws
      let url = websocket_url + "?token=" + res.token;
      let ws = new WebSocket(url);
      ws.onmessage = (evt) => {
        if (typeof evt === "object" && evt.data && callback) {
          let msg = xml2json(evt.data).M;
          // callback(msg)
          // 第一类事件(插件处理的)
          if (msg._Type === "PlayEvent") {  // 视频播放状态
            let params = {
              type: 'playEvent',
              data: {
                status: msg._Status,
                palyId: msg._PlayID,
              }
            }
            callback(params)
          }
          if(msg._Type === "DownlaodEvent") {  // 视频下载状态
            let params = {
              type: 'downlaodEvent',
              data: {
                status: msg._Status,
                downloadID: msg._DownloadID,
                progress: msg._Progress,
              }
            }
            callback(params)
          }
          // 第二类事件(ICVS平台返回的)
          let event = msg.E || null;
          if (event) {
            if (event._ID === "E_CU_Online") {  // 用户上线
              let params = {
                type: 'userOnline',
                data: {
                  UserID: event.Desc._UserID,
                  EPID: event.Desc._EPID
                }
              }
              callback(params)
            } else if (event._ID === "E_CU_Offline") {  // 用户下线
              let params = {
                type: 'userOffline',
                data: {
                  UserID: event.Desc._UserID,
                  EPID: event.Desc._EPID
                }
              }
              callback(params)
            } else if (event._ID === "E_PU_Online") {   // 设备上线
              let params = {
                type: 'deviceOnline',
                data: {
                  Name: event.Src._Name,
                  Type: event.Src._Type,
                  Idx: event.Src._Idx,
                  Desc: event.Src._Desc,
                }
              }
              callback(params)
            } else if (event._ID === "E_PU_Offline") {   // 设备下线
              let params = {
                type: 'deviceOffline',
                data: {
                  Name: event.Src._Name,
                  Type: event.Src._Type,
                  Idx: event.Src._Idx,
                  Desc: event.Src._Desc,
                }
              }
              callback(params)
            }else if (event._ID === "E_GS_GPSDataUpdate") {   // gps信息更新
              // let params = {
              //   type: 'gpsDataUpdate',
              //   data: {
              //   }
              // }
              // callback(params)
            }
             else if (event._ID === "PlayNtf") {
              console.log("playNtf");
              console.log(event);
            }
          }
        }
      };
      ws.onclose = ()=> {
        let params = {
          type: 'WsClose',
        }
        callback(params)
      };
      ws.onerror = function () {
        let params = {
          type: 'WsError',
        }
        callback(params)
      };
    }else {
      reslut = res;
    }
    return reslut;
  },

  // 获取设备列表
  getDeviceList: (params) => {
    return QxRequest("get", `${base_url}CAS/C_CAS_QueryPUIDSets`, params);
  },

  // 获取单个设备列表子资源
  getDeviceByPuid: (params) => {
    return QxRequest("get", `${base_url}C_CAS_QueryPUIDRes`, params);
  },

  // 获取播放ID
  getPlayVideoId: (params) => {
    return QxRequest("get", `${base_url}video/startVideo2`, params);
  },

  // 开始对讲
  startTalk: (params) => {
    return QxRequest("get", `${base_url}audio/startTalk2`, params);
  },

  // 开始喊话
  startCall: (params) => {
    return QxRequest("get", `${base_url}audio/startCall2`, params);
  },

  // 停止对讲、喊话、播放流
  stoptStream: (params) => {
    return QxRequest("get", `${base_url}stopPlay2`, params);
  },

  // 伴音
  enablePlayAudio: (params) => {
    return QxRequest("get", `${base_url}enablePlayAudio`, params);
  },
};

export { common };
