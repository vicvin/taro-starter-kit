import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import dva from './utils/dva'
import action from './utils/action'
import models from './model'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
  require('nerv-devtools')
}
const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    dispatch(action('common/error', e))
  }
})

const store = dvaApp.getStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/center/index',
      'pages/detail/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#333333",
      selectedColor: "#262626",
      backgroundColor: "#ffce09",
      borderStyle: "black",
      position: "bottom",
      list: [
        {
          pagePath: "pages/index/index",
          text:"首页",
          iconPath: "assets/images/tabbar/tab_index.png",
          selectedIconPath: "assets/images/tabbar/tab_index_selected.png",
        },
        {
          pagePath: "pages/center/index",
          text:"个人中心",
          iconPath: "assets/images/tabbar/tab_user.png",
          selectedIconPath: "assets/images/tabbar/tab_user_selected.png",
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
