import * as centerApi from './service';
 
export default {
  namespace: 'center',
  state: {
    name: 'center'
  },
 
  effects: {
    * effectsDemo(_, { call, put }) {
      const { status, data } = yield call(centerApi.demo, {});
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
