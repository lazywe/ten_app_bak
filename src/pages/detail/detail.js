import { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import MySwiper from '../../components/swiper/swiper'
import { AtButton } from 'taro-ui'
import './detail.scss'

@connect(({ detail, loading }) => ({
    ...detail,
    ...loading
}))
class Detail extends Component {

    componentDidMount() {
        const params = this.$router.params;
        this.props.dispatch({
            type: 'detail/save',
            payload: {
                id: params.id
            }
        })
    }

    render() {
        const { id } = this.props
        return <View className="detail_page">
                <MySwiper></MySwiper>
                <View className="title">
                    卢卡斯肌肤轮廓设计大方啊三方撒风阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发阿斯顿发
                </View>
                <View className="price_panal">
                    <View className="left">
                        <View className="coupon">
                            劵后价
                        </View>
                        <View className="price">
                            ¥123
                        </View>
                    </View>

                    <View className="right">
                        800人已买
                    </View>
                </View>

                <View className="coupon_bg coupon_bg_panal"></View>
            </View>
    }
}

export default Detail;