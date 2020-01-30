/**
 * File: src/components/UserList/userList.js
 * Date: 29/01/2020
 * Description: componente responsável por listar os usuários ativos no Chat
 * Author: Glaucia Lemos
 */

import { mapState } from 'vuex';

export default {
  name: 'UserList',
  computed: {
    ...mapState([
      'users',
      'loading',
    ]),
  },

  methods: {
    statusColor(status) {
      return status === 'online' ? 'success' : 'warning';
    },
  },
};
