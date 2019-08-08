<template>
    <div class="wrapper">
        <router-link v-for="item in services" :key="item.link" :to="item.link">
            <div class="link">{{ item.text }}</div>
        </router-link>
    </div>
</template>

<script>
export default {
    computed: {
        services () { return this.$themeLocaleConfig.services }
    }
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
        box-sizing: border-box;
        width: 20vw;
        height: 20vw;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #aaa;
    }

    a {
        color: #1E1EEA;
    }
</style>
