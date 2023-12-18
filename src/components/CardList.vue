<script>
import Card from './Card.vue';
import { store } from '../store';
export default {
    name: 'CardList',
    components: {
        Card,
    },
    data(){
      return{
        store,
      };
    },
};
</script>

<template>
  <div class="container">
    <!-- Contenitore generale delle carte-->
    <div class="cards-container d-flex flex-wrap justify-content-center">
      <!-- Il componente Card viene richiamato e genera ogni singola carta-->
      <Card /> 
    </div>
  </div>
</template>

<style lang="scss">

  .cards-container{
    background-color: #ffffff;
    padding: 45px;

    :nth-child(5n + 5){
      margin-right: 0px;
    }

  };

</style>
