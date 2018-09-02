

import actions from './actions';

const user = {
  state: {
    user: '',
    name: '',
    token: '',
  },

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

export default user;
