import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map, Input } from '@tarojs/components'
import Tabbar from '../../components/Tabbar/index'
import { mapKey } from '../../config'
import request from '../../utils/request'

import './index.less'

class Mine extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  state = {
    latitude: null,
    longitude: null,
    keyword: '',
    markers: [{
      iconPath: "https://wxapp.xiaomafeiteng.com/static/addons/diancan/wximg/logo1.png",
      id: 0,
      latitude: 28.68194,
      longitude: 115.96191,
      callout:{
        content:'气泡名称',
        color: '#FF0000',
        fontSize: 15,
        borderRadius: 10,
        display: 'ALWAYS',
      },
      width: 35,
      height: 45
    }],

  }
  componentDidMount() {
    Taro.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    }).then(({ latitude, longitude }) => {
      this.setState({ latitude, longitude })
    })

  }

  handleClick = (e) => {
    console.log(e)
  }

  handleInputChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
    /*request({
      method: 'GET',
      url: 'https://apis.map.qq.com/ws/place/v1/suggestion',
      data: {
        keyword: e.target.value,
        region: '南昌',
        key: mapKey
      }
    })*/
    request({
      method: 'GET',
      url: 'https://apis.map.qq.com/ws/place/v1/search',
      data: {
        keyword: e.target.value,
        boundary: 'nearby(39.908491,116.374328,1000)',
        key: mapKey
      }
    })
  }

  render() {
    const { latitude, longitude } = this.state
    return (
      <View>
        <Input className="search-box" onChange={this.handleInputChange}/>
        <Map
          className="map"
          latitude={latitude}
          longitude={longitude}
          subkey={mapKey}
          showLocation
          markers={this.state.markers}
          onMarkertap={this.handleClick}
        />

        <Tabbar />
      </View>
    )
  }
}

export default Mine
