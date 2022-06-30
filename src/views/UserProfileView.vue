<template>
  <main class="profile">
    <div class="profile-wrapper">
      <h2>Личный кабинет</h2>
      <div class="user-profile">
        <aside class="user-profile__sideBar">
          <button class="btn">Детали профиля</button>
          <button class="btn">Заказы</button>
          <button class="btn">Список желаемого</button>
          <button class="btn-return" @click.prevent="logOut">Выйти</button>
        </aside>
        <div class="user-profile__info">
          <p>Добрый день</p>
          <h3> //user_name//</h3>
          <div class="user-contacts">
            <div class="user-contacts__field">
              <span>tel:</span><span> //user-tel//</span>
            </div>
            <div class="user-contacts__field">
              <span>city:</span><span>//user-sity//</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: 'UserProfileView',
  methods: {
    async logOut () {
      await this.$store.dispatch('logoutUser')
        .then(() => {
          this.$router.push('/login')
        })
    }
  },
  async mounted () {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('getInfo')
    }
  }
}
</script>
