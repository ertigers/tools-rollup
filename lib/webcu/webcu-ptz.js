import { QxRequest } from '../request.js'
import { base_url } from '../config'

const ptz = {
  /**
  * 
  * @param {*云台控制} params 
  * 
  */
  // 云台控制(13个指令)
  ptzControl: (params) => {
    let puid = params.puid || "";
    let idx = params.idx || 0;
    let control =params.control || "";
    let speed = params.speed || '';
    let xml = "";
    let token =  params.token
    if (!puid || !control) {
      return
    }

    // 云台上下左右
    if (control === "left" || control === "up" || control === "right" || control === "down" || control === "stop") {
      let params = {
        puid,
        motion: control,
        idx,
        token,
        speed
      }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_Turn`, params);
    }
    //放大图像
    if (control === "zoomin") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_ZoomInPicture`, params);
    }
    // 缩小图像
    if (control === "zoomout") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_ZoomOutPicture`, params);
    }
    // 停止缩放
    if (control === "stopzoom") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_StopPictureZoom`, params);
    }
    // 推远焦点
    if (control === "focusfar") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_MakeFocusFar`, params);
    }
    // 拉近焦点
    if (control === "focusnear") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_MakeFocusNear`, params);
    }
    // 停止调焦
    if (control === "stopfocus") {
      let params = { speed,puid,idx,token }
      return QxRequest('post',`${base_url}PTZ/C_PTZ_StopFocusMove`, params);
    }
    if (control === "augment") {
      // 增大光圈
      xml = '<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"> <Res Type="IV" Idx="'+idx+'" OptID="C_PTZ_AugmentAperture" Stream="0"><Param></Param></Res></C></M>';
      let url = `${base_url}RawRequest?dstType=201&dstID=${puid}&token=${token}`
      let params= { xml }
      return QxRequest('post',url, params);
    }
    if (control === "minish") { 
      // 缩小光圈
      xml = '<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"><Res Type="IV" Idx="'+idx+'" OptID="C_PTZ_MinishAperture" Stream="0"><Param></Param></Res></C></M>';
      let url = `${base_url}RawRequest?dstType=201&dstID=${puid}&token=${token}`
      let params= { xml }
      return QxRequest('post', url , params);
    } 
    if (control === "stopaperture") { 
      // 停止光圈
      xml = '<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"><Res Type="IV" Idx="'+idx+'" OptID="C_PTZ_StopApertureZoom" Stream="0"><Param></Param></Res></C></M>';
      let url = `${base_url}RawRequest?dstType=201&dstID=${puid}&token=${token}`
      let params= { xml }
      return QxRequest('post', url , params);
    }
  },
 
}

export { ptz }