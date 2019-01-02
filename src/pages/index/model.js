import * as homeApi from './service';

export default {
  namespace: 'index',
  state: {
    page: 0,
    publics: {
      banners: [],
      grids: []
    },
    coupons: [],
  },
  effects: {
    /**
     * 加载头部数据
     */
    * load(_, { call, put }) {
      const { code, data } = yield call(homeApi.load, {});
      if (code === 200) {
        yield put({
          type: 'save',
          payload: {
            publics: {
              banners: data.banner,
              grids: data.grid,
            },
          }
        })
      }
    },
    /**
     * 加载内容
     */
    * coupon(_, { call, put, select }) {
      const { page, coupons } = yield select(state => state.index);
      let npage = page + 1
      const { code, data } = yield call(homeApi.coupon, {
        page: npage,
      });
      if (code === 200) {
        let ncoupons = [...coupons, ...data]
        yield put({
          type: 'save',
          payload: {
            coupons: ncoupons,
            page: npage,
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