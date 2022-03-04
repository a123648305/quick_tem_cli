/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 17:22:24
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-03 16:23:32
 */
const { getTemplateList, fetchTemplate } = require('./http')
const ora = require('ora')
const download = require('download-git-repo')
const chalk = require('chalk')

// // 添加加载动画
async function wrapLoading(fn, message, ...args) {
  // 使用 ora 初始化，传入提示信息 message
  const spinner = ora(message)
  // 开始加载动画
  spinner.start()
  try {
    // 执行传入方法 fn
    const result = await fn(...args)
    // 状态为修改为成功
    spinner.succeed()
    return result
  } catch (error) {
    // 状态为修改为失败
    spinner.fail('Request failed: ' + error)
  }
}

class TemplateClass {
  constructor(projectName, projectType, targetDir) {
    // 目录名称
    this.projectName = projectName
    // 创建位置
    this.targetDir = targetDir
    // 模板类型
    this.projectType = projectType
  }

  // 下载模板
  downloadGitRepo(targetDir, url) {
    return new Promise((resolve, reject) => {
      download(url, targetDir, function (err) {
        if (err) {
          reject(err)
        } else {
          resolve('success download template at ' + targetDir)
        }
      })
    })
  }

  // 创建方法
  async create() {
    // 调用下载模板
    const message = chalk.green(
      `waiting download ${chalk.red(this.projectType)}-ts-vite template`
    )
    const url = `a123648305/testDemo#${this.projectType}-ts-vite`
    const response = await wrapLoading(
      this.downloadGitRepo, // 远程下载方法
      message, // 加载提示信息
      this.targetDir, // 创建路径
      url // 模板地址
    )
    console.log(response, 'response')
    if (!response) {
      return
    }
    // 4）模板使用提示
    console.log(`----------------------------------`)
    console.log(
      `\r\nSuccessfully created project ${chalk.cyan(this.projectName)}`
    )
    console.log(`\r\n  cd ${chalk.cyan(this.projectName)}`)
    console.log('  npm run dev\r\n')
    console.log(`----------------------------------`)
  }

  // 获取模板列表
  async getTemplateList() {
    const list = await getTemplateList()
    console.log(list, 'list')
  }
}

module.exports = { TemplateClass }
