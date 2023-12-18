<script>
import axios from 'axios';
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
   created(){
    axios.get(store.apiUrlOffset).then((response) => {
      store.cards = response.data.data;
    });
   },
};
</script>

<template>
  <div class="container">
    <div class="cards-container d-flex flex-wrap justify-content-center">
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
