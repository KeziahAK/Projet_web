<template>
    <head>
  
      <meta charset="UTF-8">
      <title> Bookshop </title>
    
    </head>
    <body>
  
      <div class="bannière_footer">
        <h3>Voyagez avec My Virtual Library</h3>
        <h4>Lisez, découvrez et faites vous plaisir</h4>
      </div>
          
      
  
    </body>
  
  </template>
  
  <script>
  
  
  
  export default {
    name: 'App_footer',
  
    data(){
      return {
        color : '#9cf19f',
        search:""
      }
    }
  
  }
  
  </script>
  
  <style>
  
  
  
  .bannière_footer{
  
    padding:50px;
    background: linear-gradient(90deg, #a5daa9, #6ebd69); /*faire un dégradé de couleur*/
    /* background-image: url('../assets/fond.jpeg'); */
    background-attachment: fixed;
    opacity: 1.;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
    
  }

  h3{  
    color: white;
  }
  h4{  
    color: white;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
  }

  
  </style>