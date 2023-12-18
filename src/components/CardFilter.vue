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
    created(){
      //questa chiamata axion popola l'array "archetypes" con tutti gli archetipi disponibili nella nostra API con un apposita chiamata
      axios.get(store.apiArchetypesUrl).then((response) => {
        store.archetypes = response.data;
        });
      //rimane da gestire la visualizzazione delle card priva di un valore archetipo
    }
};
</script>

<template>
  <div class="container" >
    <div class="filter-container p-2" >
      <select class="form-select" aria-label="Default select example" v-model="store.searchText" >
        <!-- l'attribbuto selected non funziona e non so il perchè-->
        <option value="All" selected @click.prevent="$emit('allArchetype')"> All Archetypes</option>
        <option :value="archetype.archetype_name" v-for="archetype in store.archetypes" @click.prevent="$emit('searchArchetype')"> {{ archetype.archetype_name }}</option>
      </select>
    </div>
  </div>
</template>

<style>

.filter-container{
  width: 180px;
}

</style>
