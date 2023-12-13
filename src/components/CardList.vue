<script>
import axios from 'axios';
import Card from './Card.vue';
export default {
    name: 'CardList',
    components: {
        Card,
    },
    data(){
      return{
        cards: [],
        apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
      };
    },
   created(){
    axios.get(this.apiUrl).then((response) => {
      console.log(response.data.data);
      this.cards = response.data.data;
    });
   },
};
</script>

<template>
  <div class="container">
    <div class="card-container d-flex flex-wrap">
      <Card v-for="card in cards" />
    </div>
  </div>
   
</template>

<style>

</style>
