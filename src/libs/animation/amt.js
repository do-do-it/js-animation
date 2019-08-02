import ticker from './ticker'

function tween(options) {
  const { from = 0, to = 1, duration = 1000 } = options
  const delta = to - from
  let time = 0
  function start(update) {
    
    function run(dt) {
      time += dt
      time > duration ? time = duration : time = time
      update( time / duration * delta)
      if (time === duration) {
        ticker.remove(run)
      }
    }

    ticker.add(run)
  }

  return {
    start
  }
}

export {
  tween
}