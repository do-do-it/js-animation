import Cache from './cache'
const cache = new Cache()

const ajax = () => {
  cache.set('name', 'zm')
}

export {
  ajax
}