<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookdetails </title>
    
    </head>
    <body>

    
  
      <div class="author-details">

        
            <div class="hero">

                <div class="image_author">
            
                    <img src="https://covers.openlibrary.org/b/id/12547191-M.jpg"
                    class="author"
                    alt="book-image"
                    width="140"
                    height="214.6"
                    title="book">


                </div>

                <p>{{ name }}</p>
                <p>{{ birth_date }}</p>

            </div>
      </div>

  
    </body>
  
  </template>
  
  <script>
  // import { stringLiteral } from '@babel/types';
  
  
  
  export default {
    name: 'BookDetails',
    props:{
      name : String,
      id : Number,
      birth_date: String

    }
  
  }
  
  </script>
  
  <style>

  .image_author{
    text-align: left
  }

  .author_details{
    display:inline-block;
  }
  


  
  
  </style>