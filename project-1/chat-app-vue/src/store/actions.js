// @ts-nocheck
/**
 * arquivo: src/store/actions.js
 * Data: 14/01/2020
 * Descrição: s
 * Author: Glaucia Lemos
 */

import chatkit from '../chatkit';

// Função responsável por disparar mensagens de erro na aplicação:
function handleError(commit, error) {
  const message = error.message || error.info.error_description;
  commit('setError', message);
}

export default {
  // Função responsável por efetuar o login no chat
  async login({ commit, state }, userId) {
    try {
      commit('setError', '');
      commit('setLoading', true);

      // Conexão do usário ao serviço do chatKit
      const currentUser = await chatkit.connectUser(userId);

      commit('setUser', {
        username: currentUser.id,
        name: currentUser.name,
      });
      commit('setReconnect', false);

      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name,
      }));
      commit('setRooms', rooms);

      const activeRoom = state.activeRoom || rooms[0];
      commit('setActiveRoom', {
        id: activeRoom.id,
        name: activeRoom.name,
      });

      await chatkit.subscribeToRoom(activeRoom.id);

      return true;
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setLoading', false);
    }
  },

  // Função responsável por lidar com a ação da alteração de salas no chat
  async changeRoom({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId);
      commit('setActiveRoom', { id, name });
    } catch (error) {
      handleError(commit, error);
    }
  },

  //
  async sendMessage({ commit }, message) {
    try {
      commit('setError', '');
      commit('setSending', true);
      const messageId = await chatkit.sendMessage(message);
      return messageId;
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setSending', false);
    }
  },

  async logout({ commit }) {
    commit('reset');
    chatkit.disconnectUser();
    window.localStorage.clear();
  },
};
