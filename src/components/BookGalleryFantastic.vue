<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
  
      <!-- Tri par ordre alphabéthique -->
      <label for="book-sort">Trier par : </label>
              <select v-model="booksSortType" id="book-sort">
                <option value="AZBook">Noms livres de A à Z</option>
                <option value="ZABook">Noms livres de Z à A</option>
                <option value="AZAuthor">Noms auteurs de A à Z</option>
                <option value="ZAAuthor">Noms auteurs de Z à A</option>
              </select>
  
      <div class="books-gallery">
  
        <!-- <BookCard v-for = "book in getFilteredBooks " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name"/> -->
  
        <BookCardLove v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" />
  
      </div>
  
    </body>
  
  </template>
  
  <script>
  import { getBookDataFantastic,getImage} from '../services/BookAPI.js'
  import{BookCardFantastic} from './BookCardLove.vue'
  
  
  
  export default {
    name: 'BookGalleryFantastic',
  
    components:{
      BookCardLove
    },
  
    data(){
      return{
        bookData: [],
        imageData : [],
        booksSortType: localStorage.getItem("booksSortType") || "AZName",
      }
    },
  
    watch: {
      booksSortType: function(newBooksSortType){
        localStorage.setItem("booksSortType", newBooksSortType)
      }
    },
  
    created: function(){
      this.Book()
      this.Image()
      
    },
  
    methods: {
      async Book(){
        const book = await getBookDataFantastic()
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