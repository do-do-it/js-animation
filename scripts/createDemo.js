const path = require('path')
const fs = require('fs')
const name = process.argv[2]
if (!name) {
  return console.log('请指定项目名称，如：yarn new demo')
}

const source = path.join(__dirname, './demo/')
const target = path.join(__dirname, `../src/containers/${name}/`)

if (fs.existsSync(target)) {
  return console.log(`项目：${name} 已存在`)
}
fs.mkdirSync(target)
const files = ['index.js', 'index.less']
files.forEach(file => {
  fs.copyFileSync(path.join(source, file), path.join(target, file))
})
let homePage = fs.readFileSync(path.join(source, 'index.html')).toString()
homePage = homePage.replace('{{title}}', name)
fs.writeFileSync(path.join(target, 'index.html'), homePage)