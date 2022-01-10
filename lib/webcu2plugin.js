import { eleMap } from "./webcu/webcu-map.js"
import { preset } from "./webcu/webcu-preset.js"
import { ptz } from "./webcu/webcu-ptz.js"
import { videoCloud } from "./webcu/webcu-video-cloud.js"
import { videoFront } from "./webcu/webcu-video-front.js"
import { videoLocal } from "./webcu/webcu-video-local.js"
import { download } from "./webcu/webcu-download.js"
import { historyPlay } from "./webcu/webcu-history-play.js"
import { common } from "./webcu/webcu-common.js"

const webcu2plugin =  Object.assign( common, eleMap, preset, ptz, videoCloud, videoFront, 
  videoLocal, download, historyPlay)

export default webcu2plugin
 