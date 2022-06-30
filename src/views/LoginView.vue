<template>
  <div class="auth">
    <div class="auth-wrapper">
      <router-link to="/">
        <button class="btn-return" to="/">Назад на главную</button>
      </router-link>
      <form class="login-form" @submit.prevent="onSubmitLogin">
        <div class="login-inpts">
          <h2>Авторизация</h2>
          <input
            class="inpt"
            type="text"
            id="email"
            autocomplete="username"
            placeholder="E-mail"
            v-model.trim="email"
            :class="{ invalid: (v$.email.$dirty && v$.email.required.$invalid) || (v$.email.$dirty && v$.email.email.$invalid)}"
            >
          <small v-if="v$.email.$dirty && v$.email.required.$invalid">Email не должен быть пустым</small>
          <small v-else-if="v$.email.$dirty && v$.email.email.$invalid">Введите корректный Email </small>
          <input
            class="inpt"
            id="pass"
            type="password"
            autocomplete="current-password"
            placeholder="Пароль"
            v-model.trim="password"
            :class="{ invalid: (v$.password.$dirty && v$.password.required.$invalid) || (v$.password.$dirty && v$.password.minLength.$invalid)}"
            >
          <small v-if="v$.password.$dirty && v$.password.required.$invalid">Пароль не должен быть пустым</small>
          <small v-else-if="v$.password.$dirty && v$.password.minLength.$invalid">Пароль должен быть не менее 6
            символов</small>
          <button type="submit" class="btn login-btn">Войти</button>
          <span style="color: #ff0000"> {{ errMsg }} </span>
        </div>
        <div class="new-reg">
          <span>Нет аккаунта?</span>
          <router-link to="/register">Регистрация</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: 'LoginView',
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data () {
    return {
      errMsg: '',
      email: '',
      password: ''
    }
  },
  validations () {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async onSubmitLogin () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const user = {
        email: this.email,
        password: this.password
      }
      await this.$store.dispatch('loginUser', user)
        .then(() => {
          this.$router.push('/')
          console.log('LOGIN IS OK')
        })
        .catch(err => {
          console.log(err.code)
          switch (err.code) {
            case 'auth/wrong-password':
              this.errMsg = 'Неправильный пароль'
              break
            case 'auth/user-not-found':
              this.errMsg = 'Неправильный Email'
              break
            case 'auth/user-disabled':
              this.errMsg = 'Этот Email отключен'
          }
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.invalid {
  border-bottom: 1px solid #ff0000;
}
small {
  color: #ff0000;
  }
</style>
