<template>
  <main class="catalog">
    <div class="catalog-wrapper">
      <h2>Каталог</h2>
      <div class="catalog-category">
        <div class="catalog-category__item oil">
          <h3>Для эфирных масел</h3>
        </div>
        <div class="catalog-category__item gidrolat">
          <h3>Для гидролатов</h3>
        </div>
        <div class="catalog-category__item dishes">
          <h3>Медная посуда</h3>
        </div>
        <div class="catalog-category__item accessories">
          <h3>Аксесуары</h3>
        </div>
      </div>
      <div class="catalog-sort">
        <input type="text" class="inpt__search" placeholder="Поиск">
        <div class="catalog-sort__select">
          <p>Сортировка:</p>
          <select name="sort" id="sort-prod">
            <option value="price" selected>По цене</option>
            <option value="price">По дате</option>
            <option value="price">По чему либо ещё</option>
          </select>
        </div>
      </div>
      <div class="prod-list">
        <CatalogItem v-for="CatalogItem in 20" :key="CatalogItem" />
      </div>
    </div>
  </main>
</template>

<script>
import CatalogItem from '@/components/product/ProductItem.vue'
export default {
  name: 'CatalogView',
  components: {
    CatalogItem
  },
  data () {
    return {
      itemData: ''
    }
  },
  mounted () {
    // fetch('https://github.com/Bohbor/db/blob/master/db.json', { mode: 'no-cors' })
    //   .then(response => response.json())
    //   .then(json => {
    //     this.itemData = json
    //     console.log(this.itemData)
    //   })
    // fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    //   .then(response => response.json())
    //   .then(json => {
    //     const arr = json
    //     console.log(arr)
    //   })
  }
}
</script>

<style lang="scss">
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

.prod-link {
  display: block;
}
</style>
