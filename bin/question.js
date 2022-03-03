/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 16:15:54
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-02 12:00:03
 */

// 下载模板问题流程

const chooseTemplateQue = [
  {
    type: 'list',
    name: 'projectType',
    message: '请选择项目模板',
    default: 'react',
    choices: [
      {
        name: 'react',
        value: 'react',
      },
      {
        name: 'vue',
        value: 'vue',
      },
    ],
  },
]

const overWirteQue = [
  {
    type: 'input',
    name: 'overWirte',
    message: '项目已存在，请输入y/n',
    default: 'y',
  },
]

module.exports = {
  chooseTemplateQue,
  overWirteQue,
}
