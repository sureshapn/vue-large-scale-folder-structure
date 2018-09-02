
import { loginByUsername, logout, getUserInfo } from '@/api/login';

export default {

  async LoginByUsername({ commit }, userInfo) {
    try {
      const token = await loginByUsername(userInfo);
      commit('SET_TOKEN', token);
      return token;
    } catch (e) {
      throw e;
    }
  },

  async LogOut({ commit, state }) {
    try {
      await logout(state.token);
      commit('SET_TOKEN', '');
    } catch (e) {
      throw e;
    }
  },

  async GetUserInfo({ commit, state }) {
    try {
      const userData = await getUserInfo(state.token);
      commit('SET_NAME', userData.name);
      return userData;
    } catch (e) {
      throw e;
    }
  },


};
