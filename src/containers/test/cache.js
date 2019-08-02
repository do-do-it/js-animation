const id = 1
class Cache {
  constructor() {
    this.id = id
  }
  set(key, value) {
    console.log(key, value)
  }
}

export default Cache