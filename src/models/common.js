import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    // access_token: Taro.getStorageSync('access_token'),
    // mobile: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').mobile :'',
    // nickname: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').nickname :'',
    // new_user: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').new_user :'',
    // is_has_buy_card: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').is_has_buy_card :'',
    // erroMessage: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').erroMessage :'',

    userInfo: {},

  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    setUserInfo(state, { payload }) {
      return { ...state, userInfo: payload }
    },
  },

  subscriptions: {
    setup() {

    }
  }

};
