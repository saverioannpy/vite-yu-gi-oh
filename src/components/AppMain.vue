<script>
import axios from 'axios';
import CardFilter from './CardFilter.vue';
import CardList from './CardList.vue';
import { store } from '../store';
export default {
  name: 'AppMain',
  data(){
    return{
      store,
    }
  },

  components: {
    CardFilter,
    CardList,
  },

  methods: {
    //metodo che genera la nostra pagina con tutti gli elementi quando il componenete viene creato o viene filtrato All
    archetypeAll: function(){
      axios.get( store.apiUrl + '?num=20&offset=0')
      .then((response) => {
        store.cards = response.data.data;
        });
    },
    //metodo che restituisce un array filtrato in base all'archetipo selezionato
    archetypeFilter : function(){
      axios.get( store.apiUrl + '?archetype=' + store.searchText +  '&num=20&offset=0')
      .then((response) => {
        store.cards = response.data.data;
        });

    }
  },

  created(){
    //alla creazione del nostro componente viene generata la pagina con tutte le carte (offest limitato a 20)
    this.archetypeAll();
  }
};
</script>

<template>
  <!-- Contanitore principale del Main-->
  <div class="main-container">
    <!-- Componente Filtro-->
    <CardFilter @allArchetype="archetypeAll" @searchArchetype="archetypeFilter"  />
    <!-- Componente Card List-->
    <CardList />
  </div>
</template>

<style lang="scss">
  .main-container{
    background-color: #d48f38;
  }
</style>
