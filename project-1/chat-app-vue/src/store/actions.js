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

      // Testando o usuário
      console.log(state.user);
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit('setLoading', false);
    }
  },
};
