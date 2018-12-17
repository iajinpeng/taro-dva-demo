import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'


import Tabbar from '../../components/Tabbar/index'

import './index.less'


@connect(({ count }) => ({
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
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Button className='add_btn' onClick={this.add}>+</Button>
        <View><Text>{this.props.num}</Text></View>
        <View><Text>Hello, World</Text></View>
        <Tabbar />
      </View>
    )
  }
}

export default Index
