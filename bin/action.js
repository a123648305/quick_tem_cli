/*
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 16:01:33
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-01 17:02:34
 */
const action = {
  create: {
    alias: 'create', //别名
    description: '创建一个项目', // 描述
    examples: [
      //用法
      'quick_tem_cli create <project-name> -t <project-type>',
    ],
  },
  config: {
    //配置文件
    alias: 'conf', //别名
    description: 'config project variable', // 描述
    examples: [
      //用法
      'quick_tem_cli config set <k> <v>',
      'quick_tem_cli config get <k>',
    ],
  },
  '*': {
    alias: '', //别名
    description: 'command not found', // 描述
    examples: [], //用法
  },
}

module.exports = { action }
