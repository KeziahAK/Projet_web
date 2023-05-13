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
            <h2>{{title}}{{ date }} </h2>
            <h3>{{name_author}} </h3>
            <p>{{ Resume}}</p>
          
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
      title :String,
      Resume :String,
      date: String,
      
    }
  
  }
  
  </script>
  
  <style>
  
  
  
  


  
  </style>