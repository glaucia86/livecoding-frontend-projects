<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#">
      Aplicação Chat com Vue
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ user.name }} | </b-nav-text>
      <b-nav-item href="#" active>Logout</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import mapState from 'vuex';

export default {
  name: 'ChatNavBar',

  computed: {
    ...mapState([
      'user',
    ]),
  },
};

</script>
