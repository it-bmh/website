<template>
<div class="wrapper">
    <!-- <router-link v-for="item in services" :key="item.link" :to="item.link">
        <div class="link">{{ item.nam }}</div>
    </router-link> -->

    <router-link to="/sluzby/kanalizace">
        <div class="link">Kanalizace</div>
    </router-link>
    <router-link to="/sluzby/vodovody">
        <div class="link">Vodovody</div>
    </router-link>
    <router-link to="/sluzby/revizni-sachty">
        <div class="link">Revizni sachty</div>
    </router-link>
    <router-link to="/sluzby/robotika">
        <div class="link">Robotika</div>
    </router-link>
</div>
</template>

<script>
export default {
    // computed: {
    //     services: this.$themeLocaleConfig.services
    // }
}
</script>


<style scoped>
    .wrapper {
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        font-family: 'Cabin', sans-serif;
        width: 40vw;
        height: 40vw;
    }

    .link {
        width: 20vw;
        height: 20vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #1E1EEA;
    }
</style>
