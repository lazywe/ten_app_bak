import * as homeApi from './service';

let datas = [
  {
    title: '首页',
    type: 1 
  },
  {
    title: '书城',
    type:1
  },
  {
    title: '继续阅读',
    type:2
  },
  {
    title: '会员中心',
    type:1
  }
]

export default {
  namespace: 'index',
  state: {
    current: 0,
    types: datas.map((item) => {
      return {
        type:item.type
      }
    }),
    top: datas.map((item) => {
      return {
        title:item.title
      }
    }),
    pages: [],
    publics: [],
    coupons: [],
  },
  effects:{
    /**
     * 加载头部数据
     */
    * load(_, { call, put, select }) {
      const { publics, current } = yield select(state => state.index);
      const { code, data } = yield call(homeApi.load, {});
      yield console.log(publics)
      if (code === 200) {
        publics[current] = {
          banners:data.banner,
          grids:data.grid,
        }
        yield put({
          type: 'save',
          payload: {
            publics: publics,
          }
        })
      }
    },
    /**
     * 加载内容
     */
    * coupon(_, { call, put, select }) {
      const { coupons, current } = yield select(state => state.index);
      const { code, data } = yield call(homeApi.coupon, {});
      yield console.log(coupons)
      if (code === 200) {
        if (coupons[current] == undefined) {
          coupons[current] = data
        } else {
          coupons[current] = [...coupons[current],...data]
        }
        yield put({
          type: 'save',
          payload: {
            coupons: coupons,
          }
        })
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};