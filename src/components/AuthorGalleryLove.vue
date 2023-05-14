<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
  <div class="AuthorLoveGallery">

    <authorGalleryOptions v-model:authorsSortType="authorsSortType"/>

    
    <div class="AuthorGallery">
      <AuthorCard v-for = "book in authorsOrganizedData " :key="book.id" :author_cover="'https://covers.openlibrary.org/a/olid/'+book.author_key[0]+'-M.jpg'" :name_author="book.author_name[0]"/>

    </div> 
  </div> 


  </body>

</template>

<script>
import AuthorCard from "./AuthorCard.vue"
import { getAllBookData, getAuthorImage} from '../services/BookAPI.js'
import AuthorGalleryOptions from "./AuthorGalleryOptions.vue"



export default {
  name: 'AuthorGalleryLove',
  components:{
    AuthorCard,
    AuthorGalleryOptions
},

  data(){
    return{
      authorData:[],
      imageData : [],
      authorsSortType: localStorage.getItem("authorsSortType") || "AZName",
      
    }
  },

  created: function(){

    this.Author()
    this.Image()
    
  },

  methods: {

    async Author(){
      try {
        const allAuthorData = await getAllBookData()
        this.authorData = allAuthorData
      } catch (error) {
        console.error(error)
      }
    },

    async Image(){
      const id = this.book.author_key[0];
      this.imageData = await getAuthorImage(id)
      
    }
    
  },

  computed: {

    authorsOrganizedData: function(){

      let data = [...this.authorData]
      const reversed = ["ZAAuthor"].includes(this.authorsSortType)
      data.sort(function(a,b){return a.author_name[0].localeCompare(b.author_name[0])})
      if(reversed) data = data.reverse()
      return data
    },


		
  } 

}

</script>

<style>





</style>