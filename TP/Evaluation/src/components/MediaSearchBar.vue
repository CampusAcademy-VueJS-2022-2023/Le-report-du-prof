<template>
  <div class="search-container">
    <input type="text" placeholder="Rechercher un film" v-model="valueSearch">
    <router-link :to="`/search/${valueSearch}`">
      <button type="submit"><i class="fas fa-search"></i></button>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      valueSearch: ''
    }
  }
}
</script>

<style scoped>
.search-container {
  background: url("@/assets/images/interstellar.jpg");
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: -350px;
  display: flex;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  background-color: #e7e7e7;
  width: 65%;
  height: 60px;
  border: none;
  padding: 20px;
  font-size: 15px;
  outline: none;
  border-radius: 5px 0px 0px 5px;
}

button {
  background-color: #e7e7e7;
  height: 60px;
  border: none;
  outline: none;
  padding: 20px;
  cursor: pointer;
  font-size: 20px;
  border-radius: 0px 5px 5px 0px;
}

::placeholder {
  color: rgba(0, 0, 0, 0.25);
  font-weight: 600;
}
</style>