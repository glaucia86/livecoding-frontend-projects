<template>
  <b-navbar id="chat-navbar" toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#">
      Aplicação Chat com Vue
    </b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <b-nav-text>{{ user.name }} | </b-nav-text>
      <b-nav-item href="#" @click="onLogout" active>Sair</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script src="./chatNavBar.js"></script>

<style src="./chatnavbar.css" scoped></style>
