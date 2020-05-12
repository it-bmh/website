<template>
  <main class="page">

    <section class="section section--blogpost-button">
      <router-link to="/blog" :class="{
        'button': true,
        'button--blue': false,
        'button--white': true
      }">zpět na blog</router-link>
    </section>

    <header class="page-header page-header--centered">
        <h2 class="page-header__subtitle">{{ formatDate($page.frontmatter.date) }}</h2>
        <h1 class="page-header__title page-header__title--blogpost">{{ $page.frontmatter.title }}</h1>
    </header>

    <InfoBox
      :text="$page.frontmatter.description"
      :imageUrl="$page.frontmatter.image"

      :imageLeft="true"
      :isBlue="true"
    />

    <section class="section section--blogpost">
      <Content :class="{
        'theme-default-content': true,
        'blogpost-page': true,
        'custom': hasCustomContent
      }"/>
    </section>

    <section class="section section--wide">
      <Contact/>
    </section>

    <slot name="bottom"/>
    <div class="copyright">
      <div class="copyright__content">
        <span>{{ footerText }}</span>
        <span class="copyright__doneby">
          <span class="copyright__design">Designed by <a target="_blank" href="https://www.behance.net/LenkaSiva/">Lenka Sivá</a></span>
          <span class="copyright__programming"> developed by <a target="_blank" href="https://michalweiser.com">Michał Weiser</a></span>
        </span>
      </div>
    </div>
  </main>
</template>

<script>
import moment from 'moment'
import { resolvePage, outboundRE, endingSlashRE } from '../util'

export default {
  props: ['sidebarItems', 'hasCustomContent'],

  methods: {
    formatDate(date) {
      if(date){
        return moment(String(date)).format('DD.MM.YYYY');
      } else {
        return '';
      }
    }
  },

  computed: {
    footerText () {
      return this.$themeLocaleConfig.copyright
    }
  }
}

</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display flex
  flex-flow column
  align-items center

.copyright
  display flex
  align-items center
  justify-content center
  height 3rem
  width 100%

.copyright__content
  display flex
  justify-content space-between
  width 100%
  max-width $pageMaxWidth
  font-size 0.7em
  
  color #A1A1A1
  font-family Cabin
  font-size 1rem
  letter-spacing 0.5px
  line-height 1.5rem

</style>
