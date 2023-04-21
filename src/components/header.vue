<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="bannière">
      <h1 class="titre"> Ma bibliothèque  </h1>
     
    </div>

    <nav>
      <ul>
          <img class= "logo" style="float:left" href="#my virtual library" id="logo" src="../assets/logo.png" alt="logo"/> 
          <li class="dropdown">
            <a href="#Parcourir" class="dropbtn">Parcourir Livres</a>
              <div class="dropdown-content">
                <a href="#"> Romance</a>
                <a href="#"> Fantastique</a>
                <a href="#"> Suspens</a>
                <a href="#"> Policier</a>
              </div>
              

            </li>

            <li class="dropdown_auteurs">
            <a href="#Parcourir" class="dropbtn_auteurs">Parcourir Auteurs</a>
              <div class="dropdown-content_auteurs">
                <a href="#"> Romance</a>
                <a href="#"> Fantastique</a>
                <a href="#"> Suspens</a>
                <a href="#"> Policier</a>
              </div>
              

            </li>
          <li><a href="#Ma bibli">Ma Bibliothèque</a></li>
            
           <!-- search bar -->
          <div class="search">
              

                  <input type="text"
                      placeholder=" Que recherchez-vous ?"
                      v-model="search">
                  <button v-if="search" @click="cleanSearch" type="submit" class="search-btn">
                    <i>          
                      <li style="float:right">Rechercher</li>
                    </i>

                  </button>    


          </div>
      </ul>
    </nav>
        
    

  </body>

</template>

<script>



// import BookCard from './components/BookCard.vue'
// import AuthorCard from './components/AuthorCard.vue'

import { getBookData} from '../services/BookAPI.js';


export default {
  name: 'App',
  components:{

  },

  data(){
    return{
      bookData: [],
      search: localStorage.getItem("search") || "",
      color : '#1f9c49'
    }
  },

  watch: {
    search: function(newSearch){
      localStorage.setItem("search",newSearch)
    },

  },

  created: function(){
    this.Book()

    
  },

  methods: {
    async Book(){
      const book = await getBookData()
      this.bookData = book.works
    },


    cleanSearch: function() {
      this.search = ""
		}
	

    
  },

  computed: {

    getFilteredBooks(){
      return this.bookData.filter(book=>{
        return book.title.toLowerCase().includes(this.search.toLowerCase());
      })
    },

    getFilteredAuthors(){
      return this.bookData.filter(book=>{
        return book.authors[0].name.toLowerCase().includes(this.search.toLowerCase());
      })
    },


		
  } 

}

</script>

<style>



.bannière{

  padding:100px;
  /* background: linear-gradient(90deg, #d52a2a, #bf2eba); */ /*faire un dégradé de couleur*/
  background-image: url('../assets/fond.jpg');
  background-attachment: fixed;
  opacity: 1.;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
  
}

.titre{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  text-align: center;
  opacity:1.;
  color :rgb(236, 236, 236);
}



.active {
    background-color:v-bind(color);
    border-radius: 10px;
    box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
}

.logo{
  width : 40px;
  height : 40px;
  margin-left: 10px;
  margin-right: 10px;
}

/* .virtual_library:hover{
  background-color: black;
  color :v-bind (color);
} */

ul {
  list-style-type: none;
  margin: 0;
  padding: 4px 4px 0px 4px;
  overflow: hidden;
  background-color: #000000;
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
}

li {
  float: left;
}

li a, .dropbtn .dropbtn_auteurs{
  display: inline-block;
  color: rgb(222, 222, 222);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: v-bind(color);
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #000000;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(21, 58, 24, 0.7);
  z-index: 1;
  border-radius:10px;
}

.dropdown-content a {
  color: rgb(222, 222, 222);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: v-bind (color);
  border-radius:10px;
}

.dropdown:hover .dropdown-content {
  display: block;
}

li a:hover, .dropdown_auteurs:hover .dropbtn_auteurs {
  background-color: v-bind(color);
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
}

li.dropdown_auteurs:hover {
  display: inline-block;
}

.dropdown-content_auteurs {
  display: none;
  position: absolute;
  background-color: #000000;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(21, 58, 24, 0.7);
  z-index: 1;
  border-radius:10px;
}

.dropdown-content_auteurs a {
  color: rgb(222, 222, 222);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content_auteurs a:hover {
  background-color: v-bind (color);
  border-radius:10px;
}

.dropdown_auteurs:hover .dropdown-content_auteurs {
  display: block;
}


h1{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
  text-align: center;
  opacity:1.;
  color :rgb(172, 245, 166);
}

.search input[type=text]{
  width:300px;
  height:30px;
  border-radius:10px;
  border: none;
 
  }
         
.search{
  float:right;
  margin:4px 4px 7px 4px;
  border-radius: 10px;
  border : 2px solid rgb(26, 137, 16);
}

.search-btn:hover{
  background-color: #81b982;
  border-radius:10px;
}

.search-btn{
  border : none;
  padding:5px;
  margin : 5px;
  background-color: v-bind(color);
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(21, 58, 24, 0.7);
  font-family:'Arial Narrow Bold', sans-serif;
}







</style>