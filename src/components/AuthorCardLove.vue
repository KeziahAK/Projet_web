<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="author-card">
      <div class="image">
        <img src="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
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
  name: 'AuthorCardLove',
  props:{
    name_author : String,
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
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
  
}


img{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
  font-size: 1em;
  text-align: left;
  
  transition: transform .1s;
}

h2:hover{
  color : rgb(73, 191, 100);
  
}

.LoveGallery{

background-color: rgb(0, 0, 0);
padding : 5px;
margin: 5px;
border-radius : 10px;
font-size: 1em;
text-align: center;
display:flex;
flex-wrap: wrap;

}

.author-card{
  background-color: rgb(0, 0, 0);
  padding : 5px;
  margin: 5px;
  border-radius : 10px;
  font-size: 1em;
  /* border: solid 1px #1f9c49; */
  box-shadow: 0px 6px 15px rgba(29, 108, 36, 0.7);
}

img:hover{
-ms-transform: scale(1.07); /* IE 9 */
-webkit-transform: scale(1.07); /* Safari 3-8 */
transform: scale(1.07);
}



</style>