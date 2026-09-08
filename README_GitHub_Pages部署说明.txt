AI智营宝 GitHub Pages 直接部署说明

一、你要上传的内容
把本文件夹中的全部文件上传到 GitHub 仓库根目录：
- index.html
- manifest.webmanifest
- sw.js
- icons/ 文件夹
- .nojekyll

二、GitHub Pages 开启方法
1. 新建一个 GitHub 仓库，例如：AIYingBao
2. 把本文件夹中所有文件上传到仓库根目录
3. 进入仓库 Settings → Pages
4. 在 Build and deployment 中选择：
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. 保存
6. 等待 1–5 分钟，GitHub 会生成网址，例如：
   https://你的用户名.github.io/AIYingBao/

三、手机安装方法（iPhone）
1. 用 Safari 打开 GitHub Pages 网址
2. 点击“分享”按钮
3. 选择“添加到主屏幕”
4. 桌面会生成 AI智营宝 图标

四、注意事项
1. 本项目当前使用 TensorFlow.js + MobileNet 在线加载模型，因此首次打开需要联网
2. GitHub Pages 默认是 HTTPS，适合 PWA 和手机安装
3. 如果更新页面代码，重新上传覆盖原文件即可
