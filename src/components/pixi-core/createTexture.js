import { utils, Texture, Rectangle } from 'pixi.js'

export default function createTexture(img, framesWidth, framesHeight) {
  let base = utils.TextureCache[img]
  const { width, height } = base.baseTexture
  const row = height / framesHeight
  const col = width / framesWidth
  const textures = []
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      let texture = new Texture(base)
      texture.frame = new Rectangle(j * framesWidth, i * framesHeight, framesWidth, framesHeight)
      textures.push(texture)
    }
  }
  return textures
}