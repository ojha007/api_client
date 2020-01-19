<template>
  <div id="login">
    <img src="/static/img/logo.png" class="center-block logo">

    <div class="text-center col-sm-12">
      <!-- login form -->
      <form @submit.prevent="loginUser">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
          <input class="form-control" name="email" placeholder="Email Address" type="email" v-model="email">
        </div>

        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
        </div>
        <button type="submit"
                :class="'btn btn-primary btn-lg' + loading">
          Submit
        </button>
      </form>

      <!-- errors -->
      <div v-if=response class="text-red"><p class="vertical-5p lead">{{response}}</p></div>
    </div>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
      name: 'Login',
      data(router) {
        return {
          section: 'Login',
          loading: '',
          email: '',
          password: '',
          response: ''
        }
      },
      methods: {
        ...mapActions([
          'login'
        ]),
        loginUser() {
          this.login(this.email, this.password)
        },
        toggleLoading() {
          this.loading = this.loading === '' ? 'loading' : ''
        },
        resetResponse() {
          this.response = ''
        }

      }
    }
</script>

<style>
  #login {
    padding: 10em;
  }

  html,
  body,
  .container-table {
    height: 100%;
    background-color: #282b30 !important;
  }

  .container-table {
    display: table;
    color: white;
  }

  .vertical-center-row {
    display: table-cell;
    vertical-align: middle;
  }

  .vertical-20p {
    padding-top: 20%;
  }

  .vertical-10p {
    padding-top: 10%;
  }

  .vertical-5p {
    padding-top: 5%;
  }

  .logo {
    width: 15em;
    padding: 2em;
  }

  .input-group {
    padding-bottom: 2em;
    height: 3em;
    width: 100%;
  }

  .input-group span.input-group-addon {
    width: 2em;
    height: 3em;
  }

  @media (max-width: 1241px) {
    .input-group input {
      height: 3em;
    }
  }

  @media (min-width: 1242px) {
    form {
      padding-left: 20em;
      padding-right: 20em;
    }

    .input-group input {
      height: 3em;
    }
  }

  .input-group-addon i {
    height: 15px;
    width: 15px;
  }
</style>
