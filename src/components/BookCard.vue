<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="books-card">
      <div class="image">
        <img src="../assets/harry_cover.jpeg"
        alt="Le jour où les étoiles se sont éteintes"
        width="140"
        height="214.6"
        title="Le jour où les étoiles se sont éteintes de Nine Gorman et Marie Alhinho">
      </div>

      <div class="légende">
        <h2>{{title}}</h2>
        
      </div>
    </div>

  </body>

</template>

<script>
// import { stringLiteral } from '@babel/types';



export default {
  name: 'BookCard',
  props:{
    title : String
  }

}

</script>

<style>




h2,p{
  background-color: rgb(240, 254, 239);
  padding : 5px;
  margin: 5px;
  border-radius : 10px;
  border : 1px solid rgb(226, 226, 226);
  font-size: 1em;
  font-family: 'Times New Roman', Times, serif;
  text-align: left;
  display: inline-block;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
}


img{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
  /* 
  
  background-color: rgb(213, 213, 212);
  padding : 5px;
  margin: 5px;
  border : 1px solid rgb(116, 115, 115); */
  font-size: 1em;
  text-align: left;
  display: inline-block;
  transition: transform .1s;
}

h2:hover{
  color : rgb(73, 191, 100);
  
}

.books-gallery{

background-color: rgb(254, 254, 254);
padding : 5px;
margin: 5px;
border-radius : 10px;
/* border : 1px solid rgb(145, 144, 144); */
font-size: 1em;
text-align: center;
display: flex;

}



</style>