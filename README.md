# MuseUtils
前端业务代码工具库

> 目的：更高效率地完成前端业务代码

## 安装使用

1. 直接下载`min`目录下的[museutils.min.js](https://github.com/ryanism37/MuseUtils/blob/master/min/museutils.min.js)使用，支持UMD通用模块规范  
2. 通过NPM安装MuseUtils

### 浏览器:
``` html
  <script src="museutils.min.js"></script>
  <script>
      var isAndroid = MuseUtils.isAndroid();
  </script>
```

### NPM:
``` bash
$ npm install museutils
```

``` javascript
// 完整引入
const MuseUtils = require('MuseUtils')
const isAndroid = MuseUtils.isAndroid();

// 部分引入
const isAndroid = require('MuseUtils/lib/isAndroid');
const isAndroid = isAndroid();
```

## API文档

### 时间相关  
#### &emsp;&emsp;[compareWithMoment]&emsp;&emsp;比较两个时间点的早晚关系
#### &emsp;&emsp;[countDown]&emsp;&emsp;倒计时格式化（距某时刻的剩余时长）
#### &emsp;&emsp;[formatTime]&emsp;&emsp;格式化日期
#### &emsp;&emsp;[getTodayZeroAM]&emsp;&emsp;获取今天0点的时间戳
#### &emsp;&emsp;[isTimeBetween]&emsp;&emsp;判断是否处于两个时间点之间

### 数据处理相关  
#### &emsp;&emsp;[deepCopy]&emsp;&emsp;对象深拷贝
#### &emsp;&emsp;[mergeObject]&emsp;&emsp;合并对象（同样属性会覆盖）
#### &emsp;&emsp;[removeTheSame]&emsp;&emsp;数组去重

### 数学相关  
#### &emsp;&emsp;[getRandomNum]&emsp;&emsp;生成指定范围的随机数
#### &emsp;&emsp;[padLeft]&emsp;&emsp;小于10的数字左侧补零

### 数据类型相关  
#### &emsp;&emsp;[getType]&emsp;&emsp;获取变量的类型
#### &emsp;&emsp;[isString]&emsp;&emsp;判断是否为String类型
#### &emsp;&emsp;[isNumber]&emsp;&emsp;判断是否为Number类型
#### &emsp;&emsp;[isBoolean]&emsp;&emsp;判断是否为Boolean类型
#### &emsp;&emsp;[isArray]&emsp;&emsp;判断是否为Array类型
#### &emsp;&emsp;[isFunction]&emsp;&emsp;判断是否为Function类型
#### &emsp;&emsp;[isUndefined]&emsp;&emsp;判断是否为Undefined类型

### URL相关  
#### &emsp;&emsp;[getQueryString]&emsp;&emsp;获取URL中的参数信息

### 设备相关  
#### &emsp;&emsp;[isAndroid]&emsp;&emsp;判断是否为Android设备
#### &emsp;&emsp;[isIOS]&emsp;&emsp;判断是否为IOS设备
#### &emsp;&emsp;[isMac]&emsp;&emsp;判断是否为Mac设备
#### &emsp;&emsp;[isWindows]&emsp;&emsp;判断是否为Windows设备
#### &emsp;&emsp;[isLinux]&emsp;&emsp;判断是否为Linux设备
#### &emsp;&emsp;[isMobileBrowser]&emsp;&emsp;判断是否为移动浏览器

### 浏览器相关  
#### &emsp;&emsp;[getDeviceHeight]&emsp;&emsp;获取设备高度
#### &emsp;&emsp;[getScrollTop]&emsp;&emsp;获取滚动条距顶部距离

### 正则校验相关  
#### &emsp;&emsp;[isMailAccount]&emsp;&emsp;校验邮箱是否合法
#### &emsp;&emsp;[isMobileNumber]&emsp;&emsp;校验手机号码是否合法
#### &emsp;&emsp;[isPhoneNumber]&emsp;&emsp;校验电话号码是否合法
#### &emsp;&emsp;[isOnlyNumberAndLetter]&emsp;&emsp;校验是否纯数字和字母输入
#### &emsp;&emsp;[isPostCode]&emsp;&emsp;校验邮编是否合法
#### &emsp;&emsp;[isPureChinese]&emsp;&emsp;校验是否纯中文输入
#### &emsp;&emsp;[isPureNumber]&emsp;&emsp;校验是否纯数字输入

### 按键相关  
#### &emsp;&emsp;[getKeyCode]&emsp;&emsp;获取键位名称
    
