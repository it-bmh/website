<template>
    <div :class="{ contact: true, 'contact--no-margin-top': nomargintop }">
        <main class="contact__content">
            <header class="contact__header header--default">
                <h5 class="contact__subtitle">Máte dotaz?</h5>
                <h2 class="contact__title">Kontakt</h2>
            </header>
            <main class="contact__main">
                <div class="contact__group">
                    <section class="contact__phones">
                        <span class="contact__phone__wrapper"><a class="contact__phone" href="tel:+420585313549">+420 585 313 549</a> (7:00 - 15:00)</span>
                    </section>
                    <section class="contact__mails">
                        <a class="contact__mail" href="mailto:bmh@bmh.cz">bmh@bmh.cz</a>
                    </section>
                    <section class="contact__social-media">
                        Sledujte nás na
                        <a target="_blank" class="contact__social-media__link" href="https://www.linkedin.com/company/bmh-spol-s-r-o/"><img src="/img/linkedin.svg" alt=""></a>
                        <!-- <a class="contact__social-media__link"><img src="/img/twitter.svg" alt=""></a> -->
                    </section>
                    <section class="contact__sponsoring">
                        <strong>Sponzorujeme</strong>
                        <a class="contact__logo-box" href="https://www.volejbalov.cz/" target="_blank">
                            <img class="contact__logo" src="/img/aero_logo.png" alt="Aero Logo"/>
                        </a>
                    </section>
                </div>
                <!-- <div class="contact__group">
                    <section class="contact__links">
                        <header class="contact__links__header">
                            <h3 class="contact__links__title">Užitečné informace</h3>
                        </header>
                        <main class="contact__links__main">
                            <router-link class="contact__link" to="/kontakt">Obchodní podmínky</router-link>
                            <router-link class="contact__link" to="/kontakt">Časté dotazy</router-link>
                        </main>
                    </section>
                </div> -->
                <div class="contact__group">
                    <section class="contact__maps">
                        <iframe class="contact__map" src="https://en.frame.mapy.cz/s/nokomopame" frameborder="0"></iframe>
                        <address class="contact__address">
                            <h6 class="contact__company">B M H spol. s r.o.</h6>
                            <p class="contact__address__text">Ondřejova 592/11A<br/>779 00 Olomouc<br/>IČ: 42869668<br/>DIČ: CZ42869668</p>
                        </address>
                    </section>
                </div>
            </main>
        </main>
    </div>
</template>

<script>
export default {
  props: [
    'nomargintop'
  ]
}
</script>

<style lang="stylus" scoped>
    .contact
        display flex
        align-items center
        justify-content center
        color #ffffff
        background-color #00027D
        padding 3rem 0
        margin-top 4rem

    @media only screen and (max-width : 414px)
        .contact
            margin-top 0

    .contact.contact--no-margin-top
        margin-top 0

    .contact__content
        width 100%
        max-width $pageMaxWidth
        margin 0 32px

    .contact__group
        position relative

    .contact__group:not(:last-child)
        margin-right 5rem

    .contact__subtitle
        color #006EFF
        font-family Cabin
        font-weight 500
        font-size 1rem
        letter-spacing 2px
        line-height 1.5rem
        text-transform uppercase
        margin-bottom 0.7rem

    .contact__title
        color #FFFFFF
        font-family Cabin
        font-size 3rem
        font-weight 700
        letter-spacing 0.11px
        line-height 60px
    
    .contact__phone__wrapper
        display block

    .contact__phone,
    .contact__mail,
    .contact__link
        &:link,
        &:active,
        &:visited
            color #ffffff

        &:hover
            color #ff3037

    .contact__phone,
    .contact__mail,
    .contact__link,
    .contact__social-media
        color #FFFFFF
        font-family Cabin
        font-size 1rem
        letter-spacing 0.5px
        line-height 1.5rem

    .contact__links__title
        color #FFFFFF
        font-family Cabin
        font-size 1.5rem
        font-weight 700
        letter-spacing 0.24px
        line-height 2.25rem

    .contact__links__header
        margin-bottom 2.2rem

    .contact__phones
        margin-bottom 1.5rem

    .contact__links
        position relative
        top -4.6rem

    .contact__mails
        margin-bottom 1rem

    .contact__link
        display block
    
    .contact__social-media
        display inline-flex
        align-items center

    .contact__social-media__link
        margin-left 0.7rem

    .contact__main
        display flex
        justify-content space-between
        flex-flow row
        flex-wrap wrap

    @media (max-width: 920px)
        .contact__main
            align-items center
            flex-flow column-reverse

        .contact__maps
            margin-bottom 32px

    @media (max-width: 760px)
        .contact__header
            text-align center
        .contact__maps
            margin-top 128px

    .contact__maps
        position relative
        display flex
        justify-content center
        min-width 34rem
        width 34rem
        height 16rem
        transition 500ms all ease

    @media only screen and (max-width : 414px)
        .contact__maps
            min-width 20rem
            width 20rem
            height 16rem

    .contact__map
        border-radius $imageCornerRadius
        width 34rem
        height 16rem
        border none

    .contact__address
        font-style normal
        align-self center
        position absolute
        top -8rem
        padding 1.5rem 4rem 4rem 2rem
        border-radius $boxesRadius
        background-color #ffffff

    .contact__company
        color #FF3037
        font-family Cabin
        font-size 1.5rem
        font-weight 700
        letter-spacing 0.24px
        line-height 2.25rem

    .contact__address__text
        color #121212
        font-family Cabin
        font-size 1rem
        letter-spacing 0.5px
        line-height 1.5rem
</style>
