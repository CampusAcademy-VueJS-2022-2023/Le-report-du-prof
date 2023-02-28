<template>
  <div class="filter-title">
    <h2>{{ titre }}</h2>

    <slot name="filters"></slot>

  </div>
</template>

<script>

export default{
  props:{
    titre : String
  }
}
</script>

<style lang="scss">

@import '@/assets/scss/variables.scss';

.filter-title h2 {
  font-size: 36px;
  font-weight: 500;
}

.filter-title button {
  min-width: 150px;
  cursor: pointer;
  margin-right: 20px;
  font-size: 18px;
  padding: 5px 0px;
  transition: all 0.3s;
  color: $accent-color;
  background-color: white;
  border: solid 2px $accent-color;

  &:hover{
    transition: all 0.3s;
    color: white;
    background-color: $accent-color;
    border: solid 2px $accent-color;
  }

  &.active{
    color: white;
    background-color: $accent-color;
    border: solid 2px $accent-color;
  }
}
</style>