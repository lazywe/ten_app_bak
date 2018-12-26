import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import { AtGrid,AtActivityIndicator } from "taro-ui"
import ItemOne from "../item_one/item_one"

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
import './list_layout.scss'

class ListLayout extends Component {

  render() {
    const {publics, coupons, loading } = this.props;
    return <View>
        {/* 轮播 */}
        {
          publics && publics.banners.length > 0 && (
                <Swiper vertical={false} style="border:1px solid #f00;" circular>
                  {
                    publics.banners.map((item, index) => (
                        <SwiperItem key={index}>
                        <Image
                            mode='widthFix'
                            src={item.image}
                        />
                        </SwiperItem>
                    ))
                  }
                </Swiper>
            )
        }
        {/* 快捷栏目 */}
        {
          publics && publics.grids && publics.grids.length > 0 && (<AtGrid hasBorder={false} columnNum={4} data={publics.grids} />)
        }
        {/* product */}
        <View className="goods-list-container">
          { coupons && coupons.length>0 && (
              coupons.map((item) => 
                <ItemOne item={item}/>
              )
            )
          }
        </View>
        {
          loading && (
            <AtActivityIndicator mode='normal' className="indicator_custom" content="加载中..."></AtActivityIndicator>
          )
        }
      </View>
    }
}

export default ListLayout;