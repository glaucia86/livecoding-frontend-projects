// @ts-nocheck
/**
 * File: src/components/MessageForm/messageForm.js
 * Date: 29/01/2020
 * Description: componente responsável pelo formulário de mensagens do Chat
 * Author: Glaucia Lemos
 */

import { mapActions, mapState, mapGetters } from 'vuex';
import { isTyping } from '../../chatkit';

export default {
  name: 'message-form',
  data() {
    return {
      message: '',
    };
  },

  computed: {
    ...mapState([
      'sending',
      'error',
      'user',
      'activeRoom',
    ]),
    ...mapGetters([
      'hasError',
    ]),
  },
  methods: {
    ...mapActions([
      'sendMessage',
    ]),
    async onSubmit() {
      const result = await this.sendMessage(this.message);
      if (result) {
        this.message = '';
      }
    },
    async isTyping() {
      await isTyping(this.activeRoom.id);
    },
  },
};
