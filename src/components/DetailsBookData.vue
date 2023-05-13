<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
      <div class ="BooksDetailsGallery">

        <div class="BooksGallery">
  
          <DetailsBookCard :key="bookData.key" :title="bookData.title" :cover_id="'https://covers.openlibrary.org/b/id/'+bookData.cover[0]+'-M.jpg'" :Resume="bookData.description" :date="bookData.created[0]"/>
  
        </div>
    </div>
  
    </body>
  
  </template>
  
  <script>
  import { getDetails, getImage} from '../services/BookAPI.js'
  import DetailsBookCard from './BookCard.vue'

  
  
  
  export default {
    name: 'DetailsBookData',
  
    components:{
      DetailsBookCard,
    },
  
    data(){
      return{
        bookData: [],
        imageData : [],
      }
    },
  
  
    created: function(){
      this.Book()
      this.Image()
      
    },
  
    methods: {
      async Book(){
        const id =this.key
        this.bookData = await getDetails(id)
        
      },
      async Image(){
        const id = this.cover;
        this.imageData = await getImage(id)
        
      },
      
    },
  
  
  }
  
  </script>
  
  <style>
  
  
  </style>