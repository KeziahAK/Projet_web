<template>
  <header>
    <div class="bannière">
      <h1>My virtual library</h1>
    </div>

  </header>

  <nav>


    <ul>
        <li style="float:left"><a class="virtual_library" href="#my virtual library"><strong>My virtual library</strong> </a></li>
        <li><a href="#home">Nouveautés</a></li>
        <li class="dropdown">
          <a href="#Parcourir" class="dropbtn">Parcourir</a>
            <div class="dropdown-content">
              <a href="#"> Romance</a>
              <a href="#"> Action</a>
              <a href="#"> Suspens</a>
              <a href="#"> Policier</a>
            </div>

          </li>
        <li><a href="#Ma bibli">Ma Bibliothèque</a></li>
        <li style="float:right"><a class="active" href="#recherche">Recherche</a></li>


    </ul>

    
  </nav>

  <main>

    <div class="books-gallery">
      <BookCard name = "Nine Gorman & Marie Alhino" top_work="La nuit où les étoiles se sont éteintes"/>
      <BookCard :name = "bookData[0].name" :top_work="bookData[0].top_work" :image="bookData[0].image"/>


    </div>

  </main>

  <footer>

  </footer>

  
</template>

<script>

import BookCard from './components/BookCard.vue'
import { getBookData } from './BookAPI.js';

export default {
  name: 'App',
  components:{
    BookCard
  },

  data(){
    return{
      bookData: []
    }
  },

  created(){
    this.getData()
  },

  methods: {
    async getData(){
      this.bookData = await getBookData()
    }
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
    box-shadow: 0px 6px 15px rgba(52, 51, 51, 0.5);
}

.virtual_library{
  color:#84d086;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  
}

.virtual_library:hover{
  background-color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #ffffff;
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: #9cf19f;
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius:10px;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #c4f6c5;
  border-radius:10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}



.bannière{

  padding:100px;
  /* background: linear-gradient(90deg, #d52a2a, #bf2eba); */ /*faire un dégradé de couleur*/
  background-image: url('./assets/fond.jpeg');
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
  color :antiquewhite;
}


</style>
