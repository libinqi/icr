## 安装

npm:

```bash
$ npm install icr --save
```

##IC卡阅读器模块说明
# 1、项目根目录添加device.json硬件驱动配置文件,或者在项目package.json文件中增加硬件驱动配置
# 2、安装对应的厂家设备node.js驱动模块

驱动配置如下:

```js
// d3d8
{
    icr：{
        driver：'icr-d3d8'
    }
}