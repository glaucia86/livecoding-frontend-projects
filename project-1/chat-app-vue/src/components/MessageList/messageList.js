/**
 * File: src/components/MessageList/messageList.js
 * Date: 29/01/2020
 * Description: componente responsável pela lista de mensagens do Chat
 * Author: Glaucia Lemos
 */

import { mapState } from 'vuex';

export default {
  name: 'message-list',

  computed: {
    ...mapState([
      'messages',
      'userTyping',
    ]),
  },
};
