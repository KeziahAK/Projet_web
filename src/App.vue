<template>
  <header>
    <div class="bannière">
      <h1>My virtual library</h1>
    </div>

  </header>

  <nav>
    <div>
        
        <a href="#">Nouveautés</a>
        <a href="#">Parcourir</a>
        <a href="#">Ma bibliothèque</a>
        <a href="#">Recherche</a>
        
    </div>

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

.nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
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

.books-gallery{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap; /*retour à la ligne*/
    justify-content: space-between; /* les éléments sont étirés sur tout l'axe (il y a de l'espace entre eux) ; */
    height: 250px; /* Un peu de hauteur pour que les éléments aient la place de bouger */
    align-items: stretch;
    align-content: stretch;
}
</style>
