<template>
  <head>

    <meta charset="UTF-8">
    <title> Bookshop </title>
  
  </head>
  <body>

    <div class="bannière">
      <h1 class="titre"> My Virtual Library  </h1>
     
    </div>

    <nav>
      <ul>                
        <router-link to="/"> <img class= "logo" style="float:left" href="#my virtual library" id="logo" src="https://creazilla-store.fra1.digitaloceanspaces.com/emojis/47378/green-book-emoji-clipart-xl.png" alt="logo"/></router-link> 
          <li class="dropdown">
            <a href="#Parcourir" class="dropbtn">Parcourir Livres</a>
              <div class="dropdown-content">
                <router-link to="/ParcourirLivres/Romance"> Romance</router-link>
                <router-link to="/ParcourirLivres/Fantastique"> Fantastique</router-link>
                <router-link to="/ParcourirLivres/Action"> Action</router-link>
                <router-link to="/ParcourirLivres/Animaux"> Animaux</router-link>
              </div>
              

            </li>

            <li class="dropdown_auteurs">
            <a href="#Parcourir" class="dropbtn_auteurs">Parcourir Auteurs</a>
              <div class="dropdown-content_auteurs">
                <router-link to="/ParcourirAuteurs/Romance"> Romance</router-link>
                <router-link to="/ParcourirAuteurs/Fantastique"> Fantastique</router-link>
                <router-link to="/ParcourirAuteurs/Action"> Action</router-link>
                <router-link to="ParcourirAuteurs/Animaux"> Animaux</router-link>
              </div>
              

            </li>
          <li><router-link to="/Tendances"> Tendances</router-link></li>
            

      </ul>
    </nav>
        
    

  </body>

</template>

<script>



import { getBookData} from '../../services/BookAPI.js';



export default {
  name: 'App',

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

  padding:90px;
  /* background: linear-gradient(90deg, #d52a2a, #bf2eba); */ /*faire un dégradé de couleur*/
  background-image: url('https://www.forumdesimages.fr/media/cache/fdi_big_overview/media/fdi/36398-le-voyage-de-chihiro---_2001-studio-ghibli---nddtm-_4_.jpg');
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
  color :rgb(176, 250, 170);
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

</style>