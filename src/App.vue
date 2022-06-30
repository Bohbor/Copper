<template>
  <NavBar />
    <router-view />
  <button class="to-top" :class="{showBtn: active}" @click="toTop">ВВЕРХ</button>
  <FooterBar />
</template>
<script>
import NavBar from './components/NavBar/NavBar.vue'
import FooterBar from './components/FooterBar/FooterBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    FooterBar
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    displayBtn () {
      if (window.scrollY <= 900) {
        this.active = false
        return
      }
      this.active = true
    }
  }
}
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
  .to-top {
    display: none;
    position: fixed;
    z-index: 999;
    bottom: 10px;
    right: 50px;
    padding: 17px 30px;
    transform: rotate(90deg);
}
.showBtn {
  display: block;
}
</style>
