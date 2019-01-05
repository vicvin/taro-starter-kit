import * as albumApi from './service';
 
export default {
  namespace: 'album',
  state: {
    name: 'album',
  },
 
  effects: {
    * initData({ payload }, { call, put, select }) {
      // const { status, data } = yield call(albumApi.demo, {});
      const { category } = yield select(state => state);
      const { tabId, checkId } = payload;
      const checkTabNames = category.tagList.filter(item => item.id === parseInt(tabId));
      const checkNames = category.categoryList.filter(item => item.id === parseInt(checkId));
      if (checkTabNames.length <= 0) return;
      if (checkNames.length <= 0) return;
      const status = 'ok';
      if (status === 'ok') {
        yield put({ 
          type: 'save',
          payload: {
            checkTabName: checkTabNames[0].text,
            checkName: checkNames[0].text
          } 
        });
      }
    },
  },
 
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
 
};
