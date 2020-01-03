<template>
  <div class="login">
    <b-jumbotron header="Chat App com Vue"
                  lead="Usando Chatkit SDK & Bootstrap-Vue"
                  bg-variant="info"
                  text-variant="white">
      <p>Para mais informações visite o Canal do Youtube</p>
      <b-btn target="blank" href="https://www.youtube.com/user/l32759">Mais informações</b-btn>
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
import LoginForm from '../components/LoginForm.vue';
// import LoginForm from '@/components/LoginForm.vue';

export default {
  name: 'login',
  components: {
    LoginForm,
  },
};

</script>

<style lang="stylus" scoped></style>
