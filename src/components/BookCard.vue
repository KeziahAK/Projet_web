<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="books-gallery">
      <div class="image">
        <img src="../assets/livre.jpg"
        alt="Le jour où les étoiles se sont éteintes"
        width="140"
        height="214.6"
        title="Le jour où les étoiles se sont éteintes de Nine Gorman et Marie Alhinho">
      </div>

      <div class="légende">
        <h2>Le jour où les étoiles se sont éteintes</h2>
        <p>Nine Gorman et Marie Alhinho</p>
      </div>
    </div>

  </body>

</template>

<script>


export default {
  name: 'BookCard'

}

</script>

<style>


.books-gallery{

  /* display: flex;
  flex-wrap:nowrap; */
  border-radius: 4px;
  width: 150px;
  
  text-align: justify;
  padding : 10px;
  margin: 10px;

  background-color: #F1C864;
}

h2{
  font-size: 10px;
}


img{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
}

h2:hover{
  color : rgb(45, 98, 148);
}


</style>