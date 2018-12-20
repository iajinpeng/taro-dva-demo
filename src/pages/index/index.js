import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import request from '../../utils/request'

import Tabbar from '../../components/Tabbar/index'

import './index.less'


@connect(({ common, count }) => ({
  ...common,
  ...count
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  add = () => {
    this.props.dispatch({
      type: 'count/add'
    })
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentDidMount () {
    // Taro.getSystemInfo().then(res => {
    //   console.log(res)
    // })
    // console.log(Taro.createSelectorQuery().select('.add_btn'))

    Taro.getLocation().then(({ latitude, longitude}) => {
      request({
        method: 'GET',
        url: `https://api.map.baidu.com/geocoder/v2/?ak=gH0oM5RNGOr1p3ndegWYd0GofEZSpa7y&location=${latitude},${longitude}&output=json`,

      })
        .then(res => {
          console.log(res)
        })
    })
  }

  componentWillUnmount () { }

  componentDidShow () {}

  componentDidHide () { }

  onReachBottom () {
    console.log('reach bottom')
  }

  render () {
    return (
      <View className='index'>
        <Image src={this.props.userInfo && this.props.userInfo.avatarUrl} />
        <Button className='add_btn' onClick={this.add}>+</Button>
        <View style={{height: '10vh'}}><Text>{this.props.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <Tabbar />
      </View>
    )
  }
}

export default Index
