const Bundler = require('parcel-bundler')
const app = require('express')()
const path = require('path')
const fs = require('fs')
const name = process.argv[2] || 'index'

const file = path.resolve(__dirname, `../src/containers/${name}/index.html`)
const outDir = path.resolve(__dirname, `../dist/${name}`)
const options = {
  outDir: outDir,
  watch: process.env.NODE_ENV === 'development'
}

switch(process.env.NODE_ENV) {
  case 'production':
    delDir(outDir)
    build()
    break
  case 'development':
    delDir(outDir)
    start()
    break
  default:
    break
}
async function start() {
  const bundler = new Bundler(file, options)
  app.use(bundler.middleware())
  app.listen(8080, () => {
    console.log(`current page is ${name}`)
    console.log(`http://${getIPAdress()}:8080`)
  })
}

function build() {
  const bundler = new Bundler(file, options)
  bundler.on('bundled', bundler => {
    // console.log(bundler)
  })
  bundler.bundle()
}

function delDir(path){
  let files = [];
  if(fs.existsSync(path)){
      files = fs.readdirSync(path);
      files.forEach((file, index) => {
          let curPath = path + "/" + file;
          if(fs.statSync(curPath).isDirectory()){
              delDir(curPath); //递归删除文件夹
          } else {
              fs.unlinkSync(curPath); //删除文件
          }
      });
      fs.rmdirSync(path);
  }
}

function getIPAdress(){
  var interfaces = require('os').networkInterfaces();
  for(var devName in interfaces){
      var iface = interfaces[devName];
      for(var i=0;i<iface.length;i++){
          var alias = iface[i];
          if(alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal){
              return alias.address;
          }
      }
  }
}