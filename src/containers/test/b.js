import Cache from './cache'
const cache = new Cache()

const ajax = () => {
  cache.set('name', 'zm')
}

import Cache from './cache'
let cache = new Cache()

cache.set('age', 18)