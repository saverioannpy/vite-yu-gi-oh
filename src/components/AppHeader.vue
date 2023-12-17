<script>
export default {
    name: 'AppHeader',
};
</script>

<template>
    <div class="container d-flex align-items-center">
        <div class="img-header-container">
            <img src="../assets/img/logo.png" alt="logo yu-gi-oh">
        </div>
        <h1 class="text-center">Yu-Gi-Oh Api</h1>
    </div>

</template>

<style lang="scss">
    .img-header-container{
        width: 55px;
        margin-right: 20px;

        img{
            width: 100%;
        }
    }

    h1{
        font-size: 18px;
    }

</style>
