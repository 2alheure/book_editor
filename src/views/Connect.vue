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
      <input type="text" name="login" id="login">
      <input type="password" name="password" id="password">
      <a href="#">Créer un compte</a>
      <a href="#">Mot de passe oublié&nbsp;?</a>
      <br>
      <router-link to="/" class="button">Connexion</router-link>
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

