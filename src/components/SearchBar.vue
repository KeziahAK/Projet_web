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

        emits: ["update:searchBook", "search"],

        watch: {
            searchBook: function (newSearch){
                localStorage.setItem("searchBook", newSearch)
            }
        },

        methods: {
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