<template>
  <div class="product-item">
    <input type="checkbox" class="product__favorite">
    <div class="product">
      <div class="sale-flag">
        <p>SALE</p>
      </div>
      <router-link to="/catalog/product" class="prod-link">
        <div class="product__img">
          <img src="@/assets/img/catalog_page/product_img/prod_1.jpg" alt="">
        </div>
        <div class="product__info">
          <p class="product__name">Медный чайник с фарфоровой ручкой</p>
          <p class="product__price">1 953 грн</p>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem'
}
</script>

<style lang="scss" scoped>
.product__favorite::after {
  content: url(@/assets/img/logos/favorite_ico.svg);
  width: 40px;
  height: 40px;
}
.prod-link {
  color: black;
}
</style>
