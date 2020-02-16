<template>
  <div class="blogpost-preview-section">
    <header class="page-header page-header--centered">
        <h2 class="page-header__subtitle">Blog</h2>
        <h1 class="page-header__title">Píšeme o technologiích</h1>
    </header>
    <section class="section section--wide section--centered">
      <BlogPreview/>
    </section>
  </div>
</template>

<script>
import BlogPreview from './BlogPreview';

export default {
    components: {
        BlogPreview
    }
}
</script>

<style lang="stylus" scoped>
    .blogpost-preview-section
      margin-bottom 3.75rem
</style>