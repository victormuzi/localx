#!/usr/bin/env node

var fs = require('fs')

var dirName = process.argv[2]

fs.mkdirSync("./" + dirName)
process.chdir("./" + dirName)
fs.mkdirSync('css')
fs.mkdirSync('js')

fs.writeFileSync("./index.html","<!DOCTYPE>")
fs.writeFileSync("./css/style.css","h1{color: red;}")
fs.writeFileSync("./js/main.js","var")

process.exit(0)