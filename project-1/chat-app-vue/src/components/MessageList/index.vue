<template>
  <div class="message-list">
    <h4>Mensagens</h4>
    <hr>
    <div id="chat-messages" class="message-group" v-chat-scroll="{ smooth: true }">
      <div class="message" v-for="(message, index) in messages" :key="index">
        <div class="clearfix">
          <h4 class="message-title">{{ message.name }}</h4>
          <small class="text-muted float-right">@{{ message.username }}</small>
        </div>
        <p class="message-text">
          {{ message.text }}
        </p>
        <div class="clearfix">
          <small class="text-muted float-right">{{ message.date }}</small>
        </div>
      </div>
    </div>
    <div class="user-typing">
      <small class="text-muted" v-if="userTyping">@{{ userTyping }} está digitando...</small>
    </div>
  </div>
</template>

<script src="./messageList.js"></script>

<style src="./messagelist.css" scoped></style>
