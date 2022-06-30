<template>
  <header class="about-header">
    <div class="banner">
      <div class="about-header__text">
        <h1>О нас</h1>
        <hr />
        <p class="quote">Мы любим все, что сделано из меди</p>
        <div class="author">
          <p>
            <span>Иван<br> Иванов</span>
          </p>
          <img src="../assets/img/about_page/signature.png" alt="img" />
        </div>
      </div>
      <div class="about-header__img">
        <img src="../assets/img/about_page/about_banner_img.png" alt="abuot-img" />
      </div>
    </div>
  </header>
  <main class="main">
    <section class="clients">
      <div class="clients-wrapper">
        <div class="clients__text">
          <h2>Наши<br> клиенты</h2>
          <p>Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения
            для
            каждого из них</p>
        </div>
        <div class="clients__counter">
          <h3>Счетчик клиентов</h3>
          <p class="counter_number">12346</p>
        </div>
      </div>
    </section>
    <section class="history">
      <div class="history-wrapper">
        <h2>Наша история</h2>
        <div class="history__text">
          <div class="column">
            <p>Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. Chartreuse Disrupt посадил птицу на лебеду jianbing.
              Хэштег для позднего завтрака с питьевым уксусом, скейтборд с тильдой холодного отжима.
            </p>
            <p>Крафтовый пивной шалфей занимает кардиган из ретро-фарма и стол, а также фланель из кейтара для
              гастропабов.
            </p>
            <p>Unicorn jean шорты quinoa подлинный cronut tilde twee YOLO, потроха эстетичный yuccie iPhone truffaut
              seitan.
            </p>
            <p>Создавайте пивные путники, лесорубы, суккуленты своими руками, Helvetica Vexillologist, следующий уровень
              разбудили толстовку с капюшоном keffiyeh tumblr schlitz chambray пишущую машинку.</p>
            <p>Плитка метро шестиугольника keffiyeh.</p>
          </div>
          <div class="column">
            <p>Синтетический этический биодизельный. Горькая борода шалфей лоу-фай. Пало Санто буквально пледы лампочки
              Эдисона, вилы пить уксус аутентичный пабст уличное искусство метро плитка крафтовое пиво одно
              происхождение
              кофе шаман ловец снов.
            </p>
            <p>Williamsburg sriracha portland, ассиметричная свиная грудинка для микродозирования la croix 3 wolf moon
              umami.</p>
            <p>Четырехдолларовые тосты, модный топор трюффо, ломо-клетчатый мех PBR & B Scester Остин Палео Thundercats
              семейная реликвия Knausgaard от фермы до стола.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="choose-us">
      <div class="choose-us__wrapper">
              <h2>Почему выбирают нас</h2>
      <div class="choose-us__content">
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico1.svg" alt=""></div>
          <h5>Аутентичность</h5>
          <p class="visible-text">Медное перегонное оборудование используется для получения эфирных масел с
            незапамятных времен.</p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico2.svg" alt=""></div>
          <h5>Изысканность</h5>
          <p class="visible-text">Наши изделия из меди являются очень практичными. В то же время они наполнят особой
            магией ваш дом или рабочее....</p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico3.svg" alt=""></div>
          <h5>Честная оплата</h5>
          <p class="visible-text" :class="{ showText: show}">Мы стремимся предоставить лучший товар по лучшей цене с сервисом высокого уровня. Но
            все начинается c....
          </p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico4.svg" alt=""></div>
          <h5>Большой ассортимент</h5>
          <p class="visible-text" :class="{ showText: show}">У нас есть все от миниатюрных настольных паровых дистилляторов эфирных масел до
            крупногабаритного оборудования...
          </p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico5.svg" alt=""></div>
          <h5>Доставка по всему миру</h5>
          <p class="visible-text">Вы можете получить нашу продукцию в кратчайшие сроки в любую точку земного шара.
          </p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico6.svg" alt=""></div>
          <h5>Гарантия качества</h5>
          <p class="visible-text">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
            произведенной продукции. </p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item"  :class="{ showeText: show}">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico7.svg" alt=""></div>
          <h5>Удобство в использовании</h5>
          <p class="visible-text">Наши изделия из меди имеют уникальный дизайн, который разрабатывался нами с целью
            получения максимальной...</p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
        <div class="choose-us__item">
          <div class="c-logo"><img src="../assets/img/about_page/choose_us_ico8.svg" alt=""></div>
          <h5>Забота об окружающей среде</h5>
          <p class="visible-text">От 2 до 5% от стоимости каждого приобретенного товара в нашем магазине мы направляем
            на защиту....
          </p>
          <p class="hiden-text" :class="{ showText: show}">Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных
            времен.Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.</p>
          <button class="btn-show-more" @click="showMore">Читать больше</button>
        </div>
      </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      show: false
    }
  },
  methods: {
    showMore () {
      this.show = !this.show
    }
  }
}

</script>

<style lang="scss" scoped>

@mixin background-center-cover($path) {
  .showText {
    display: block;
  }
  background: url($path);
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
}
.about-header {
  @include background-center-cover('../assets/img/about_page/aout_banner_BG.webp');
}
.quote {
  padding-left: 70px;
  position: relative;
  &::after {
    content: url(../assets/img/quote_ico.svg);
    position: absolute;
    bottom: -5px;
    right: 0px;
  }
  &::before {
    content: url(../assets/img/quote_ico.svg);
    position: absolute;
    top: -10px;
    left: 0px;
  }
}
.history {
  @include background-center-cover('../assets/img/about_page/history_BG.png');
}
.counter_number {
  background: url(../assets/img/about_page/counter_BG.png);
  background-clip: text;
  color: transparent;
}
.choose-us {
  @include background-center-cover('../assets/img/about_page/about_banner_BG.png');
}
.c-logo {
  background: linear-gradient(278.32deg, #0b3f37 -7.03%, #cb8d62 136.33%);
}
.btn-show-more::after {
  content: url(../assets/img/about_page/arrow_brown_down.svg);
  position: absolute;
  top: 50%px;
  right: -15px;
}
</style>
