<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="BooksLoveGallery">
      <!-- Tri par ordre alphabéthique -->
      <bookGalleryOptions v-model:booksSortType="booksSortType"/>
      <SearchBar v-model:searchBook="searchBook" @search="searchText"/>

      <div class="BooksGallery">

        <!-- <BookCard v-for = "book in booksOrganizedData " :key="book.key" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg'" :name_author="book.authors_name[0]" :date="book.first_publish_year"/> -->
        <BookCard v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg'" :date="book.first_publish_year" :name_author="book.author_name[0]"/>
      </div>
  </div>

  </body>

</template>

<script>
import {  getImage, getAllBookData} from '../services/BookAPI.js'
import BookCard from './BookCard.vue'
import BookGalleryOptions from './BookGalleryOptions.vue'
import SearchBar from './SearchBar.vue'



export default {
  name: 'BookGalleryLove',

  components:{
    BookCard,
    BookGalleryOptions,
    SearchBar
  },

  data(){
    return{
      bookData: [],
      imageData : [],
      booksSortType: localStorage.getItem("booksSortType") || "AZName",
      searchBook: localStorage.getItem("searchBook"),
      color : '#1f9c49'
    }
  },


  created: function(){
    this.Book()
    this.Image()
    
  },

  methods: {

    async Book() {
      try {
        const allBookData = await getAllBookData()
        this.bookData = allBookData
      } catch (error) {
        console.error(error)
      }
    },



// async Book(){
//       const book = await getBookDatasanspage()
//       this.bookData = book.docs
//     },



  async Image(){
      const id = this.book.cover_i;
      this.imageData = await getImage(id)
      
    }
    
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

      if (this.searchBook !== "") {
        data = data.filter(function(book) {
          return book.title.toLowerCase().includes(this.searchBook.toLowerCase())
        }.bind(this))
      }

      if(reversed) data = data.reverse()
      return data
    },
		
  } 


}

</script>

<style>


</style>