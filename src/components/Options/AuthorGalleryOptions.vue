<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="authorGalleryOptions">
      <label for="book-sort">Trier par : </label>
              <select value="authorsSortType" @input="onBooksSortTypeChanged" id="author-sort">
                <option value="AZAuthor">Noms auteurs de A à Z</option>
                <option value="ZAAuthor">Noms auteurs de Z à A</option>
              </select>
  </div>

  </body>

</template>

<script>

export default {
  name: 'AuthorGalleryOptions',

  props:{
    authorsSortType : String
  },

  emits:["update:authorsSortType"],

  watch: {
    booksSortType: function(newAuthorsSortType){
      localStorage.setItem("authorsSortType", newAuthorsSortType)
    }
  },

  methods: {
    onBooksSortTypeChanged(event){
      this.$emit('update:authorsSortType',event.target.value)
    }
    
  },




}

</script>

<style>


</style>