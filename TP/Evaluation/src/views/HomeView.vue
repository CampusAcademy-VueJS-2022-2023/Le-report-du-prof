<template>
  <MediaSearchBar/>

  <!-- ---- Section des films tendances ---- -->
  <section class="container">

    <!-- Les filtres -->
    <div class="mt-4">
      <MediaListFilters titre="Les films tendances">

        <template #filters>
          <button :class="{ 'active': trendingMovieType === 'day' }" @click="loadMovieTrending('day')">Aujourd'hui</button>
          <button :class="{ 'active': trendingMovieType === 'week' }" @click="loadMovieTrending('week')">Cette semaine</button>
        </template>

      </MediaListFilters>
    </div>

    <!-- Les films -->
    <div class="d-flex flex-wrap mt-3">
      <MediaList :media_list="movieListTrending"/>
    </div>
  </section>

  <!-- ---- Section des films selon classement ---- -->
  <section class="bg-lightgrey pt-1">

    <div class="container mt-4">
      <MediaListFilters titre="Les mieux notés"/>

      <!-- Les films -->
      <div class="d-flex flex-wrap mt-3">
          <MediaList :media_list="movieListTopRated"/>
      </div>

    </div>
  </section>

</template>

<script setup>
// Je vous fais cette vue en mode composition API pour que vous ayez un exemple
import MediaList from '@/components/MediaList.vue'
import MediaSearchBar from '@/components/MediaSearchBar.vue'
import MediaListFilters from '@/components/MediaListFilters.vue'

import axios from 'axios';
import {ref, computed } from 'vue'

let key = import.meta.env.VITE_MOVIEDB_KEY_API;
let movieListTopRated = ref({})
let movieListTrending = ref({})
let trendingMovieType = ref('day')

async function loadMovieTrending(type='day') {
  trendingMovieType.value = type;
  let urlAPI = `https://api.themoviedb.org/3/trending/movie/${type}?api_key=${key}&language=fr-FR`;
  await axios.get(urlAPI)
      .then((response) =>
          movieListTrending.value = response.data.results
      )
}

async function loadMovieBestRated() {
  let urlAPI = `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=fr-FR`;
  await axios.get(urlAPI)
      .then((response) =>
          movieListTopRated.value = response.data.results
      )
}


// On lance la fonction pour récupérer les données de l'API
loadMovieTrending();
loadMovieBestRated();

</script>

<style scoped lang="scss">
.bg-lightgrey {
  background-color: lightgrey;
}
</style>