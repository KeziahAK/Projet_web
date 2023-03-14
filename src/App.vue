<template>

  <main>
    <App_header></App_header>
    <div class="books-gallery">

      
      <!-- <BookCard name = "Nine Gorman & Marie Alhino" top_work="La nuit où les étoiles se sont éteintes"/> -->
      <BookCard :title = "bookData[0].title"/>
      


    </div>

  </main>

  <footer>

  </footer>

  
</template>

<script>

import BookCard from './components/BookCard.vue'
import App_header from './components/header.vue'
import { getBookData } from './BookAPI.js';

export default {
  name: 'App',
  components:{
    BookCard,
    App_header
  },

  data(){
    return{
      bookData: []
    }
  },

  created(){
    this.getData()
  },

  methods: {
    async getData(){
      const book = await getBookData()
      this.bookData = book.works
    }
  }
}

</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
  color: #080808;
  -webkit-font-smoothing :antialiased;
  font-size: 10px;

}



</style>
