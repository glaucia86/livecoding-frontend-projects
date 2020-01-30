<template>
  <div class="login">
    <b-jumbotron header="Aplicação Chat com Vue"
                  lead="Desenvolvido com muito ❤️ - Rio de Janeiro, 2020"
                  bg-variant="primary"
                  text-variant="white">
      <p>Não deixe de acompanhar mais vídeos Tutoriais como esse!</p>
      <b-button variant="danger" href="https://www.youtube.com/user/l32759" role="button">Inscreva-se no Canal</b-button>
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col lg="4" md="3"></b-col>
        <b-col lg="4" md="6">
          <LoginForm />
        </b-col>
        <b-col lg="4" md="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm/index.vue';

export default {
  name: 'login',
  components: {
    LoginForm,
  },
};

</script>

<style></style>
