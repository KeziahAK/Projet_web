<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
    <link rel="icon" href="./asset/logo.png">

</head>
  <header>
    
    <App_header></App_header>
  
  </header>  
  
  <main>
    
    <div class="books-gallery">
      <BookGalleryLove />
    </div>

    <div class="author-gallery">
      <AuthorGalleryLove/>
    </div>
   

  </main>

  <footer>

    <App_footer></App_footer>

  </footer>

  
</template>

<script>



import BookGalleryLove from './components/BookGalleryLove.vue'
import AuthorGalleryLove from './components/AuthorGalleryLove.vue'
import App_header from './components/header.vue'
import App_footer from './components/Footer.vue'
// import { getAuthorImage} from './services/BookAPI.js';


export default {
  name: 'App',
  components:{
    BookGalleryLove,
    App_header,
    AuthorGalleryLove,
    App_footer
  },

  
}

</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: #080808;
  -webkit-font-smoothing :antialiased;
  font-size: 10px;
  background: rgb(0, 0, 0);

}


</style>
