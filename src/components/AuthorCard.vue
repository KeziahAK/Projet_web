<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="author-card">
      <div class="image">
        <img src="https://covers.openlibrary.org/a/olid/OL27349A-M.jpg"
        alt="Author photo"
        width="140"
        height="214.6"
        title="Author Cover"/>
      </div>

      <div class="légende">
        <h2>{{name_author}} </h2>
        <!-- <p>{{ author_id }}</p> -->
        
      </div>
    </div>

  </body>

</template>

<script>
// import { stringLiteral } from '@babel/types';



export default {
  name: 'AuthorCard',
  props:{
    name_author : String,
    author_cover_id :String,
    author_id :String
    
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
  text-align: center;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.4);
  
}


img{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
  font-size: 1em;
  text-align: left;
  
  transition: transform .1s;
}

h2:hover{
  color : rgb(73, 191, 100);
  
}

.author-gallery{

background-color: rgb(254, 254, 254);
padding : 5px;
margin: 5px;
border-radius : 10px;
/* border : 1px solid rgb(145, 144, 144); */
font-size: 1em;
text-align: center;
display:flex;
flex-wrap: wrap;



}

img:hover{
-ms-transform: scale(1.07); /* IE 9 */
-webkit-transform: scale(1.07); /* Safari 3-8 */
transform: scale(1.07);
}



</style>