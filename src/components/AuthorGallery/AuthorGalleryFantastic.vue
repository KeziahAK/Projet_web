<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
  <div class="AuthorFantasticGallery">


    <div v-if="isLoading" class="loading-page">
            <p>Loading...</p>
            <img src="https://i.gifer.com/E0mD.gif" />
      </div>
    
    <div v-else class="AuthorGallery">
      <authorGalleryOptions v-model:authorsSortType="authorsSortType"/>

      <AuthorCard v-for = "book in authorsOrganizedData " :key="book.id" :author_cover="'https://covers.openlibrary.org/a/olid/'+book.author_key[0]+'-M.jpg'" :name_author="book.author_name[0]"/>
    </div> 
  </div> 


  </body>

</template>

<script>
import AuthorCard from "../Cards/AuthorCard.vue"
import { getAllBookDataFantastic, getAuthorImage} from '../../services/BookAPI.js'
import AuthorGalleryOptions from "../Options/AuthorGalleryOptions.vue"



export default {
  name: 'AuthorGalleryFantastic',
  components:{
    AuthorCard,
    AuthorGalleryOptions
},

  data(){
    return{
      authorData:[],
      imageData : [],
      authorsSortType: localStorage.getItem("authorsSortType") || "AZName",
      isLoading:true
    }
  },

  created: function(){

    this.Author()
    this.Image()
    
  },

  methods: {

    async Author(){
      try {
        this.isLoading=true
        const allAuthorData = await getAllBookDataFantastic()
        this.authorData = allAuthorData
        this.isLoading=false
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