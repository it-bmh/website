<template>
    <div class="services">
        <router-link class="route-link" v-for="item in services" :key="item.link" :to="item.link">
            <div class="route-box">
                <div class="image" v-bind:style="{ backgroundImage: 'url(' + item.img + ')' }">
                    <!-- <img :src="item.img" :alt="item.text"> -->
                </div>
                <div class="link">{{ item.text }}</div>
            </div>
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
    .services {
        width: 100%;
    }

    .image,
    .link {
        width: 50%;
    }

    .link {
        font-family: 'Cabin', sans-serif;
        font-size: 120%;
        background-color: rgba(170, 170, 170, 0.05);
    }

    .image {
        background-repeat: no-repeat;
        /* background-attachment: fixed; */
        background-position: center;
        background-size: 100%;
    }

    .image {
        overflow: hidden;
    }

    .route-link:nth-child(even) .image {
        order: 1;
    }

    .route-link:nth-child(even) .link {
        order: 0;
    }

    .route-link:nth-child(odd) .image {
        order: 0;
    }

    .route-link:nth-child(odd) .link {
        order: 1;
    }

    .route-link:hover {
        filter: grayscale(30%);
    }

    .route-link:hover .link {
        background-color: rgba(170, 170, 170, 0.1);
    }

    .route-box {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 14vw;
        margin-bottom: 20px;
    }

    

    .link {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        color: #1E1EEA;
    }
</style>
