import { View,Image, Text } from '@tarojs/components'
import { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
if (process.env.TARO_ENV === "weapp") {
    require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
    require("taro-ui/dist/h5/css/index.css")
}
import './item_one.scss'

class ItemOne extends Component {

    render() {
        const { item } = this.props;
        return <View className='at-row first_item'>
            <View className='at-col at-col-4 img_view first_left'>
                <Image mode='widthFix' className="image" src={item.pict_url} />
            </View>
            <View className='at-col first_right'>
                <View className='at-row-costom'>
                    <View className='title'>{item.title}</View>
                </View>
                <View className='at-row-costom'>
                    <View className='author'>{item.shop_title}</View>
                </View>
                <View className='at-row-costom'>
                    <View className='at-col-costom coupon'>
                        <View className='coupon-img'>券</View>
                        <View className='coupon-text'>{item.coupon_info}</View>
                    </View>
                    <View className='at-col-costom coupon-cs'>已抢<View className='view'>{item.coupon_total_count - item.coupon_remain_count}</View>件</View>
                </View>
                <View className='at-row-costom'>
                    <View className='at-col-costom price'>¥{item.zk_final_price}<Text>券后</Text></View>
                    <View className='at-col-costom button'>
                        <AtButton type='secondary' size='small'>前往领券</AtButton>
                    </View>
                </View>
            </View>
        </View>
    }
}
export default ItemOne;
