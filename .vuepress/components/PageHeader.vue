<template>
    <header v-if="anyTitle" :class="{
      'page-header': true,
      'page-header--centered': isCentered
    }">
        <h2 v-if="subtitle" class="page-header__subtitle">{{ subtitle }}</h2>
        <h1 v-if="title" class="page-header__title">{{ title }}</h1>
    </header>
</template>

<script>
export default {
  computed: {
    anyTitle: () => this.title || this.subtitle
  },
  props: [
    'title',
    'subtitle',
    'isCentered'
  ]
}
</script>

<style lang="stylus" scoped>
    @require '../theme/styles/components/page-header.styl'
</style>