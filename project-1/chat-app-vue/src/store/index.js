import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

// import mutations from './mutations';
// import actions from './actions';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    loading: false,
    sending: false,
    error: null,
    user: [],
    reconnect: false,
    activeRoom: null,
    rooms: [],
    users: [],
    messages: [],
    userTyping: null,
  },
  // mutations,
  // actions,
  getters: {
    // se 'state.error for null == false, se não retorna true'
    hasError: state => !!state.error,
  },
  plugins: [vuexLocal.plugin],
  strict: debug,
});

/**
 * state: {
    loading: false,
    sending: false,
    error: 'Tudo certo! Essa é só uma mensagem de erro!',
    user: {
      username: 'Elsa',
      name: 'Elsa Frozen',
    },
    reconnect: false,
    activeRoom: {
      id: '124',
    },
    rooms: [
      {
        id: '123',
        name: 'General',
      },
      {
        id: '321',
        name: 'Private',
      },
    ],
    users: [
      {
        username: 'Elsa',
        name: 'Elsa Frozen',
        presence: 'online',
      },
      {
        username: 'Anna',
        name: 'Anna Frozen',
        presence: 'offline',
      },
    ],
    messages: [
      {
        username: 'Elsa',
        date: '04/01/2020',
        text: 'Oi! Me chamo Elsa. E você?',
      },
      {
        username: 'Anna',
        date: '04/01/2020',
        text: 'Oi! Me chamo Anna. Você é minha irmã?',
      },
    ],
    userTyping: null,
  },
 */
