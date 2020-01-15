/**
 * arquivo: chatkit.js
 * Data: 14/01/2020
 * Descrição: arquivo responsável por tratar a lógica da autenticação entre a aplicação e o ChatKit
 * Author: Glaucia Lemos
 */

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const INSTANCE_LOCATOR = process.env.VUE_APP_INSTANCE_LOCATOR;
const TOKEN_URL = process.env.VUE_APP_TOKEN_URL;
// const MESSAGE_LIMIT = Number(process.env.VUE_APP_MESSAGE_LIMIT) || 10;

let currentUser = null;
// let activeRoom = null;

async function connectUser(userId) {
  const chatManager = new ChatManager({
    instanceLocator: INSTANCE_LOCATOR,
    tokenProvider: new TokenProvider({ url: TOKEN_URL }),
    userId,
  });

  currentUser = await chatManager.connect();
  return currentUser;
}

export default {
  connectUser,
};
