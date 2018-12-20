import Taro, { Component } from '@tarojs/taro'
import { View, Block, Navigator, Image } from '@tarojs/components'
import './index.less'

const imgSrcPre = "https://wxapp.xiaomafeiteng.com/static/addons/diancan/wximg/"

class Tabbar extends Component {

  state = {
    tabBar: {
      list: [{
        pagePath: "/pages/index/index",
        iconPath: imgSrcPre + "tab1.png",
        selectedIconPath: imgSrcPre + "tab1-hover.png"
      }, {
        pagePath: "/pages/about/index",
        iconPath: imgSrcPre + "tab2.png",
        selectedIconPath: imgSrcPre + "tab2-hover.png"
      },{
        pagePath: "/pages/mine/index",
        iconPath: imgSrcPre + "tab3.png",
        selectedIconPath: imgSrcPre + "tab3-hover.png"
      }]
    }
  }

  componentDidMount() {
    let currentPages = getCurrentPages();
    let pagePath = currentPages[currentPages.length-1].route;

    let tabBar = this.state.tabBar;
    tabBar.list.map((tab) => {
      return tab.selected = tab.pagePath === '/' + pagePath
    })

    this.setState({ tabBar })
  }

  render () {
    return (
      <View className="tabbar">
        {
          this.state.tabBar.list.map((tab, index) => (
            <Block key={index}>
              <Navigator open-type="switchTab" url={tab.pagePath} className="tabItem">
                <View>
                  <Image src={tab.selected ? tab.selectedIconPath : tab.iconPath} />
                </View>
              </Navigator>
            </Block>
          ))
        }
      </View>
    )
  }
}

export default Tabbar
