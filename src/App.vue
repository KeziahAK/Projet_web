<template>

  <main>
    <App_header></App_header>

    <nav>
      <ul>
          <li style="float:left"><a class="virtual_library" href="#my virtual library"><strong>My virtual library</strong> </a></li>
          <li class="dropdown">
            <a href="#Parcourir" class="dropbtn">Parcourir Livres</a>
              <div class="dropdown-content">
                <a href="#"> Romance</a>
                <a href="#"> Action</a>
                <a href="#"> Suspens</a>
                <a href="#"> Policier</a>
              </div>
              

            </li>

            <li class="dropdown_auteurs">
            <a href="#Parcourir" class="dropbtn_auteurs">Parcourir Auteurs</a>
              <div class="dropdown-content_auteurs">
                <a href="#"> Romance</a>
                <a href="#"> Action</a>
                <a href="#"> Suspens</a>
                <a href="#"> Policier</a>
              </div>
              

            </li>
          <li><a href="#Ma bibli">Ma Bibliothèque</a></li>

          <!-- Tri par ordre alphabéthique -->
          <label for="book-sort">Trier par : </label>
            <select v-model="booksSortType" id="book-sort">
              <option value="AZBook">Noms livres de A à Z</option>
              <option value="ZABook">Noms livres de Z à A</option>
              <option value="AZAuthor">Noms auteurs de A à Z</option>
              <option value="ZAAuthor">Noms auteurs de Z à A</option>
            </select>
            
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

    <div class="books-gallery">

      <!-- <BookCard v-for = "book in getFilteredBooks " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name"/> -->

      <BookCard v-for = "book in booksOrganizedData " :key="book.id" :title="book.title" :cover_id="'https://covers.openlibrary.org/b/id/'+book.cover_id+'-M.jpg'" :name_author="book.authors[0].name"/>
      
    </div>

    <div class="author-gallery">

     
      <AuthorCard v-for = "book in booksOrganizedData" :key="book.id" :name_author="book.authors[0].name" :author_cover_id="'https://covers.openlibrary.org/a/key/'+book.authors[0].key+'-M.jpg'" :author_id= "book.authors[0].key"/>

      

    </div >

    <div v-show= "isVisible ==true" class ="author-card" :key="authorData.key" :name ="authorData.name" :birth_date="authorData.birth_date">

      <AuthorDetails/>

    </div>

  </main>

  <footer>

    <App_footer></App_footer>

  </footer>

  
</template>

<script>



import BookCard from './components/BookCard.vue'
import AuthorCard from './components/AuthorCard.vue'
import App_header from './components/header.vue'
import AuthorDetails from './components/AuthorDetails.vue'
import App_footer from './components/Footer.vue'
import { getBookData,getImage, getAuthorImage} from './services/BookAPI.js';


export default {
  name: 'App',
  components:{
    BookCard,
    App_header,
    AuthorCard,
    AuthorDetails,
    App_footer
  },

  data(){
    return{
      bookData: [],
      imageData : [],
      authorData:[],
      isVisible : false,
      booksSortType: localStorage.getItem("booksSortType") || "AZName",
      search: localStorage.getItem("search") || "",
      color : '#9cf19f'
    }
  },

  watch: {
    search: function(newSearch){
      localStorage.setItem("search",newSearch)
    },
    booksSortType: function(newBooksSortType){
      localStorage.setItem("booksSortType", newBooksSortType)
    }
  },

  created: function(){
    this.Book()
    this.Image()
    this.Author()
    
  },

  methods: {
    async Book(){
      const book = await getBookData()
      this.bookData = book.works
    },
    async Image(){
      const id = this.book.cover_id;
      this.imageData = await getImage(id)
      
    },

    async Author(){
      const id = this.book.authors[0].key;
      this.authorData = await getAuthorImage(id)
    },

    cleanSearch: function() {
      this.search = ""
		}
	

    
  },

  computed: {

    booksOrganizedData: function(){

      let data = [...this.bookData]
      const reversed = ["ZABook", "ZAAuthor"].includes(this.booksSortType)
      
      if(this.booksSortType == "AZBook" || this.booksSortType =="ZABook"){
        data.sort(function(a,b){return a["title"].localeCompare(b["title"])})

      }

      else{
        data.sort(function(a,b){return a.authors[0]["name"].localeCompare(b.authors[0]["name"])})
      }

      if(reversed) data = data.reverse()
      return data
    },


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
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  color: #080808;
  -webkit-font-smoothing :antialiased;
  font-size: 10px;

}

.active {
    background-color:v-bind(color);
    border-radius: 10px;
    box-shadow: 0px 6px 15px rgba(52, 51, 51, 0.5);
}

.virtual_library{
  color:v-bind(color);
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  
}

.virtual_library:hover{
  background-color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 4px 4px 0px 4px;
  overflow: hidden;
  background-color: #ffffff;
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.7);
}

li {
  float: left;
}

li a, .dropbtn .dropbtn_auteurs{
  display: inline-block;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: v-bind(color);
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

li a:hover, .dropdown_auteurs:hover .dropbtn_auteurs {
  background-color: v-bind(color);
  border-radius:10px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}

li.dropdown_auteurs:hover {
  display: inline-block;
}

.dropdown-content_auteurs {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  border-radius:10px;
}

.dropdown-content_auteurs a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content_auteurs a:hover {
  background-color: #c4f6c5;
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
  border : 2px solid rgb(157, 218, 151);
}

.search-btn:hover{
  background-color: #c4f6c5;
  border-radius:10px;
}

.search-btn{
  border : none;
  padding:5px;
  margin : 5px;
  background-color: v-bind(color);
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(52, 51, 51, 0.5);
  font-family:'Arial Narrow Bold', sans-serif;
}



</style>
