/**
 * File: src/components/RoomList/roomList.js
 * Date: 29/01/2020
 * Description: componente responsável por listar as salas/canais do Chat
 * Author: Glaucia Lemos
 */

import { mapState, mapActions } from 'vuex';

export default {
  name: 'RoomList',

  computed: {
    ...mapState([
      'activeRoom',
      'rooms',
    ]),
  },

  methods: {
    ...mapActions([
      'changeRoom',
    ]),
    onChange(room) {
      this.changeRoom(room.id);
    },
  },
};
