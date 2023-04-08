<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
  
      <div class="books-card">
        <div class="image">
          <img src="cover_id"
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
    name: 'BookDetails',
    props:{
      title : String,
      id : Number
    }
  
  }
  
  </script>
  
  <style>
  
  
  
  </style>