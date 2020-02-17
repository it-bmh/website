<template>
  <div :class="{
    'blogpost-preview': true,
    'blogpost-preview--big': isBig,
    'blogpost-preview--small': !isBig,
    'blogpost-preview--blue': isBig,
    'blogpost-preview--white': !isBig
  }">
      <header class="blogpost-preview__header">
          <img class="blogpost-preview__img" :src="blogpost.urls.image" alt="">
      </header>
      <main class="blogpost-preview__content">
          <span class="blogpost-preview__date">{{ blogpost.date }}</span>
          <h5 class="blogpost-preview__title">{{ blogpost.title }}</h5>
          <p class="blogpost-preview__text">{{ blogpost.text }}</p>
          <a class="blogpost-preview__link" :href="blogpost.urls.post">Číst více</a>
      </main>
  </div>
</template>

<script>
export default {
  props: [
    'isBig',
    'blogpost'
  ]
}
</script>

<style lang="stylus" scoped>
 @require '../theme/styles/components/blogpost-preview.styl'
</style>
