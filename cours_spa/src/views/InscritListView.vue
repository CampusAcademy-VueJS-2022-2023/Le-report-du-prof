<template>
  <h2>Liste des utilisateurs inscrits</h2>
  <InscritList :list_inscrits="personnes" />
</template>

<script>
// @ is an alias to /src
import InscritList from '@/components/InscritList.vue'
import axios from "axios";

export default {
  name: 'InscritListView',
  components: {
    InscritList
  },
  data(){
    return{
      personnes:[]
    }
  },
  methods: {
    // Récupère 3 utilisateurs via l'API random users
    async fetchUsers(){

      const userResponse = await axios.get('https://randomuser.me/api/?results=3');
      this.personnes = userResponse.data.results;

    }
  },
  created(){
    this.fetchUsers();
  }
}
</script>