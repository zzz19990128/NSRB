export default defineAppConfig({
  pages: [
    'pages/login/index',
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: false,
    color: '#000000',
    selectedColor: '#e65241',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/iu.png',
        selectedIconPath: 'images/ia.png',
        text: '首页',
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'images/pu.png',
        selectedIconPath: 'images/pa.png',
        text: '我的',
      },
    ],
  },
  subpackages: [{
    root: 'moduleA',
    name: 'moduleA',
    pages: [
      'pages/people/index'
    ]
  }, {
    root: "moduleB",
    name: 'moduleB',
    pages: [
      'pages/newmessage/index'
    ],
    independent: false
  }
  ]
})
