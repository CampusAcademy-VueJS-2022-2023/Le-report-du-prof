<template>
  <ButtonCompteur :val="val"></ButtonCompteur>
</template>

<script>
// @ is an alias to /src
import ButtonCompteur from '@/components/ButtonCompteur.vue'

export default {
  name: 'CompteurDisplayView',
  components: {
    ButtonCompteur
  },
  data(){
    return{
      val:1
    }
  }
}
</script>