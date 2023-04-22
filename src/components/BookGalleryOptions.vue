<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>
    <div class ="bookGalleryOptions">
      <!-- Tri par ordre alphabéthique -->
      <label for="book-sort">Trier par : </label>
              <select value="booksSortType" @input="onBooksSortTypeChanged" id="book-sort">
                <option value="AZBook">Noms livres de A à Z</option>
                <option value="ZABook">Noms livres de Z à A</option>
                <option value="AZAuthor">Noms auteurs de A à Z</option>
                <option value="ZAAuthor">Noms auteurs de Z à A</option>
              </select>
  </div>

  </body>

</template>

<script>

export default {
  name: 'BookGalleryOptions',

  props:{
    booksSortType : String
  },

  emits:["update:booksSortType"],

  watch: {
    booksSortType: function(newBooksSortType){
      localStorage.setItem("booksSortType", newBooksSortType)
    }
  },

  methods: {
    onBooksSortTypeChanged(event){
      this.$emit('update:booksSortType',event.target.value)
    }
    
  },




}

</script>

<style>


</style>