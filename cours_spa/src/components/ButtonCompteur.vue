<template>
  <button type="button" @click="incremente">{{ compteur }}</button>
</template>

<script>
import sendMail from "@/mixins/sendMail";

export default {
  name: "ButtonCompteur",
  props: {
    val: Number
  },
  mixins: [sendMail],
  data(){
    return{
      compteur: this.val
    }
  },
  methods:{
    incremente(){

      this.compteur = this.compteur * 2;

      if(this.compteur > 30){
        this.sendMail()
      }

    }
  }
}
</script>