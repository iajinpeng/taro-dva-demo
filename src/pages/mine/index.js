import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

class Mine extends Component {
  state = {
    name: '金鹏'
  }
  componentDidMount() {
    // Taro.getLocation({
    //   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    // }).then((res) => {
    //   var latitude = res.latitude //维度
    //   var longitude = res.longitude //经度
    //   console.log(res)
    // })


  }
  changeName = () => {
    this.setState({name: '我还是叫金鹏'})
  }
  render() {
    return (
      <View onClick={this.changeName}>
        <View>我的页面</View>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

export default Mine
