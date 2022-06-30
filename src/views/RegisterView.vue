<template>
  <div class="auth">
    <div class="auth-wrapper">
      <router-link to="/">
        <button class="btn-return" to="/">Назад на главную</button>
      </router-link>
      <form action="login" class="login-form" @submit.prevent="onSubmitRegister">
        <div class="login-inpts">
          <h2>Регистрация</h2>
          <input class="inpt" type="text" id="email" placeholder="E-mail" v-model.trim="email"
            :class="{ invalid: (v$.email.$dirty && v$.email.required.$invalid) || (v$.email.$dirty && v$.email.email.$invalid) }">
          <small v-if="v$.email.$dirty && v$.email.required.$invalid">Email не должен быть пустым</small>
          <small v-else-if="v$.email.$dirty && v$.email.email.$invalid">Введите корректный Email </small>
          <input class="inpt" type="text" id="name" placeholder="Имя" v-model.trim="name"
            :class="{ invalid: v$.name.$dirty && v$.name.required.$invalid }">
          <small v-if="v$.name.$dirty && v$.name.required.$invalid">Имя не дложно быть пустым</small>
          <input class="inpt" id="pass" autocomplete="username" type="password" placeholder="Пароль"
            v-model.trim="password.password"
            :class="{ invalid: (v$.password.password.$dirty && v$.password.password.required.$invalid) || (v$.password.password.$dirty && v$.password.password.minLength.$invalid) }">
          <small v-if="v$.password.password.$dirty && v$.password.password.required.$invalid">Пароль не должен быть
            пустым</small>
          <small v-else-if="v$.password.password.$dirty && v$.password.password.minLength.$invalid">Пароль должен быть
            не менее 6
            символов</small>
          <input class="inpt" id="pass-confirm" autocomplete="username" type="password" placeholder="Пароль"
            v-model.trim="password.confirm"
            :class="{ invalid: (v$.password.confirm.$dirty && v$.password.confirm.required.$invalid) || (v$.password.confirm.$dirty && v$.password.confirm.sameAs.$invalid) }">
          <small v-if="v$.password.confirm.$dirty && v$.password.confirm.required.$invalid">Повторите пароль</small>
          <small v-else-if="v$.password.confirm.$dirty && v$.password.confirm.sameAs.$invalid">Пароли не
            совпадают</small>
          <button type="submit" class="btn login-btn">Регистрация</button>
          <span style="color: #ff0000"> {{errorMsg}} </span>
        </div>
        <div class="new-reg">
          <span>Уже есть аккаунт?</span>
          <router-link to="/login">Войти</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: 'RegisterView',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      errorMsg: '',
      email: '',
      name: '',
      password: {
        password: '',
        confirm: ''
      }
    }
  },
  validations () {
    return {
      email: { required, email },
      name: { required },
      password: {
        password: { required, minLength: minLength(6) },
        confirm: { required, sameAs: sameAs(this.password.password) }
      }
    }
  },
  methods: {
    async onSubmitRegister () {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const user = {
        email: this.email,
        password: this.password.password,
        name: this.name
      }
      await this.$store.dispatch('registerUser', user)
        .then(() => {
          this.$router.push('/')
          console.log('REGISTER IS OK')
        })
        .catch(err => {
          if (err.code === 'auth/email-already-in-use') {
            this.errorMsg = 'Этот Email уже используется!'
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
