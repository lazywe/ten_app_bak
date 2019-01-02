import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import ListLayout from "../../components/list_layout/list_layout";
import { connect } from '@tarojs/redux';
import { AtButton } from 'taro-ui'
import './index.scss'

@connect(({ index ,loading}) => ({
  ...index,
  ...loading
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'index/load',
    });
    this.props.dispatch({
      type: 'index/coupon',
    });
  };

  onReachBottom = () => {
    this.props.dispatch({
      type: 'index/coupon',
    });
  }

  render() {
    const {publics, coupons, effects } = this.props;
    return (
      <View>
          <ListLayout publics={publics} coupons={coupons} loading={effects['index/coupon']}>首页</ListLayout>
          {
              (process.env.TARO_ENV === "h5" && coupons.length > 0  && !effects['index/coupon'])  ? (
                  <AtButton type='primary' onClick={this.onReachBottom} size='normal'>加载数据</AtButton>
              ):''
          }
      </View>
    )
  }
}

export default Index
