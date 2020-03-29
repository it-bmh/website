<template>
  <section class="section section--wide section--white section--centered">
    <InfoBox
      title="O nás"
      text="Stavební společnost BMH spol. s r. o. sídlí v Olomouci a vznikla v roce 1991, a to se záměrem stavět a opravovat trubní systémy. Stavěli jsme nové kanalizace i vodovody, zároveň jsme opravovali stávající trubní sítě. Od roku 1996 ale provádíme opravy a rekonstrukce vodovodního řádu výhradně bezvýkopovou metodou. Šetříme tak čas a finance měst, obcí i mnoha dalších institucí."
      ctaUrl="/o-nas"
      ctaText="Zjistit více"
      imageUrl="/img/frontpage/7.jpg"
      :imageRight="true"
      :imageBig="true"
      :isWhite="true"
    />
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
    .reference:nth-of-type(even)
        margin-top 24px
    
    .button
        margin-bottom 120px

    .section__header
        margin-top 36px
</style>