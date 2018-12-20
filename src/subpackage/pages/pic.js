import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import GirlImg from '../images/girl.jpg'

@connect(({ common }) => ({
  ...common
}))
class PicPage extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render () {
    return (
      <View>
        <View>这里是分包页面pic</View>
        <Image src={GirlImg} />

        <Navigator url="/pages/index/index" open-type="switchTab">
          <Button>返回主页</Button>
        </Navigator>
      </View>
    )
  }
}

export default PicPage
