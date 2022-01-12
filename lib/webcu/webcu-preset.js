import { QxRequest } from '../request.js'
import { base_url } from '../config'

const preset = {
  /**
  * 
  * @param {*预置位} params 
  * 
  */
  // 获取预置位列表
  async getPresetPosList(query) {
    let result = {
      code: -1,
      rows:[],
    }
    let idx = query.idx || '0'
    let puid = query.puid || ''
    let token = query.token || ''
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <M Type="ComReq">
      <C Type="G" Prio="1" EPID="system" Lang="zh_CN">
        <Res Type="PTZ" Idx="${idx}" OptID="F_PTZ_PresetPositionSets" Stream="0"><Param></Param></Res>
      </C>
    </M>`
    let url = `${base_url}RawRequest?dstType=201&dstID=${puid}&token=${token}`
    let params= { xml }
    let data = await QxRequest('post', url , params);
    try {
      result.rows = data.M.C.Res.Param.Preset
      result.code = data.M.C._SPError
    }catch(error) {
      result.msg = "fail"
    }
    return result
  },

  // 设置预置位
  setPresetPos: (params) => {
    return QxRequest('post',`${base_url}PTZ/C_PTZ_SetPresetPos`, params);
  },

  // 前往预置位
  moveToPresetPos: (params) => {
    return QxRequest('post',`${base_url}PTZ/C_PTZ_MoveToPresetPos`, params);
  },

  // 前往原始预置位
  gotoOriginalPresetPos: (params) => {
    return QxRequest('post',`${base_url}PTZ/C_PTZ_GotoOriginalPresetPos`, params);
  },
 
}

export { preset }