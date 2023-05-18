<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="BooksTrendGallery">
      <!-- Tri par ordre alphabéthique -->
      <bookGalleryOptions v-model:booksSortType="booksSortType"/>

      <div v-if="isLoading" class="loading-page">
            <p>Loading...</p>
            <img src="https://i.gifer.com/E0mD.gif" />
      </div>

      <div v-else class="BooksGallery">

        <!-- <BookCard v-for = "book in getFilteredBooks " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name"/> -->

        <BookCardTrend v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_i="'https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg'" :date="book.first_publish_year" :author_name="book.author_name[0]"/>

      </div>
  </div>

  </body>

</template>

<script>
import { getBookDataTrend, getImage} from '../../services/BookAPI.js'
import BookCardTrend from '../Cards/BookCardTrend.vue'
import BookGalleryOptions from '../Options/BookGalleryOptions.vue'




export default {
  name: 'BookGalleryTrend',

  components:{
    BookCardTrend,
    BookGalleryOptions
  },

  data(){
    return{
      bookData: [],
      imageData : [],
      isLoading: true,
      booksSortType: localStorage.getItem("booksSortType") || "AZName",
    }
  },


  created: function(){
    this.Book()
    this.Image()
    
  },

  methods: {
    async Book(){
      this.isLoading=true
      const book = await getBookDataTrend()
      this.bookData = book.works
      this.isLoading=false
    },
    async Image(){
      const id = this.book.cover_i;
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
        data.sort(function(a,b){return a.author_name[0].localeCompare(b.author_name[0])})
      }

      if(reversed) data = data.reverse()
      return data
    },
		
  } 


}

</script>

<style>


</style>