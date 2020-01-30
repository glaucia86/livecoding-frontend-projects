// @ts-nocheck
/**
 * File: src/components/LoginForm/loginForm.js
 * Date: 29/01/2020
 * Description: componente responsável pelo Login do Chat
 * Author: Glaucia Lemos
 */

import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'login-form',
  data() {
    return {
      userId: '',
    };
  },
  computed: {
    // Método responsável por validar o nome de usuário.
    isValid() {
      // Ex.: user: glaucia_lemos86 (userId => resultado)
      const resultado = this.userId.length < 3;
      return resultado ? resultado : this.loading;
    },
    ...mapState([
      'loading',
      'error',
    ]),
    ...mapGetters([
      'hasError',
    ]),
  },

  methods: {
    ...mapActions([
      'login',
    ]),
    async onSubmit() {
      const result = await this.login(this.userId);
      if (result) {
        this.$router.push('chat');
      }
    },
  },
};
