<template>
  <div class="product-card">
    <div class="product-card-wrapper">
      <div class="product-card__order">
        <div class="product-card__foto">
          <input type="checkbox" class="product__favorite">
          <div class="sale-flag">
            <p>SALE</p>
          </div>
          <div class="product__img">
            <img src="../assets/img/catalog_page/product_img/prod_1.jpg" alt="">
          </div>
        </div>
        <div class="product-card__short-info">
          <h2>Дистиллятор для получения гидролата 8л</h2>
          <div class="product-card__short-disc border-b-gray">
            <h4>Описание</h4>
            <p class="short-disc">Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником
              в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или
              алкогольные напитки.</p>
          </div>
          <div class="product-card__price">
            <h4>Цена</h4>
            <h3>10 953 грн</h3>
          </div>
          <div class="product-card__buy-section border-b-gray">
            <div class="order-amount" v-bind="setAmounth">
              <button class="btn-counter" @click="prodAmounth--">-</button>
              <p class="product-amount"> {{ prodAmounth }} </p>
              <button class="btn-counter" @click="prodAmounth++">+</button>
            </div>
            <button class="btn">
              <router-link to="/basket">Купить </router-link>
            </button>
            <!-- <router-link to="/basket">
              <button class="btn">Купить</button>
            </router-link> -->
          </div>
        </div>
      </div>
      <div class="product-card__full-disc">
        <h3>Описание</h3>
        <p>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве –
          у
          нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным
          помощником.
          Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта
          работы
          с медными дистилляторами.

          Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд
          преимуществ,
          таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются,
          как
          латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного
          аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.

          Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом
          высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в
          натуральности
          которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного
          куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product__favorite::after {
  content: url(../assets/img/logos/favorite_ico.svg);
  width: 40px;
  height: 40px;
}
</style>

<script>
export default {
  data () {
    return {
      prodAmounth: 1
    }
  }
}
</script>
