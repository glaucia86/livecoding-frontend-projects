<template>
  <div class="user-list">
    <h4>Membros</h4>
    <hr>
    <b-list-group>
      <b-list-group-item v-for="user in users" :key="user.username">
        {{ user.name }}
        <b-badge v-if="user.presence" :variant="statusColor(user.presence)" pill>
          {{ user.presence }}
        </b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script src="./userList.js"></script>
