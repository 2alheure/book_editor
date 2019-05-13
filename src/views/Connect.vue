<style scopped>
input {
  display: block;
  margin: 15px auto;
}

a {
  display: inline-block;
  margin: 15px;
}

p {
  text-align: center;
}

.button > i {
  font-size: 22px;
}

.social > .button .big {
  min-width: 50px;
}
</style>


<template>
  <div>
    <h1>Connexion</h1>
    <p>
      <input type="text" name="login" id="login" v-model="login" autofocus>
      <input type="password" name="password" id="password" v-model="password">

      <a href="#" class="button" @click="connect">Connexion</a>
    </p>

    <ErrorMessage v-if="(errorMessage != null)" :msg="errorMessage"/>

    <p>
      <a href="#">Créer un compte</a>
      <a href="#">Mot de passe oublié&nbsp;?</a>
      <br>OU
      <br>
      <a href="#" class="button big">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="button big">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="button big">
        <i class="fab fa-google-plus-g"></i>
      </a>
    </p>
  </div>
</template>

<script>
import ErrorMessage from "@/components/ErrorMessage.vue";

export default {
  name: "connect",
  components: {
    ErrorMessage
  },
  data: function() {
    return {
      login: "2alheure",
      password: "2alheure",
      errorMessage: null
    };
  },
  methods: {
    connect: function(e) {
      var params = new URLSearchParams();
      params.append("login", this.login);
      params.append("password", this.password);

      this.$axios
        .post("signin", params)
        .then(res => res.data)
        .then(res => {
          if (res.status) {
            this.$axios.defaults.headers.common= {'Authorization': res.token};
            localStorage.setItem("token", res.token);
            this.$router.push("/home");
          } else this.errorMessage = res.error;
        })
        .catch(err => {
          this.errorMessage = 'Le serveur de données semble innaccessible. Veuillez vérifier votre connexion et réessayer ultérieurement.';
        });
    }
  }
};
</script>
