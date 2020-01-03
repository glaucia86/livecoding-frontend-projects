<template>
  <div class="room-list">
    <h4>Canais</h4>
    <hr>
    <b-list-group v-if="activeRoom">
      <b-list-group-item v-for="room in rooms"
                          :key="room.name"
                          :active="activeRoom.id === room.id"
                          href="#"
                          @click="onChange(room)">
        # {{ room.name }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import mapState from 'vuex';

export default {
  name: 'RoomList',

  computed: {
    ...mapState([
      'activeRoom',
      'rooms',
    ]),
  },
};
</script>
