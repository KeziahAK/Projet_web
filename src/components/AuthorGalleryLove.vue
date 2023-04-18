<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
  <div class="AuthorLovegallery">
    <label for="book-sort">Trier par : </label>
            <select v-model="authorsSortType" id="book-sort">
              <option value="AZAuthor">Noms auteurs de A à Z</option>
              <option value="ZAAuthor">Noms auteurs de Z à A</option>
            </select>

    
    <div class="LoveGallery">
      <AuthorCardLove v-for = "book in authorsOrganizedData" :key="book.id" :name_author="book.authors[0].name" :author_id= "book.authors[0].key"/>
    </div> 
  </div> 


  </body>

</template>

<script>
import AuthorCardLove from "./AuthorCardLove.vue"
import { getBookData} from '../services/BookAPI.js'



export default {
  name: 'AuthorGalleryLove',
  components:{
    AuthorCardLove
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
      const book = await getBookData()
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