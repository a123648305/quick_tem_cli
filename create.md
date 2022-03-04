<!--
 * @Description:
 * @Author: wujian
 * @Date: 2022-03-01 14:44:31
 * @LastEditors: wujian
 * @LastEditTime: 2022-03-02 15:36:08
-->

### 创建自己的一个脚手架 参考 https://juejin.cn/post/6966119324478079007 https://juejin.cn/post/6932610749906812935

#### 1.创建项目

        yarn init or npm init

#### 2.改写 package.json

        添加 bin  "bin":"./bin/index"

#### 3.链接包到全局(完成后 /usr/local/lib/node_modules 查看，发现我们多了一个(package.json 下的 name)链接文件夹)

       npm link   #// 取消链接 npm unlink

#### 4.首先安装包 commander 同时在 bin 文件中加入一些代码 参考链接https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md

       npm install commander --save

#! /usr/bin/env node

// console.log(1)
const program = require('commander')

program
.version(`Version is ${require('../package.json').version}`)
.description('从 0 开始 手写脚手架')
.usage('<command> [options]')

program
.parse(process.argv)

#### 5.常用模块

-- commander ：参数解析 --help 其实就借助了他~ 解析用户输入的命令
-- inquirer ：交互式命令行工具，有他就可以实现命令行的选择功能(问答模块)
-- download-git-repo ：拉取 GitHub 上的文件
-- chalk ：帮我们在控制台中画出各种各样的颜色
-- ora：小图标 （loading、succeed、warn 等）
-- metalsmith ：读取所有文件，实现模板渲染
-- consolidate ：统一模板引擎
-- figlet :给脚手架整个 Logo

#### 6.使用方法

    npm install -g quick_tem_cli #// 安装脚手架
    quick_tem_cli create my_project #// 创建项目

#### node 使用 es 模块 方法

        1.后缀名改为.mjs   (.cjs 为commonjs)
        2.添加package.json  "type":"module"  所以的.js 文件将使用es 模块
        3.添加 package.json  exports: './lib/index.js'  定义哪些文件使用es 模块
