import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'

class Tabbar extends Component {
  render () {
    return (
      <View className="tabbar">
        这是伪底部
      </View>
    )
  }
}

export default Tabbar
