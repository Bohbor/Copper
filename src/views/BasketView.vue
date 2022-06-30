<template>
  <div class="basket">
    <div class="basket-wrapper">
      <h2>Корзина</h2>
      <div class="basket-content">
        <div class="basket__list">
          <div class="basket__titles">
            <p class="prod-name-title">Товар</p>
            <p class="prod-amount-title">Количество</p>
            <p class="prod-price-title">Цена</p>
          </div>
          <div class="basket__item product">
            <div class="product__img">
              <img src="" alt="prod_img">
            </div>
            <h3 class="product__name">Дистиллятор для получения гидролата 8л</h3>
            <div class="product__counter">
              <button class="btn-counter btn-plus">-</button>
              <p class="product__amount"> {{ itemAmount }} </p>
              <button class="btn-counter btn-minus">+</button>
            </div>
            <p class="product__price"><span> {{ price.item2 }}</span><span> грн</span></p>
            <button class="btn-delete">X</button>
          </div>
          <div class="basket__item product">
            <div class="product__img">
              <img src="" alt="prod_img">
            </div>
            <h3 class="product__name">Дистиллятор для получения гидролата 8л </h3>
            <div class="product__counter">
              <button class="btn-counter btn-plus">-</button>
              <p class="product__amount">4</p>
              <button class="btn-counter btn-minus">+</button>
            </div>
            <p class="product__price"><span> {{ price.item3 }}</span><span> грн</span></p>
            <button class="btn-delete">X</button>
          </div>
          <div class="basket__item product">
            <div class="product__img">
              <img src="" alt="prod_img">
            </div>
            <h3 class="product__name">Дистиллятор для получения гидролата 8л</h3>
            <div class="product__counter">
              <button class="btn-counter btn-plus">-</button>
              <p class="product__amount">{{ itemAmount }}</p>
              <button class="btn-counter btn-minus">+</button>
            </div>
            <p class="product__price"><span> {{ price.item1 }} </span><span> грн</span></p>
            <button class="btn-delete">X</button>
          </div>
          <button class="btn-return"><router-link to="/catalog" style="color: #031412">Назад к покупкам</router-link></button>
        </div>
        <div class="basket__sum">
          <div class="total-price">
            <h3>Итого</h3>
            <h2> 19 000</h2>
          </div>
          <p class="promo-msg"></p>
          <button class="btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      itemAmount: 1,
      price: {
        item1: 1000,
        item2: 2000,
        item3: 4000
      }
    }
  }
}
</script>
