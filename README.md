# WebSimpleToast

[English](readme/README-English.md)

WebSimpleToast是一个用于web中的轻量吐司框库。\
使用简单，可扩展样式。
> *只需**5分钟**即可完成部署*

![image](readme/img/image-1.png)

## 引入

可以使用以下几种方法引入该库：

- 从jsDelivr中引入

  ``` html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hgnim/WebSimpleToast@1.0.0/dist/css/toast.min.css" type="text/css">
  <script src="https://cdn.jsdelivr.net/gh/hgnim/WebSimpleToast@1.0.0/dist/js/toast.min.js" type="text/javascript"></script>
  ```

  - jsDelivr在大陆地区的CDN服务被污染，可使用替代域名(fastly.jsdelivr.net):

    ``` html
    <link rel="stylesheet" href="https://fastly.jsdelivr.net/gh/hgnim/WebSimpleToast@1.0.0/dist/css/toast.min.css" type="text/css">
    <script src="https://fastly.jsdelivr.net/gh/hgnim/WebSimpleToast@1.0.0/dist/js/toast.min.js" type="text/javascript"></script>
    ```

- 克隆此仓库

## 使用

### 函数定义

``` javascript
async function showToast(message,duration = 3000,toast_class = "",toastContent_class = "",parentId = null)
```

- `message`: 要在吐司框内显示的文本内容
- `duration`: 吐司框持续显示的时间
- `toast_class`: 吐司框需要额外添加的css类
- `toastContent_class`: 吐司框内容需要额外添加的css类
- `parentId`: 需要将吐司框添加至的父容器ID
  - 如果值为`null`(默认)，则添加至`<body>`

### 示例

``` javascript
//弹出一个内容为"hello"，持续时间为5秒，class包含"test_style test2_style"，父容器为"test_div"的吐司框。
showToast("hello", 5000, "test_style test2_style", undefined, "test_div");
```

## 演示

[演示文件](https://github.com/Hgnim/WebSimpleToast/tree/gh-pages/demo)\
[演示页面](https://hgnim.github.io/WebSimpleToast/demo/)
