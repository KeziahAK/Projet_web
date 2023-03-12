<template>
  <header>
    <div class="bannière">
      <h1>My virtual library</h1>
    </div>

  </header>

  <nav>


    <ul>
        <li><a href="#home">Nouveautés</a></li>
        <li><a href="#Parcourir">Parcourir</a></li>
        <li><a href="#Ma bibli">Ma Bibliothèque</a></li>
        <li style="float:right"><a class="active" href="#recherche">Recherche</a></li>
    </ul>



    
  </nav>

  <main>

    <div class="books-gallery">
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>
      <BookCard/>

    </div>

  </main>

  <footer>

  </footer>

  
</template>

<script>

import BookCard from './components/BookCard.vue'

export default {
  name: 'App',
  components:{
    BookCard
  }
}

</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
  color: #080808;
  -webkit-font-smoothing :antialiased;
  font-size: 10px;

}

.active {
    background-color: #84d086;
    border-radius: 10px;
}


ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #7e7d7d;
    border: 1px solid e7e7e7;
    border-radius: 10px;
    /* position: fixed; */
    width: 100%;
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);

}

li {
    float: left;
    
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    border-radius: 10px;
    
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #3d5d4a;
}




.bannière{

  padding:200px;
  /* background: linear-gradient(90deg, #d52a2a, #bf2eba); */ /*faire un dégradé de couleur*/
  background-image: url('./assets/fond.jpeg');
  background-attachment: fixed;
  opacity: 1.;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
  
}

h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  text-align: center;
  opacity:1.;
  color :antiquewhite;
}


</style>
