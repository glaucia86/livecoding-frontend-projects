<template>
  <div class="message-form ld-over">
    <small class="text-muted" >@{{ user.username }}</small>
    <b-form @submit.prevent="onSubmit" class="ld-over" v-bind:class="{ running: sending }">
      <div class="ld ld-ring ld-spin"></div>
      <b-alert variant="danger" :show="hasError">{{ error }}</b-alert>
      <b-form-group>
        <b-form-input id="message-input"
                      type="text"
                      v-model="message"
                      @input="isTyping"
                      placeholder="Digite a mensagem"
                      autocomplete="off"
                      required>
        </b-form-input>
      </b-form-group>
      <div class="clearfix">
        <b-button type="submit" variant="primary" class="float-right">
          Enviar
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
// eslint-disable-next-line import/extensions
import { isTyping } from '../chatkit.js';

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
</script>
