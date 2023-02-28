<template>
  <router-link :to="`/details-films/${media.id}`" class="container-movie" v-for="media in media_list" :key="media.id">
    <div class="movie">
      <img :src="`https://www.themoviedb.org/t/p/w220_and_h330_face/${media.poster_path}`" alt="{{ media.title }}"/>
      <div class="score">
        <p>{{ media.vote_average.toFixed(2) }}</p>
      </div>
      <h5>{{ media.title }}</h5>
      <p>{{ dateToDDMMYYYY(media.release_date) }}</p>
    </div>
  </router-link>
</template>

<script>
import transformDate from "@/mixins/transformDate";

export default {

  props: {
    media_list: Object
  },
  mixins:[transformDate]

}

</script>

<style lang="scss">

@import '@/assets/scss/variables.scss';

.container-movie {
  text-decoration: none;
  width: 25%;
  min-width: 300px;
}

.movie {
  margin-bottom: 20px;
  cursor: pointer;

  color: black;


  img {
    transition: all 0.3s;
  }

  .score {
    width: 235px;
    display: flex;
    justify-content: flex-end;

    p {
      margin-top: -40px;
      height: 50px;
      width: 50px;
      border-radius: 50px;
      background-color: $accent-color;
      border: solid 3px white;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: rgba(0, 0, 0, 0.44) 0px 3px 8px;
    }
  }

  h5 {
    transition: all 0.3s;
    color: $accent-color;
    font-size: 20px;
  }

  &:hover {
    img {
      box-shadow: rgba(0, 0, 0, 0.55) 8px 8px 5px;
    }

    h5 {
      text-shadow: rgba(0, 0, 0, 0.15) 2px 2px 2px;
    }
  }
}
</style>