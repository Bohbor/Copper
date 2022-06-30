<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <div class="logo">
        <a href="#"><img src="../../assets/img/logos/logo.svg" alt="logo" /></a>
      </div>
      <ul class="main-nav">
        <li class="main-nav__item">
          <router-link to="/" active-class="active" class="main-nav__link">Главная</router-link>
        </li>
        <li class="main-nav__item">
          <router-link to="/catalog" active-class="active" class="main-nav__link">Каталог</router-link>
        </li>
        <li class="main-nav__item">
          <router-link to="/about" active-class="active" class="main-nav__link" append>О нас</router-link>
        </li>
        <li class="main-nav__item">
          <a href="#footer" class="main-nav__link" active-class="active">Контакты</a>
        </li>
      </ul>
      <ul class="user-nav">
        <li class="user-nav__item">
          <router-link to="/basket" href="" class="user-nav__link">
            <img src="../../assets/img/logos/favorite_ico.svg" alt="favorite" />
          </router-link>
        </li>
        <li class="user-nav__item" v-if="login === false">
          <router-link  to="/login" href="" class="user-nav__link" >
            <img src="../../assets/img/logos/user_ico.svg" alt="user" />
          </router-link>
        </li>
        <li class="user-nav__item active-login" v-else-if="login === true">
          <router-link  to="/profile" href="" class="user-nav__link" >
            <img src="../../assets/img/logos/user_ico.svg" alt="user" />
          </router-link>
        </li>
        <li class="user-nav__item">
          <router-link to="/basket" class="user-nav__link">
            <img src="../../assets/img/logos/basket_ico.svg" alt="basket" />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { getAuth, onAuthStateChanged } from '@firebase/auth'

export default {
  name: 'NavBar',
  data () {
    return {
      login: 'false'
    }
  },
  mounted () {
    onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        this.login = true
      } else {
        this.login = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.nav {
  background: url(../../assets/img/top_nav_BG.webp) no-repeat center center;
  background-size: cover;
}
.active-login {
background: linear-gradient(180deg, #5e3928 20.13%, #e4a16f 92.93%);
}
</style>
