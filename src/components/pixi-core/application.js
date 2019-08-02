import * as PIXI from 'pixi.js'
import createState from './state'

const devicePixelRatio = window.devicePixelRatio > 2 ? 2: window.devicePixelRatio

export default class App extends PIXI.Application {
  Container = PIXI.Container

  constructor(element = '#root', options = {
    width: window.innerWidth * devicePixelRatio,
    height: window.innerHeight * devicePixelRatio,
  }) {
    super(options)
    this.devicePixelRatio = devicePixelRatio
    this.state = createState(this)
    document.querySelector(element).appendChild(this.view)
  }
}