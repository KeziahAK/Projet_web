<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="BooksActionGallery">
      <!-- Tri par ordre alphabéthique -->
      <bookGalleryOptions v-model:booksSortType="booksSortType"/>

      <div class="BooksGallery">

        <BookCard v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg'" :date="book.first_publish_year" :name_author="book.author_name[0]"/>
      </div>
  </div>

  </body>

</template>

<script>
import { getAllBookDataAction,  getImage} from '../services/BookAPI.js'
import BookCard from './BookCard.vue'
import BookGalleryOptions from './BookGalleryOptions.vue'



export default {
  name: 'BookGalleryAction',

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

  // watch: {
  //   booksSortType: function(newBooksSortType){
  //     localStorage.setItem("booksSortType", newBooksSortType)
  //   }
  // },

  created: function(){
    this.Book()
    this.Image()
    
  },

  methods: {
    async Book() {
      try {
        const allBookData = await getAllBookDataAction()
        this.bookData = allBookData
      } catch (error) {
        console.error(error)
      }
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