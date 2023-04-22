<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
  <div class="AuthorFantasticGallery">

    <authorGalleryOptions v-model:authorsSortType="authorsSortType"/>

    
    <div class="AuthorGallery">
      <AuthorCard v-for = "book in authorsOrganizedData" :key="book.id" :name_author="book.authors[0].name" :author_id= "book.authors[0].key"/>
    </div> 
  </div> 


  </body>

</template>

<script>
import AuthorCard from "./AuthorCard.vue"
import { getBookDataFantastic} from '../services/BookAPI.js'
import AuthorGalleryOptions from "./AuthorGalleryOptions.vue"



export default {
  name: 'AuthorGalleryFantastic',
  components:{
    AuthorCard,
    AuthorGalleryOptions
},

  data(){
    return{
      authorData:[],
      authorsSortType: localStorage.getItem("authorsSortType") || "AZName",
      
    }
  },

  created: function(){

    this.Author()
    
  },

  methods: {

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