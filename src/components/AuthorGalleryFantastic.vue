<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
  
      <label for="book-sort">Trier par : </label>
              <select v-model="authorsSortType" id="book-sort">
                <option value="AZAuthor">Noms auteurs de A à Z</option>
                <option value="ZAAuthor">Noms auteurs de Z à A</option>
              </select>
  
      <div class="author-gallery">
       
        <AuthorCardFantastic v-for = "book in authorsOrganizedData" :key="book.id" :name_author="book.authors[0].name" :author_id= "book.authors[0].key"/>
  
      </div > 
  
  
    </body>
  
  </template>
  
  <script>
  import { AuthorCardFantastic } from "./AuthorCardFantastic.vue"
  import { getBookDataFantastic} from '../services/BookAPI.js'
  
  
  
  export default {
    name: 'AuthorGalleryFantastic',
    components:{
      AuthorCardFantastic
  },
  
    data(){
      return{
        authorData:[],
        authorsSortType: localStorage.getItem("authorsSortType") || "AZName",
        
      }
    },
  
    watch: {
      booksSortType: function(newAuthorsSortType){
        localStorage.setItem("authorsSortType", newAuthorsSortType)
      }
    },
  
    created: function(){
  
      this.Author()
      
    },
  
    methods: {
  
      // async Author(){
      //   const id = this.book.authors[0].key;
      //   this.authorData = await getAuthorImage(id)
      // },
  
      async Author(){
        const book = await getBookDataFantastic()
        this.authorData = book.works
      },
      
    },
  
    computed: {
  
      authorsOrganizedData: function(){
  
        let data = [...this.authorData]
        const reversed = ["ZAAuthor"].includes(this.authorsSortType)
        data.sort(function(a,b){return a.authors[0]["name"].localeCompare(b.authors[0]["name"])})
        if(reversed) data = data.reverse()
        return data
      },
  
  
          
    } 
  
  }
  
  </script>
  
  <style>
  
  
  
  
  
  </style>