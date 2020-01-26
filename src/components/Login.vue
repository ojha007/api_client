<template>
  <div id="login">
    <div class="box" style="background: inherit;border-top: 0;border-bottom: 0;box-shadow: none">
      <div class="box-header">
        <div class="img brand_logo_container">
          <div class="brand-logo">
            <img alt="logo" class="center-block logo" src="/static/img/logo.png">
          </div>
        </div>
      </div>
      <div class="box-body">
        <div class="row">
          <div class="col-md-12">
            <form @submit.prevent="checkForLogin" action="javascript:void 0 ;" class="form-horizontal">
              <div class="col-md-8 col-md-offset-2">
                <div class="login-form">
                  <div class="form-group">
                    <div :class="{ 'has-error': errors.has('email') }" class="input-group">
                      <span class="input-group-addon"><i class="fa fa-user"/></span>
                      <input autocomplete="false"
                             autofocus
                             class="form-control"
                             name="email"
                             placeholder="Email Address"
                             type="email"
                             v-model="email"
                             v-validate="'required|email'">
                    </div>
                    <span class="has-error" style="margin-left: 40px; ">{{ errors.first('email') }}</span>
                  </div>
                  <div class="form-group">
                    <div :class="{ 'has-error': errors.has('password') }" class="input-group">
                      <span class="input-group-addon"><i class="fa fa-lock"/></span>
                      <input class="form-control" id="password"
                             name="password" placeholder="Password"
                             type="password"
                             v-model="password"
                             autocomplete="current-password"
                             v-validate="'required|min:6'">
                    </div>
                    <span class="has-error" style="margin-left: 40px;">{{ errors.first('password') }}</span>
                  </div>
                  <div class="form-group ">
                    <div class="text-center">
                      <button :class="'btn btn-primary btn-lg ' + loading"
                              :disabled="!isValidForm"
                              type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'

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
      checkForLogin() {
        this.toggleLoading()
        this.$validator.validateAll().then((response) => {
          if (response) {
            this.$store.dispatch('login', {
              email: this.email,
              password: this.password
            }).then(response => {
              console.log(response)
              this.$router.push('/')
            })
          }
        })
        this.resetResponse()
      },
      toggleLoading() {
        this.loading = this.loading === '' ? 'loading' : ''
      },
      resetResponse() {
        this.response = ''
      }
    },
    computed: {
      isValidForm() {
        return Object.keys(this.fields).some(key => this.fields[key].validated) && Object.keys(this.fields).some(key => this.fields[key].valid)
      }

    }
  }
</script>

<style>
  #login {
    padding: 10em;
  }

  .has-error {
    color: #ed110c;
  }

  .has-error .control-label {
    color: #ed110c;
  }

  .has-error .form-control {
    border-color: #ed110c;
  }

  .has-success {
    color: green;
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
    height: 3em;
    width: 100%;
    padding-bottom: 5px;
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

    .form-group {
      padding-bottom: 2em;
    }
  }
</style>
