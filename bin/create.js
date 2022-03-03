/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 16:41:39
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-02 15:31:44
 */
const path = require('path')
const fs = require('fs-extra')
const inquirer = require('inquirer')
const { overWirteQue, chooseTemplateQue } = require('./question')
const { TemplateClass } = require('../lib/generatore')
const chalk = require('chalk')

module.exports = async function (projectName, option) {
  console.log(`name: ${projectName} option: ${option}`)

  const projectPath = path.resolve(process.cwd(), projectName)
  let projectType = option.projectType || 'react'
  console.log('projectPath:' + projectPath)

  if (!option.projectType) {
    const action = await inquirer.prompt(chooseTemplateQue)
    projectType = action.projectType
  }

  // 判断项目是否存在
  if (fs.existsSync(projectPath)) {
    if (option.force) {
      fs.removeSync(projectPath)
    } else {
      console.log(
        chalk.blue(
          `项目已存在，请检查是否使用了强制创建命令，如果使用了请使用 -f 强制创建，如果不使用请使用其他命令`
        )
      )

      const { overWirte } = await inquirer.prompt(overWirteQue)
      if (overWirte === 'y') {
        console.log(chalk.yellow('已覆盖原项目'))
        return fs.removeSync(projectPath)
      }
      return
    }
  }

  // 创建项目
  //   fs.copySync(path.resolve(__dirname, '../template', projectType), projectPath)

  // 替换项目名称
  //   fs.readdirSync(projectPath).forEach((file) => {
  //     const filePath = path.resolve(projectPath, file)
  //     const content = fs.readFileSync(filePath, 'utf-8')
  //     const result = content.replace(/<%= projectName %>/g, projectName)
  //     fs.writeFileSync(filePath, result, 'utf-8')
  //   })

  // 创建项目
  const instance = new TemplateClass(projectName, projectType, projectPath)
  // instance.getTemplateList()
  instance.create()
}
