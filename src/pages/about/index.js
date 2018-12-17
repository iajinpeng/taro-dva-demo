import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator } from '@tarojs/components'

class About extends Component {
  render() {
    return (
      <View>
        <Navigator url="/pages/mine/index" open-type="switchTab">
          <Text>To我的</Text>
        </Navigator>
      </View>
    )
  }
}

export default About
