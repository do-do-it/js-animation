export default function State(app) {
  return {
    _current: null,
    _states: {},
    create(name, fun) {
      const scene = new app.Container()
      scene.name = name
      fun && fun.call(scene)
      this._states[name] = scene
      return scene
    },
    get() {
      const { _current, _states } = this
      return _current && _states[_current] ? _states[_current] : null
    },
    start(name) {
      const scene = this._states[name]
      this.get() && this.get().destroy()
      this._current = name
      app.stage.addChild(scene)
      scene.init && scene.init()
      scene.preload ? scene.preload(scene.create.bind(scene)) : scene.create ? scene.create() : null
      scene.update && app.ticker.add(scene.update, scene)
    }
  }
}