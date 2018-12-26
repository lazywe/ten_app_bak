import { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import ListLayout from "../../components/list_layout/list_layout";
import { connect } from '@tarojs/redux';
if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}
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

  componentDidHide() { }

  currentEvent = (current) => {
    this.props.dispatch({
      type: 'index/save',
      payload: {
        current
      }
    })
    // 加载公共数据
    if (this.props.publics[current] == undefined) {
      this.props.dispatch({
        type: 'index/load'
      });
      this.props.dispatch({
        type: 'index/coupon',
      });
    }
  }

  onReachBottom = () => {
    this.props.dispatch({
      type: 'index/coupon',
    });
  }

  render() {
    const { types, top, current, publics, coupons, effects } = this.props;
    return (
      <View>
        <AtTabs
          current={current}
          scroll
          animated={false}
          tabList={top}
          swipeable={false}
          onClick={this.currentEvent}>
          {
            types.length > 0 && (
              types.map((v, k) =>
                <AtTabsPane className="tab_item" index={k} current={current}> 
                  {
                    (v.type == 1) ? (
                      <ListLayout publics={publics[current]} coupons={coupons[current]} loading={effects['index/coupon']} style="height:700px;">首页</ListLayout>
                    ):(
                      <View>{k}</View>
                    )
                  }
                </AtTabsPane>
              )
            )
          }
        </AtTabs>
      </View>
    )
  }
}

export default Index
