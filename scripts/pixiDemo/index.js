import 'normalize.css'
import './index.less'

import * as PIXI from 'pixi.js'
import app from '../../../components/pixi-core/index'
console.log(app)
// 初始化应用
document.getElementById('root').appendChild(app.view)

const imgURL = ''
app.loader.add(imgURL).load(setup)

function setup() {

}
