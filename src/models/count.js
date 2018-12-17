export default {
  namespace: 'count',
  state: {
    num: 0
  },
  reducers: {
    add(state) {
      return {num: state.num + 1 }
    }
  }
}
