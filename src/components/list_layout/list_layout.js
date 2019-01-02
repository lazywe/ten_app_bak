import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtGrid,AtActivityIndicator } from "taro-ui"
import ItemOne from "../item_one/item_one"
import './list_layout.scss'

class ListLayout extends Component {

  /**
   * 前往详情
   *
   * @memberof Index
   */
  onGoDetail = (e) => {
    Taro.navigateTo({
      url:`/pages/detail/detail?id=${e.currentTarget.dataset.id}`
    });
  }

  render() {
    const {publics, coupons, loading } = this.props;
    return <View>
        {/* 轮播 */}
        {
          publics && publics.banners.length > 0 && (
                <Swiper vertical={false} circular indicatorDots>
                  {
                    publics.banners.map((item, index) => (
                        <SwiperItem key={index}>
                        <Image
                            style="width:100%;"
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
                <ItemOne onClick={this.onGoDetail} item={item}/>
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