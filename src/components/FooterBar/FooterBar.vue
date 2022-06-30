<template>
  <footer class="footer" id="footer">
    <div class="f-wrapper">
      <div class="footer__item f-logo">
        <div class="logo">
          <a href="#"><img src="../../assets/img/logos/logo.svg" alt="logo" /></a>
        </div>
        <p>
          © 2021 “Copper Pro”<br />
          Все права защищенны
        </p>
        <p class="confidence"><a href="#">Политика конфиденциальности</a></p>
      </div>
      <div class="footer__item f-nav">
        <h3>Навигация</h3>
        <ul class="f-nav">
          <li class="f-nav__item">
            <router-link to="/" class="f-nav__item">Главная</router-link>
          </li>
          <li class="f-nav__item">
            <router-link to="/catalog" class="f-nav__item">Каталог</router-link>
          </li>
          <li class="f-nav__item">
            <router-link to="/about" class="f-nav__item">О нас</router-link>
          </li>
          <li class="f-nav__item">
            <a href=""></a>
            <!-- <router-link class="f-nav__item">Контакты</router-link> -->
          </li>
        </ul>
      </div>
      <div class="footer__item f-catalog">
        <h3>Каталог</h3>
        <ul class="catalog">
          <li class="catalog__item">
            <a href="" class="catalog__link">Для эфирных масел</a>
          </li>
          <li class="catalog__item">
            <a href="" class="catalog__link">Для гидролатов</a>
          </li>
          <li class="catalog__item">
            <a href="" class="catalog__link">Медная посуда</a>
          </li>
          <li class="catalog__item">
            <a href="" class="catalog__link">Аксессуары из меди</a>
          </li>
          <li class="catalog__item">
            <a href="" class="catalog__link">Скидки и предложения</a>
          </li>
        </ul>
      </div>
      <div class="footer__item f-contact">
        <h3>Контакты</h3>
        <ul class="contact">
          <li class="contact__item">
            <p>
              Бажана 8-Б, Киев,<br />
              02132 Украина
            </p>
          </li>
          <li class="contact__item">
            <a href="tel:+380969906756">+38 (096) 990 67 56</a>
          </li>
          <li class="contact__item">
            <a href="mailto:a.alambik@gmail.com">a.alambik@gmail.com</a>
          </li>
          <li class="contact__item">
            <div class="social-links">
              <ul class="social">
                <li class="social__item">
                  <a href="https://twitter.com/?lang=ru" target="blank" class="social__link">
                    <svg>
                      <use xlink:href="../../assets/img/logos/sprites/logos_sprite.svg#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a href="https://www.facebook.com/" target="blanck" class="social__link">
                    <svg>
                      <use xlink:href="../../assets/img/logos/sprites/logos_sprite.svg#facebook"></use>
                    </svg>
                  </a>
                </li>
                <li class="social__item">
                  <a href="https://www.instagram.com/" target="blanck" class="social__link">
                    <svg>
                      <use xlink:href="../../assets/img/logos/sprites/logos_sprite.svg#instagram"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: url(../../assets/img/footer_BG.webp) no-repeat center center;
  background-size: cover;
}
</style>

<script>
export default {
  name: 'FooterBar'
}
</script>
