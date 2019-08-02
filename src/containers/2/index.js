import 'normalize.css'
import './index.less'

import '../../libs/rem'
import $ from '../../libs/dom'
import { tween } from '../../libs/animation/amt'

// tween({
//   from: 0,
//   to: 100,
//   duration: 1000
// }).start(v => {
//   if (v <= 50) {
//     $('.circle_right').css('transform','rotate('+(v*3.6)+'deg)')
//   } else {
//     $('.circle_right').css({
//       'transform':`rotate(0deg)`,
//       "background":"red"
//     })
//     $('.circle_left').css('transform','rotate('+((v-50)*3.6)+'deg)')
//   }
// })