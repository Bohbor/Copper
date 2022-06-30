<template>
  <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in 6" :key="slide">
      <div class="carousel__item">
        <div class="review-slider__item">
          <div class="author__img">
            <img src="../../assets/img/home_page/review_author_img.png" alt="">
          </div>
          <h5>Иван Иванов</h5>
          <p class="author__qoute">Наше оборудование прозводится вручную. Мы постоянно производим контроль качества
            произведенной продукции.
            В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки,
            мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
          <p>20.10.21</p>
        </div>
      </div>
    </Slide>
    <template #addons>
      <navigation />
      <pagination />
    </template>
  </Carousel>
</template>

<script>
// import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
export default {
  name: 'reviewSlider',
  components: {
    Carousel,
    Pagination,
    Navigation,
    Slide
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 3,
      snapAlign: 'center',
      itemsToScroll: 1,
      wrapAround: true,
      autoplay: 2000
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      320: {
        itemsToShow: 1,
        snapAlign: 'start'
      },
      // 970px and up
      650: {
        arrow: false,
        itemsToShow: 2,
        snapAlign: 'start'
      },
      // 1024 and up
      1124: {
        itemsToShow: 3,
        snapAlign: 'start'
      }
    }
  })
}
</script>
<style>
</style>
