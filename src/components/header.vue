<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="bannière">
      <h1>My virtual library</h1>
    </div>
        
    

  </body>

</template>

<script>



export default {
  name: 'App_header',

  data(){
    return {
      color : '#9cf19f',
      search:""
    }
  }

}

</script>

<style>



.bannière{

  padding:100px;
  /* background: linear-gradient(90deg, #d52a2a, #bf2eba); */ /*faire un dégradé de couleur*/
  background-image: url('../assets/fond.jpeg');
  background-attachment: fixed;
  opacity: 1.;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
  
}

h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  text-align: center;
  opacity:1.;
  color :rgb(172, 245, 166);
}





</style>