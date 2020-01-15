/**
 * arquivo: src/store/mutations.js
 * Data: 14/01/2020
 * Descrição
 * Author: Glaucia Lemos
 */

export default {
  setError(state, error) {
    state.error = error;
  },

  setLoading(state, loading) {
    state.loading = loading;
  },

  setUser(state, user) {
    state.user = user;
  },

  setReconnect(state, reconnect) {
    state.reconnect = reconnect;
  },

  setActiveRoom(state, roomId) {
    state.activeRoom = roomId;
  },

  setRooms(state, rooms) {
    state.rooms = rooms;
  },

  setUsers(state, users) {
    state.users = users;
  },

  clearChatRoom(state) {
    state.users = [];
    state.messages = [];
  },

  setMessages(state, messages) {
    state.messages = messages;
  },

  addMessage(state, message) {
    state.messages.push(message);
  },

  setSending(state, status) {
    state.sending = status;
  },

  setUserTyping(state, userId) {
    state.userTyping = userId;
  },

  reset(state) {
    state.error = null;
    state.users = [];
    state.messages = [];
    state.rooms = [];
    state.user = null;
  },
};
