<template>
  <div class="focus-container">
    <div class="banner"
         :style="`background:url('https://www.themoviedb.org/t/p/w1920_and_h800_face${movie.backdrop_path}')`">
      <div class="content">
        <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`" alt=""/>
        <div class="right">
          <div class="top">
            <div class="score">{{ movie.vote_average.toFixed(2) }}</div>
            <div class="title-date">
              <h1>{{ movie.title }}</h1>
              <span>{{ dateToDDMMYYYY(movie.release_date) }} - {{ movie.genres[0].name }} - {{ movie.runtime }}mn</span>
            </div>
          </div>
          <div class="synopsis">
            <h2>Synopsis</h2>
            <p>
              {{ movie.overview }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="casting">
      <h2>Casting</h2>
      <div class="actors">
        <div class="actor" v-for="actor in actors">
          <img :src="`${checkImage(actor.profile_path)}`" alt="{{ actor.name }}"/>
          <h4>{{ actor.name }}</h4>
          <span>{{ actor.character }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import transformDate from "@/mixins/transformDate";

const key = import.meta.env.VITE_MOVIEDB_KEY_API;

export default {

  data() {
    return {

      movie: '',
      actors: '',
      movie_id: this.$route.params.id

    }
  },
  methods: {
    async getMovie() {
      await axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}?api_key=${key}&language=fr-FR`)
          .then((response) =>
              this.movie = response.data // On précise le .data mais ça dépendra des API
          )
    },
    async getMovieActors() {
      await axios.get(`https://api.themoviedb.org/3/movie/${this.movie_id}/credits?api_key=${key}&language=fr-FR`)
          .then((response) =>
              this.actors = response.data.cast // On précise le .data mais ça dépendra des API
          )

    },
    checkImage(path) {
      if (path) {
        return `https://www.themoviedb.org/t/p/w220_and_h330_face${path}`
      } else {
        return "https://dummyimage.com/220x330/c2c2c2/ababab.jpg&text=People"
      }
    }
  },
  created() {
    this.getMovie()
    this.getMovieActors()
  },
  mixins: [transformDate]

}
</script>

