import * as indexApi from './service';
 
const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

export default {
  namespace: 'home',
  state: {
    num: 1
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
    *handleChange({ payload }, { put, select }) {
      const { home } = yield select(state => state);
      const { type } = payload;
      console.log('type', type);
      yield put({
        type: 'save',
        payload: {
          num: type === 'add' ? home.num + 1 : home.num - 1
        }
      })
    },
    *asyncAdd(_, { put, call, select }) {
      const { home } = yield select(state => state);
      yield call(delay, 2000)
      yield put({
        type: 'save',
        payload: {
          num: home.num + 1
        }
      })
    }
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
