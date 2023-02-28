<template>
  <!-- Content -->

  <div class="search-container">

  </div>

  <div class="wrapper">
    <div class="tendances-container container">
      <div class="title-tendances">
        <h2>Résultats pour la recherche : {{ movie_search }}</h2>
      </div>
      <div class="d-flex flex-wrap mt-3">
        <MediaList :media_list="mediaListSearch"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MediaList from "@/components/MediaList.vue";
const key = import.meta.env.VITE_MOVIEDB_KEY_API;

export default {

  name: 'SearchMovie',

  data(){
    return{
      mediaListSearch: '',
      movie_search: this.$route.params.search
    }
  },
  components:{
    MediaList
  },
  methods:{
    async loadMediaSearch() {
      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=fr-FR&page=1&include_adult=false&query=${this.movie_search}`)
          .then((response) =>
              this.mediaListSearch = response.data.results
          )
    }
  },
  created() {
    this.loadMediaSearch();
  }

}
</script>

