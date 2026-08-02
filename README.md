# 来点音效

Cyrene2008 官方示例插件，版本 1.1.1，已使用 Plugin API 1.1 生命周期事件即时同步设置。

安装后会在「插件」Dock 页面中显示由宿主原生 Fluent 组件渲染的“音效”扩展页面，可以分别为随机点名、翻牌点名和抽奖选择本地音频，设置音量和播放逻辑。

- 每次操作播放一次：多人抽取只播放一次。
- 每次结果都播放：每个逐项揭晓结果都播放一次。

支持 mp3、m4a、wav、flac、ogg。音频以插件数据形式保存在本机，单文件上限为 16 MB。

## 开发

```bash
npm install
npm run validate
npm run build
```

本插件也是官方模板的实际应用示例。新插件建议从 [CyreneNameRoller Plugin Template](https://github.com/Cyrene2008/CyreneNameRoller-Plugin-Template) 开始。
