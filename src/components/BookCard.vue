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
        <h2><strong>Le jour où les étoiles se sont éteintes</strong><br>Nine Gorman et Marie Alhinho</h2>
        
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




h2,p{
  background-color: rgb(221, 221, 220);
  padding : 5px;
  margin: 5px;
  border-radius : 10px;
  border : 1px solid rgb(136, 135, 135);
  font-size: 1em;
  font-family: 'Times New Roman', Times, serif;
  text-align: left;
  display: inline-block;
}


img{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
  background-color: rgb(213, 213, 212);
  padding : 5px;
  margin: 5px;
  border-radius : 10px;
  border : 1px solid rgb(116, 115, 115);
  font-size: 1em;
  text-align: left;
  display: inline-block;
}

h2:hover{
  color : rgb(45, 98, 148);
  
}

.books-gallery{

background-color: rgb(254, 254, 254);
padding : 5px;
margin: 5px;
border-radius : 10px;
border : 1px solid rgb(145, 144, 144);
font-size: 1em;
text-align: center;
display: inline-block;

}


</style>