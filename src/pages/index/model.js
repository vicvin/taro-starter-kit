import * as indexApi from './service';
 
export default {
  namespace: 'home',
  state: {
    name: 'home',
  },
 
  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(indexApi.demo, {});
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
