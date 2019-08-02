import 'normalize.css'
import './index.less'

const $btnA = document.querySelector('.btn-a')
const $btnB = document.querySelector('.btn-b')
$btnB.rotate = function() {
  console.log(this, '我开始旋转了')
}
const from = 0
const to = 100
const duration = 1000

const v = (to - from) / duration
const p = 16.7

let current = from
let timerId = null

timerId = setInterval(() => {
  current += v * p
  $btnA.style.left = current + 'px'
  if (current >= to) {
    clearInterval(timerId)
    $btnB.rotate()
  }
}, p)

let last = null
function run(timestamp) {
  last = last || timestamp
  const progress = Math.min((timestamp - last) / duration, 1)
  $btnB.style.left = from +  progress * (to - from) + 'px'
  if (progress < 1) {
    requestAnimationFrame(run)
  }
}

requestAnimationFrame(run)