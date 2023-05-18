<template>
	<div class="search">
		<input class="search_bar" type="text" :value="searchBook" @input="launchSearch" placeholder="Que recherchez-vous ">
        <button v-if="search" @click="cleanSearch" type="submit" class="search-btn">
                    <i>          
                      <li style="float:right">Rechercher</li>
                    </i>

                  </button>  
		
	</div>	
	
</template>

<script>

export default {
        name: 'SearchBar',

        props: {
            searchBook:String,
            
        },

        data (){
          return {color : '#1f9c49'}
        },

        emits: ["update:searchBook", "search"],

        computed: {
          search: function () {
            return this.searchBook && this.searchBook.length > 0;
          },
        },

        watch: {
            searchBook: function (newSearch){
                localStorage.setItem("searchBook", newSearch)
            }
        },

        methods: {
        cleanSearch: function() {
          this.search = ""
        },

        launchSearch(event){
          this.$emit("update:searchBook", event.target.value)
          this.$emit("search");
        },
        }

    }
</script>

<style>

.search input[type=text]{
  width:300px;
  height:30px;
  padding :2px;
  border-radius:10px;
  border: none;
  box-shadow: 0px 6px 15px rgba(24, 67, 28, 0.7);
 
}
         
.search-btn:hover{
  background-color: #81b982;
  border-radius:10px;
}

.search-btn{
  border : none;
  height:30px;
  padding:5px;
  margin : 10px;
  background-color: v-bind(color);
  border-radius: 5px;
  box-shadow: 0px 6px 15px rgba(24, 67, 28, 0.7);
  font-family:'Arial Narrow Bold', sans-serif;
}


</style>