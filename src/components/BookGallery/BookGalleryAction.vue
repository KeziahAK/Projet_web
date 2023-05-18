<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="BooksActionGallery">

      <div v-if="isLoading" class="loading-page">
            <p>Loading...</p>
            <img src="https://i.gifer.com/E0mD.gif" />
      </div>

      <div v-else class="BooksGallery">
        <bookGalleryOptions v-model:booksSortType="booksSortType"/>
        <SearchBar v-model:searchBook="searchBook" @search="searchText"/>
        <BookCard v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_i+'-M.jpg'" :date="book.first_publish_year" :name_author="book.author_name[0]"/>
      </div>
  </div>

  </body>

</template>

<script>
import { getAllBookDataAction,  getImage} from '../../services/BookAPI.js'
import BookCard from '../Cards/BookCard.vue'
import BookGalleryOptions from '../Options/BookGalleryOptions.vue'
import SearchBar from '../Options/SearchBar.vue'



export default {
  name: 'BookGalleryAction',

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
      isLoading:true,
      searchBook: localStorage.getItem("searchBook"),
    }
  },



  created: function(){
    this.Book()
    this.Image()
    
  },

  methods: {
    async Book() {
      try {
        this.isLoading = true; // Ajouter cette ligne
        const allBookData = await getAllBookDataAction();
        this.bookData = allBookData;
        this.isLoading = false; // Ajouter cette ligne
      } catch (error) {
        console.error(error);
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