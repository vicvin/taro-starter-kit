import * as cartApi from './service';
 
export default {
  namespace: 'cart',
  state: {
    name: 'cart',
  },
 
  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(cartApi.demo, {});
      if (status === 'ok') {
        yield put({ type: 'save',
          payload: {
            topData: data,
          } });
      }
    },
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
