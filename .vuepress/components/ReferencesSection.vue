<template>
  <section class="section section--wide section--blue section--centered section--references">
    <header class="section__header header--default">
        <h5 class="section__subtitle">Reference</h5>
        <h2 class="section__title references__title title--big">Naši <br class="breakline"/>partneři</h2>
    </header>
    <main class="section__content">
        <p class="section__content__text">Realizujeme zakázky napříč celou republikou. Podívejte se, kterým firmám, organizacím a institucím už jsme pomohli vyřešit problémy s potrubím.</p>
        <router-link to="/reference" class="button button--red">zjistit více</router-link>
        <div class="references">
            <div class="references__masonry">
                <router-link class="reference__link" to="/reference/mesta-a-obce">
                    <Reference name="LITOMYŠL" category="Města a obce" :isMedium="true" imageUrl="/img/reference/litomysl.png"/>
                </router-link>
                <router-link class="reference__link" to="/reference/provozovatele-vak">
                    <Reference name="VEOLIA ČESKÁ REPUBLIKA" category="PROVOZOVATELÉ VAK" :isSmall="true" imageUrl="/img/reference/veolia.png"/>
                </router-link>
                <router-link class="reference__link" to="/reference/podniky-a-instituce">
                    <Reference name="POLICIE ČESKÉ REPUBLIKY" category="Podniky a instituce" :isMedium="true" imageUrl="/img/reference/policiecr.png"/>
                </router-link>
                <router-link class="reference__link" to="/reference/stavebni-firmy">
                    <Reference name="SKANSKA A.S." category="Stavební firmy" :isSmall="true" imageUrl="/img/reference/skanska.png"/>
                </router-link>
            </div>
        </div>
    </main>
  </section>
</template>

<script>
import Reference from './Reference'

export default {
    components: {
        Reference
    }
}
</script>

<style lang="stylus" scoped>
    .reference__link:nth-of-type(even)
        margin-top 24px
    
    .button
        margin-bottom 60px

    .section__header
        margin-top 36px

    .section
        margin-bottom 168px
    
    .section__content
        display flex
        flex-direction column

    @media (max-width: 1180px)
        .section
            margin-bottom 32px

        .breakline
            display none

        .references
            position relative
            top 0
            left 0
            order 1

        .button.button--red
            order 3
            margin-top 16px
            align-self center

        .section__content
            align-items center

        .section__content__text
            margin-top 32px
            order 2
            max-width 36rem

        .references__masonry
            margin-left 0
            align-items center

        .section__header
            width auto

        .section__subtitle
            text-align center
    
    @media (max-width: 760px)
        .references__masonry
            max-height none

        .reference__link
            margin-top 24px

</style>