<template>
    <div class="login-form">
      <h5 class="text-center">Chat Login</h5>
      <hr>
      <b-form @submit.prevent="onSubmit">

        <b-alert variant="danger" :show="hasError">{{ error }}</b-alert>
        <b-form-group id="userInputGroup" label="Usuário" label-for="userInput">
          <b-form-input id="userInput"
                        type="text"
                        placeholder="Digite o seu usuário"
                        v-model="userId"
                        autocomplete="off"
                        :disabled="loading"
                        required>
          </b-form-input>
        </b-form-group>

        <b-button type="submit"
                  variant="primary"
                  class="ld-ext-right"
                  v-bind:class="{ running: loading }"
                  :disabled="isValid">
                  Login <div class="ld ld-ring ld-spin"></div>
        </b-button>
      </b-form>
    </div>
</template>

<script src="./loginForm.js"></script>

<style></style>
