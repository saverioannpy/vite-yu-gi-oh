<script>
export default {
    name: 'Card',
    props: ['img', 'name', 'archetype'],
};
</script>

<template>
  <div class="card-container">
    <div class="card-img">
      <img :src="img" alt="name">
    </div>
    <div class="card-name">
      <p>{{  name }}</p>
    </div>
    <div class="card-archetype">
      <p> {{  archetype }}</p>
    </div>
  </div>
</template>

<style>

</style>
