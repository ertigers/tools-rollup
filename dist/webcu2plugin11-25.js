!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Gulu=t()}(this,(function(){"use strict";const e=(e,t,o)=>new Promise(((s,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?s(JSON.parse(r.responseText)):n(r.status))},"get"!==e&&"GET"!==e||("object"==typeof o&&(o=Object.keys(o).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(o[e])})).join("&")),t=o?t+"?"+o:t,r.open(e,t,!0),r.send()),"post"!==e&&"POST"!==e||(r.open(e,t,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.setRequestHeader("Accept","*/*"),r.send(JSON.stringify(o)))})),t=(e,t,o)=>new Promise(((s,n)=>{const r=new XMLHttpRequest;r.onreadystatechange=function(){4===r.readyState&&(200===r.status?s(r.responseText):n(r.status))},"post"!==e&&"POST"!==e||(r.open(e,t,!0),r.setRequestHeader("Content-type","application/json; charset=utf-8"),r.setRequestHeader("Accept","*/*"),r.send(JSON.stringify(o)))})),o="http://127.0.0.1:9585/icvs2/";return{login:t=>e("post",`${o}login`,t),getDeviceList:t=>e("get",`${o}CAS/C_CAS_QueryPUIDSets`,t),getDeviceByPuid:t=>e("get",`${o}C_CAS_QueryPUIDRes`,t),getPlayVideoId:t=>e("get",`${o}video/startVideo2`,t),ptzControl:s=>{let n=s.puid||"",r=s.idx||0,a=s.control||"",i="",p=s.token;if(n&&a){if("left"===a||"up"===a||"right"===a||"down"===a||"stop"===a){return e("post",`${o}PTZ/C_PTZ_Turn`,{puid:n,motion:a,idx:r,token:p})}if("zoomin"===a){return e("post",`${o}PTZ/C_PTZ_ZoomInPicture`,{puid:n,idx:r,token:p})}if("zoomout"===a){return e("post",`${o}PTZ/C_PTZ_ZoomOutPicture`,{puid:n,idx:r,token:p})}if("stopzoom"===a){return e("post",`${o}PTZ/C_PTZ_StopPictureZoom`,{puid:n,idx:r,token:p})}if("focusfar"===a){return e("post",`${o}PTZ/C_PTZ_MakeFocusFar`,{puid:n,idx:r,token:p})}if("focusnear"===a){return e("post",`${o}PTZ/C_PTZ_MakeFocusNear`,{puid:n,idx:r,token:p})}if("stopfocus"===a){return e("post",`${o}PTZ/C_PTZ_StopFocusMove`,{puid:n,idx:r,token:p})}if("augment"===a){return i='<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"> <Res Type="IV" Idx="'+r+'" OptID="C_PTZ_AugmentAperture" Stream="0"><Param></Param></Res></C></M>',t("post",`${o}RawRequest?dstType=201&dstID='${n}'&token=${p}`,{xml:i})}if("minish"===a){return i='<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"><Res Type="IV" Idx="'+r+'" OptID="C_PTZ_MinishAperture" Stream="0"><Param></Param></Res></C></M>',t("post",`${o}RawRequest?dstType=201&dstID='${n}'&token=${p}`,{xml:i})}if("stopaperture"===a){return i='<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="G" Prio="1" EPID="system" Lang="zh_CN"><Res Type="IV" Idx="'+r+'" OptID="C_PTZ_StopApertureZoom" Stream="0"><Param></Param></Res></C></M>',t("post",`${o}RawRequest?dstType=201&dstID='${n}'&token=${p}`,{xml:i})}}},setPresetPos:t=>e("post",`${o}PTZ/C_PTZ_SetPresetPos`,t),moveToPresetPos:t=>e("post",`${o}PTZ/C_PTZ_MoveToPresetPos`,t),gotoOriginalPresetPos:t=>e("post",`${o}PTZ/C_PTZ_GotoOriginalPresetPos`,t),startCloudSnapshot:t=>e("post",`${o}CSS/C_CSS_StartManualSnapshot`,t),startCloudStorage:t=>e("post",`${o}CSS/C_CSS_StartManualStorage`,t),stopCloudStorage:t=>e("post",`${o}CSS/C_CSS_StopManualStorage`,t),startTalk:t=>e("get",`${o}audio/startTalk2`,t),startCall:t=>e("get",`${o}audio/startCall2`,t),stoptStream:t=>e("get",`${o}stopPlay2`,t),enablePlayAudio:t=>e("get",`${o}enablePlayAudio`,t),getCloudFile:t=>e("get",`${o}CSS/C_CSS_QueryStorageFiles`,t),getDeviceFile:t=>e("get",`${o}SG/C_SG_QueryRecordFiles`,t),downloadCloudFile:t=>e("get",`${o}downloadCloudFile2`,t),downloadDeviceFile:t=>e("get",`${o}downloadDeviceFile2`,t),setPuaseDownload:t=>e("get",`${o}puaseDownload2`,t),setRestoreDownload:t=>e("get",`${o}restoreDownload2`,t),setStopDownload:t=>e("get",`${o}stopDownload2`,t),getVodCloudFile:t=>e("get",`${o}vodCloudFile2`,t),getVodDeviceFile:t=>e("get",`${o}vodDeviceFile2`,t),setPuaseVod:t=>e("get",`${o}puaseVod2`,t),setRestoreVod:t=>e("get",`${o}restoreVod2`,t),setSpeedVod:t=>e("get",`${o}setVodSpeed2`,t),setOffsetVod:t=>e("get",`${o}setVodOffset2`,t),subscriptionGps:e=>{let s=e.token,n=e.epid||"",r=e.puid||"",a=e.idx||0;return t("POST",o+"RawRequest?dstType=33&token="+s,{xml:'<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="C" Prio="1" EPID="'+n+'"><Res Type="ST" Idx="'+a+'" OptID="C_GS_SubscribeGPSData"><Param></Param></Res></C><OSets><Res OType="201" OID="'+r+'" Type="GPS" Idx="'+a+'"></Res></OSets></M>'})},getPuidLastGps:e=>{let s=e.token,n=e.puid||[],r=e.epid||"",a="<OSets>";return a+='<Res OType="201" OID="'+n+'" Type="GPS" Idx="0"></Res>',a+="</OSets>",t("POST",o+'RawRequest?dstType=33&dstID=""&token='+s,{xml:'<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="C" Prio="1" EPID="'+r+'"><Res Type="ST" Idx="0" OptID="C_GS_QueryLastGPSData"><Param></Param></Res></C>'+a+"</M>"})},getPuidHistoryGps:e=>{let s=e.token,n=e.offset||0,r=e.count||100,a=e.begin,i=e.end,p=e.puid,d=e.epid||"",u="<OSets>";return u+='<Res OType="201" OID="'+p+'" Type="ST" Idx="0"></Res>',u+="</OSets>",t("POST",o+'RawRequest?dstType=33&dstID=""&token='+s,{xml:'<?xml version="1.0" encoding="UTF-8"?><M Type="ComReq"><C Type="C" Prio="1" EPID="'+d+'"><Res Type="ST" Idx="0" OptID="C_GS_QueryHistoryGPSData"><Param  Offset="'+n+'" Count="'+r+'" Begin="'+a+'" End="'+i+'"></Param></Res></C>'+u+"</M>"})}}}));
