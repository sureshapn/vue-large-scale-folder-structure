

import actions from './actions';

export default {
  namespaced: true,
  state: () => ({
    user: '',
    name: '',
    token: '',
  }),

  mutations: {
    SET_TOKEN: (state, token) => {
      Object.assign(state, { token });
    },
    SET_STATUS: (state, status) => {
      Object.assign(state, { status });
    },
    SET_NAME: (state, name) => {
      Object.assign(state, { name });
    },
  },

  actions,
};
