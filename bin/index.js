#! /usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')
var figlet = require('figlet')
console.log(chalk.green('Hello World! welcome to use quick_tem_cli!!'))
program
  .version(`Version is ${require('../package.json').version}`)
  //   .usage('<command> [options]')
  .command('create <project-name>')
  .description('使用模板,创建一个项目')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .option('-p, --port <n>', '端口号', '3000')
  .option('-type, --projectType <n>', '项目模板')
  .action(function (name, cmd) {
    console.log(cmd, 'cmd')
    // // 文本样式
    // console.log('project name is ' + chalk.bold(name))

    // // 颜色
    // console.log('project name is ' + chalk.cyan(name))
    // console.log('project name is ' + chalk.green(name))

    // // 背景色
    // console.log('project name is ' + chalk.bgRed(name))

    // // 使用RGB颜色输出
    // console.log('project name is ' + chalk.rgb(4, 156, 219).underline(name))

    // 执行创建项目任务
    // require('./question')(cmd)
    require('./create')(name, cmd)
  })

program
  .command('test')
  .description('test command')
  .option('-type, --projectType <n>', '项目模板', 'react')
  .action(function (name, cmd) {
    console.log(name, 'cmd', cmd)
  })

program.on('--help', function () {
  console.log('')

  // 使用 figlet 绘制 Logo
  console.log(
    '\r\n' +
      figlet.textSync('quick_cli', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default',
        width: 100,
        whitespaceBreak: false,
      })
  )
  console.log('use Examples:')
  console.log('  $ quick_tem_cli create demo --help')
  console.log('  $ custom-help -h')
})

program.parse(process.argv)
