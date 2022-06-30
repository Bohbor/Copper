<template>
  <header class="header">
    <HomePageHeaderSlider />
  </header>
  <main class="main">
    <section class="product-category">
      <h2>Наша продукция</h2>
      <div class="category">
        <div class="category__item oil">
          <router-link to="/catalog">
            <h3>Для эфирных масел</h3>
          </router-link>
        </div>
        <div class="category__item gidrolat">
          <router-link to="/catalog">
            <h3>Для гидролатов</h3>
          </router-link>
        </div>
        <div class="category__item dishes">
          <router-link to="/catalog">
            <h3>Медная посуда</h3>
          </router-link>
        </div>
        <div class="category__item accessories">
          <router-link to="/catalog">
            <h3>Аксесуары</h3>
          </router-link>
        </div>
        <div class="category__item order">
          <router-link to="/catalog">
            <h3>Индивидуальный заказ</h3>
          </router-link>
        </div>
        <div class="category__item discont">
          <router-link to="/catalog">
            <h3>Скидки и предложения</h3>
          </router-link>
        </div>
      </div>
    </section>
    <section class="promo">
      <div class="p-wrapper">
        <div class="promo__text">
          <h2>1 + 1 = 3</h2>
          <p>Закажите два товара и<br> получите третий бесплатно</p>
          <button class="btn">
            <router-link to="/catalog">Перейти в каталог</router-link>
          </button>
        </div>
        <div class="promo__img">
          <img src="../assets/img/home_page/pdoduct_img.png" alt="">
        </div>
      </div>
    </section>
    <section class="review">
      <h2>Что думают о нас</h2>
      <HomePageReviewSlider />
    </section>
  </main>
</template>

<script>
import HomePageHeaderSlider from '@/components/sliders/HomePageHeaderSlider.vue'
import HomePageReviewSlider from '@/components/sliders/HomePageReviewSlider.vue'

export default {
  name: 'HomeView',
  components: {
    HomePageHeaderSlider,
    HomePageReviewSlider
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: url(../assets/img/home_page/home_banner_BG.png) no-repeat center center;
  background-size: cover;
}

.promo {
  background: url(../assets/img/home_page/promo_BG.png) no-repeat center center;
  background-size: cover;
}

.oil {
  background: url(../assets/img/catalog_page/category_img1.jpg) no-repeat center center;
  background-size: cover;
}

.gidrolat {
  background: url(../assets/img/catalog_page/category_img2.jpg) no-repeat center center;
  background-size: cover;
}

.dishes {
  background: url(../assets/img/catalog_page/category_img3.jpg) no-repeat center center;
  background-size: cover;
}

.accessories {
  background: url(../assets/img/catalog_page/catogory_acs_BG.jpg) no-repeat center center;
  background-size: cover;
}

.discont {
  background: url(../assets/img/catalog_page/category_img4.jpg) no-repeat center center;
  background-size: cover;
}

.order {
  background: url(../assets/img/catalog_page/category_order_BG.jpg) no-repeat center center;
  background-size: cover;
}
</style>
