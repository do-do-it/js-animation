const path = require('path')
const fs = require('fs')
const root = '//localhost:8080'

const pages = fs.readdirSync(path.join(__dirname, '../src/containers/'))
let str = `<div class="nav">
    <div class="nav-btn"></div>
    <div class="nav-list">`

str += `<a href="${root}/index/index.html">首页</a>`
pages.forEach(page => {
  if (page !== 'index') {
    str += `<a href="${root}/${page}/index.html">${page}</a>`
  }
})

str += `</div>
</div>`

let homePage = fs.readFileSync(path.join(__dirname, '../src/containers/index/template.html')).toString()
homePage = homePage.replace('<!-- content -->', str)
fs.writeFileSync(path.join(__dirname, '../src/containers/index/index.html'), homePage)