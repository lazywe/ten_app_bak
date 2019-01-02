import * as detailApi from './service';

export default {
  namespace: 'detail',
  state: {
    id:0,
    detail:{},
  },
  effects: {
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};