import { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import './swiper.scss'

export default class MySwiper extends Component {
    render() {
        const { id } = this.props
        return <Swiper vertical={false}  circular indicatorDots>
                    <SwiperItem key='0'>
                        <Image
                            style="width:100%;"
                            mode='widthFix'
                            src='https://img.alicdn.com/imgextra/i4/2616970884/O1CN01E6KghF1IOubv91vOr_!!2616970884.jpg_430x430q90.jpg'
                        />
                    </SwiperItem>
                    <SwiperItem key='1'>
                        <Image
                            style="width:100%;"
                            mode='widthFix'
                            src='https://img.alicdn.com/imgextra/i1/2838892713/O1CN01sJVF9t1Vub102F7oc_!!2838892713.jpg_430x430q90.jpg'
                        />
                    </SwiperItem>
                </Swiper>
    }
}
