<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'CardFilter',
    data(){
      return{
        store,

      };
    },

    methods:{
      getArchetypes: function(){
        let j = 0;
        for( let i = 0 ; i < store.cards.length ; i++ ){
          if((!store.archetypes.includes(store.cards[i].archetype)) && (store.cards[i].archetype !== undefined)){
            store.archetypes[j] = store.cards[i].archetype;
            j++;
          }else if((store.cards[i].archetype === undefined) && (!store.archetypes.includes("N/A")) ){
            store.archetypes[j] = "N/A";
            j++;
          } 
        }
        console.log(store.archetypes);
      }
    },
};
</script>

<template>
  <div class="container" v-on:click="this.getArchetypes" >
    <div class="filter-container p-2">
      <select class="form-select" aria-label="Default select example" v-model="store.searchText" >
        <option :value="all" selected> All </option>
        <option :value="archetype" v-for="archetype in store.archetypes"> {{ archetype }}</option>
      </select>
    </div>
  </div>
</template>

<style>

.filter-container{
  width: 150px;
}

</style>
