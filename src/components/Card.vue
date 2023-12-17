<script>
export default {
    name: 'Card',
    props: ['img', 'name', 'archetype'],
};
</script>

<template>
    <div class="card-container d-flex flex-column align-items-center">
      <div class="card-img">
        <img :src="img" alt="name" class="img-fluid">
      </div>
      <div class="card-name">
        <p>{{  name }}</p>
      </div>
      <div class="card-archetype">
        <p> {{  archetype }}</p>
      </div>
    </div>

</template>

<style lang="scss">

  .card-container{
    width: calc(100% / 5 - 25px);
    margin-right: 22px;
    margin-bottom: 15px;
    background-color: #d48f38;
  };

  

</style>
