import * as PIXI from 'pixi.js'
import Application from './application'

const {
  Container,
  ParticleContainer,
  Sprite,
  Spritesheet,
  TilingSprite,
  Texture,
  Graphics,
  BaseTexture,
  SimpleRope,
  utils
} = PIXI

const monitor = new utils.EventEmitter()

const MG = {
  Application,
  Container,
  ParticleContainer,
  TilingSprite,
  Graphics,
  SimpleRope,
  
  sprite(name) {
    return Sprite.from(name)
  },

  texture(img) {
    return Texture.from(img)
  },

  baseTexture(img) {
    return BaseTexture.from(img)
  },

  spriteLoader(img, json) {
    return {
      load: next => new Spritesheet(BaseTexture.from(img), json).parse(next)
    }
  }
}

window.MG = MG
export default MG
export {
  monitor
}