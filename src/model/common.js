export default {
  namespace: 'common',
  state: {
    auth: 'qizhenshuai'
  },
  reducers: {
    sava(state, { payload }) {
      return {
        ...state,
        ...payload
      }
    }
  },
  effects: {
    *error({ payload: e }) {
      console.error('error', e)
    }
  }
}