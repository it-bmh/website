<template>
  <div class="why-box why-box--fixed-height">
      <div class="why-box__img-box">
          <img :src="imageUrl" :alt="title"/>
      </div>
      <h6 class="why-box__title">{{ title }}</h6>
      <p v-if="text" class="why-box__text">{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'text',
    'imageUrl'
  ]
}
</script>

<style lang="stylus" scoped>
    @require '../theme/styles/components/why-box.styl'
</style>