import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import getters from './getters';

Vue.use(Vuex);

export function createStore(){
	return new Vuex.Store({
    modules: {
        user
    },
    getters,
	})
}
