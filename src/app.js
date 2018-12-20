import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider, connect } from '@tarojs/redux'

import dva from './utils/dva'
import models from './models'

import Index from './pages/index'


import './app.less'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();

@connect(({common}) => ({
  ...common
}))
class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/about/index',
      'pages/mine/index'
    ],
    subPackages: [
      {
        root: 'subpackage',
        pages: [
          'pages/pic'
        ]
      }
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list: [{
        pagePath: "pages/index/index",
      }, {
        pagePath: "pages/about/index",
      },{
        pagePath: "pages/mine/index",
      }],
      backgroundColor: '#fff'
    }
  }


  componentDidMount () {
    Taro.getUserInfo().then(({ userInfo }) => {
      this.props.dispatch({
        type: 'common/setUserInfo',
        payload: userInfo
      })
    })
    /*隐藏自带tabbar*/
    Taro.hideTabBar();

  }

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
