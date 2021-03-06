<template>
  <header :class="{ navbar: true, fixed: isFixed }">
    <main class="navbar__content">
      <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>

      <router-link
        :to="$localePath"
        class="home-link"
      >
        <img
          :class="{
            logo: true,
            big: hasBigLogo
          }"
          v-if="$site.themeConfig.logo"
          :src="$withBase($site.themeConfig.logo)"
          :alt="$siteTitle"
        >
      </router-link>

      <div
        class="links"
        :style="linksWrapMaxWidth ? {
          'max-width': linksWrapMaxWidth + 'px'
        } : {}"
      >
        <!-- <AlgoliaSearchBox
          v-if="isAlgoliaSearch"
          :options="algolia"
        />
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false"/> -->
        <NavLinks class="can-hide"/>
      </div>
    </main>
  </header>
</template>

<script>
import SidebarButton from '@theme/components/SidebarButton.vue'
import NavLinks from '@theme/components/NavLinks.vue'

export default {
  props: ['isFixed', 'hasBigLogo'],

  components: { SidebarButton, NavLinks, /*SearchBox, AlgoliaSearchBox*/ },

  data () {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted () {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING
          - (this.$refs.siteName && this.$refs.siteName.offsetWidth || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener('resize', handleLinksWrapWidth, false)
  },

  computed: {
    algolia () {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch () {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css (el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 1.0rem
$navbar-horizontal-padding = 1.5rem

.navbar__content
  position relative
  display flex
  flex auto
  max-width $pageMaxWidth

.navbar
  line-height $navbarHeight - 2*$navbar-vertical-padding
  display flex
  align-items center
  justify-content center
  height $navbarHeight
  background-color #00027D
  position relative

  &.fixed
    position fixed
    z-index 20
    top 0
    left 0
    right 0

  a, span, img
    display inline-block
  a
    color white
  .logo
    height $navbarLogoSize
    min-width $navbarLogoSize
    margin-right 0.8rem
    vertical-align middle
    transition all 500ms
  .logo.big
    height $navbarLogoSizeBig
    min-width $navbarLogoSizeBig
  .site-name
    font-size 1.3rem
    font-weight 600
    color $textColor
    position relative
  .links
    padding-left 1.5rem
    box-sizing border-box
    background-color #00027D
    white-space nowrap
    font-size 1rem
    font-weight bold
    position absolute
    //right $navbar-horizontal-padding
    // top $navbar-vertical-padding
    display flex
    right 0
    .search-box
      flex: 0 0 auto
      vertical-align top

@media (max-width: 1280px)
  .navbar
    padding 0 32px

@media (max-width: 740px)
  .navbar
    padding 0 16px

@media (max-width: $MQMobile)
  .navbar
    padding-left 4rem
    .can-hide
      display none
    .links
      padding-left 1.5rem
</style>
