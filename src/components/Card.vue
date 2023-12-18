<script>
import { store } from '../store';
export default {
    name: 'Card',
    data(){
      return{
        store,
      };
    },
};
</script>

<template>
    <div class="card-container d-flex flex-column align-items-center" v-for="card in store.cards" > 
      <div class="card-img">
        <img :src="card.card_images[0].image_url" alt="name" class="img-fluid"> 
      </div>
      <div class="card-name text-center pt-1 fw-bold">
        <p> {{ card.name }} </p>
      </div>
      <div class="card-archetype">
        <p> {{  card.archetype }}</p>
      </div>
    </div>

</template>

<style lang="scss">

  .card-container{
    width: calc(100% / 5 - 25px);
    margin-right: 22px;
    margin-bottom: 15px;
    background-color: #d48f38;

    .card-name p{
      color: white;
    }
  };

  

</style>
