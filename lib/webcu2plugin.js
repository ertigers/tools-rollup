import { QxRequest } from './request.js'
import { eleMap } from "./webcu/webcu-map.js"
import { preset } from "./webcu/webcu-preset.js"
import { ptz } from "./webcu/webcu-ptz.js"
import { videoCloud } from "./webcu/webcu-video-cloud.js"
import { videoFront } from "./webcu/webcu-video-front.js"
import { videoLocal } from "./webcu/webcu-video-local.js"
import { download } from "./webcu/webcu-download.js"
import { historyPlay } from "./webcu/webcu-history-play.js"

const base_url = "http://127.0.0.1:9585/icvs2/"; // 本地插件

const webcu2plugin = {
  // 登录
  login: (params) => {
    return QxRequest('post',`${base_url}login`, params);
  },

  // 获取设备列表
  getDeviceList: (params) => {
    return QxRequest('get',`${base_url}CAS/C_CAS_QueryPUIDSets`, params);
  },

  // 获取单个设备列表子资源
  getDeviceByPuid: (params) => {
    return QxRequest('get',`${base_url}C_CAS_QueryPUIDRes`, params);
  },

  // 获取播放ID
  getPlayVideoId: (params) => {
    return QxRequest('get',`${base_url}video/startVideo2`, params);
  },

  // 开始对讲
  startTalk: (params)=>{
    return QxRequest('get',`${base_url}audio/startTalk2`, params);
  },

  // 开始喊话
  startCall: (params)=>{
    return QxRequest('get',`${base_url}audio/startCall2`, params);
  },

  // 停止对讲、喊话、播放流
  stoptStream: (params)=>{
    return QxRequest('get',`${base_url}stopPlay2`, params);
  },

  // 伴音
  enablePlayAudio: (params)=>{
    return QxRequest('get',`${base_url}enablePlayAudio`, params);
  },

};

Object.assign( webcu2plugin, eleMap, preset, ptz, videoCloud, videoFront, 
  videoLocal, download, historyPlay)

export default webcu2plugin