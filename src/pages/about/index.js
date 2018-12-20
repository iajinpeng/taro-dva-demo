import Taro, { Component } from '@tarojs/taro'
import { View, Text, Navigator, Swiper, SwiperItem } from '@tarojs/components'
import Tabbar from '../../components/Tabbar/index'

import './index.less'

const imgSrcPre = 'https://wxapp.xiaomafeiteng.com/static/addons/diancan/wximg/'
class About extends Component {

  state = {
    current: 0,
    imgs: [
      imgSrcPre + 'goods1.png',
      imgSrcPre + 'goods1.png',
      imgSrcPre + 'goods1.png'
    ]
  }

  handleSwipe = (e) => {
    this.setState({
      current: e.target.current
    })
  }

  imageClick = (img) => {
    console.log(img)
  }

  render() {
    const { imgs, current } = this.state
    return (
      <View>
        <Navigator url="/subpackage/pages/pic">
          <Text className="header-link">To我的</Text>
        </Navigator>

        <View className='banner'>
          <Swiper
            indicatorColor='#999'
            indicatorActiveColor='#f00'
            previous-margin="10px"
            next-margin="10px"
            circular
            autoplay
            onChange={this.handleSwipe}
          >
            {
              imgs.map((img, index) => (
                <SwiperItem className="swiper-item" key={index}>
                  <View onClick={this.imageClick.bind(this, img)}>
                    <Image className="swiper-img" src={img} />
                  </View>
                </SwiperItem>
              ))
            }

          </Swiper>
          <View className="swiper-dot">
            {
              imgs.map((img, index) => (
                <Text key={index} className={current === index ? 'active' : ''} />
              ))
            }
          </View>
        </View>

        <Tabbar />
      </View>
    )
  }
}

export default About
