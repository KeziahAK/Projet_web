<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="BooksLoveGallery">
      <!-- Tri par ordre alphabéthique -->
      <bookGalleryOptions v-model:booksSortType="booksSortType"/>


      <div class="BooksGallery">

        <!-- <BookCard v-for = "book in getFilteredBooks " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name"/> -->

        <BookCard v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name" :date="book.first_publish_year"/>

      </div>
  </div>

  </body>

</template>

<script>
import { getBookData, getImage} from '../services/BookAPI.js'
import BookCard from './BookCard.vue'
import BookGalleryOptions from './BookGalleryOptions.vue'



export default {
  name: 'BookGalleryLove',

  components:{
    BookCard,
    BookGalleryOptions
  },

  data(){
    return{
      bookData: [],
      imageData : [],
      booksSortType: localStorage.getItem("booksSortType") || "AZName",
    }
  },


  created: function(){
    this.Book()
    this.Image()
    
  },

  methods: {
    async Book(){
      const book = await getBookData()
      this.bookData = book.works
    },
    async Image(){
      const id = this.book.cover_id;
      this.imageData = await getImage(id)
      
    },
    
  },

  computed: {

    booksOrganizedData: function(){

      let data = [...this.bookData]
      const reversed = ["ZABook", "ZAAuthor"].includes(this.booksSortType)
      
      if(this.booksSortType == "AZBook" || this.booksSortType =="ZABook"){
        data.sort(function(a,b){return a["title"].localeCompare(b["title"])})

      }

      else{
        data.sort(function(a,b){return a.authors[0]["name"].localeCompare(b.authors[0]["name"])})
      }

      if(reversed) data = data.reverse()
      return data
    },
		
  } 


}

</script>

<style>


</style>