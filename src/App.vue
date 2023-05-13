<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
    <link rel="icon" href="./asset/logo.png">

</head>
  <header>
    
    <App_header></App_header>
  
  </header>  
  
  <main>

    <div>
      <router-view></router-view>
    </div>
   

  </main>

  <footer>

    <App_footer></App_footer>

  </footer>

  
</template>

<script>



import App_header from './components/header.vue'
import App_footer from './components/Footer.vue'



export default {
  name: 'App',
  components:{
    App_header,
    App_footer
  },

  
}

</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: #080808;
  -webkit-font-smoothing :antialiased;
  font-size: 10px;
  background: rgb(0, 0, 0);

}


</style>
