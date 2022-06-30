<template>
  <div class="header-slider">
    <div class="header-slider__item">
      <div class="header-slider__text">
        <h1 class="main-title">Хит продаж</h1>
        <h3 class="prod_name">Дистиллятор для<br> эфирных масел</h3>
        <div class="prod__price">
          <span>Цена</span>
          <span>4 906 грн</span>
        </div>
        <button class="btn"><router-link to="/catalog/product">Купить</router-link></button>
      </div>
      <div class="header-slider__img">
        <img src="@/assets/img/home_page/pdoduct_img.png" alt="" />
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.main-title {
  position: relative;
  &::after {
    content: url(../../assets/img/Line.svg);
    position: absolute;
    height: 1px;
    top: 50px;
    left: 0px;
  }
}
</style>
