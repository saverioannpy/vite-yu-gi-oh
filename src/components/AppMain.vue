<script>
import CardFilter from './CardFilter.vue';
import CardList from './CardList.vue';
export default {
    name: 'AppMain',
    components: {
      CardFilter,
      CardList,
    }
};
</script>

<template>
  <div class="main-container">
    <CardFilter />
    <CardList />
  </div>
</template>

<style lang="scss">
  .main-container{
    background-color: #d48f38;
  }
</style>
