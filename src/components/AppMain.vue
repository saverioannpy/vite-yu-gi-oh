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
  <CardFilter />
  <CardList />
</template>

<style>

</style>
