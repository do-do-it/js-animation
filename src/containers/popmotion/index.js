import 'normalize.css'
import './index.less'

import '../../libs/rem'
import { timeline, spring, decay, keyframes, physics } from 'popmotion'

const target = document.querySelector('#root')
// timeline([
//   { track: 'x', from: 0, to: 300, duration: 1000 },
//   [
//     { track: 'x', to: 0 },
//     '500',
//     { track: 'y', from: 0, to: 300 }
//   ]
// ]).start(v => {
//   const { x, y } = v
//   target.style.left = `${x}px`
//   target.style.top = `${y}px`
// })

// spring({
//   from: 0,
//   to: 300,
//   stiffness: 2000,
//   damping: 20
// }).start(v => {
//   target.style.top = `${v}px`
// })
// keyframes({ values: [0, 1, 3] })
//   .start(v => console.log(v))

physics({ velocity: 300, from: 0, friction: 0.8 })
  .start(v => {
    console.log(v)
    target.style.top = `${v}px`
  })

