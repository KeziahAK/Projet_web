<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
  
      <div class="author-card">
        <div class="image">
          <img :src="author_cover"
          alt="Author photo"
          width="140"
          height="214.6"
          title="Author Cover"/>
        </div>
  
        <div class="légende">
          <h2>{{name_author}} </h2>
          
        </div>
      </div>
  
    </body>
  
  </template>
  
  <script>

  
  export default {
    name: 'AuthorCard',
    props:{
      name_author : String,
      author_id :String,
      author_cover : String,
      
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


.image{

  border-radius: 10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
  font-size: 1em;
  text-align: left;
  
  transition: transform .1s;
}

h2:hover{
  color : rgb(73, 191, 100);
  
}

.AuthorGallery{

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
  box-shadow: 0px 6px 15px rgba(29, 108, 36, 0.7);
}

.image:hover{
-ms-transform: scale(1.07); /* IE 9 */
-webkit-transform: scale(1.07); /* Safari 3-8 */
transform: scale(1.07);
}

  
  </style>