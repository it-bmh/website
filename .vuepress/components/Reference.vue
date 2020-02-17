<template>
  <div :class="{
      'reference': true,
      'reference--small': isSmall,
      'reference--medium': isMedium,
      'reference--large': isLarge
      }">
      <div class="refrence__image-wrapper">
        <img class="reference__img" :src="imageUrl" :alt="name"/>
      </div>
      <div class="reference__label">
        <div class="reference__name">{{ name }}</div>
        <div class="reference__category">{{ category }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: [
    'name',
    'category',
    'imageUrl',
    'linkUrl',
    'isSmall',
    'isMedium',
    'isLarge'
  ]
}
</script>

<style lang="stylus" scoped>
$referencePadding = 36px
$referenceWidthSmall = 350px
$referenceWidthMedium = 350px
$referenceWidthLarge = 445px

.reference
  box-sizing border-box
  border-radius $boxesRadius
  background-color $whiteColor
  padding $referencePadding
  display flex
  flex-flow column
  justify-content flex-end
  align-items center

.refrence__image-wrapper
  height 100%
  display flex
  align-items center

.reference--small,
.reference--medium
  box-shadow 0 10px 20px 0 rgba(0,0,0,0.18)

.reference--large
  border 2px solid $shadeColor

.reference--small .reference__img
  max-height 100px
  max-width ($referenceWidthSmall - (2 * $referencePadding))

.reference--medium .reference__img
  max-width ($referenceWidthMedium - (2 * $referencePadding))

.reference--large .reference__img
  max-width ($referenceWidthLarge - (2 * $referencePadding))

.reference--small
  height 191px
  width $referenceWidthSmall

.reference--medium
  height 312px
  width $referenceWidthMedium

.reference--large
  height 348px
  width $referenceWidthLarge

.reference__name
  color $blueColor
  font-family Cabin
  font-size 1rem
  font-weight bold
  letter-spacing 2px
  line-height 24px
  text-transform uppercase

.reference__category
  color $lightGrayColor
  font-family Cabin
  font-size 1rem
  letter-spacing 2px
  line-height 24px
  text-transform uppercase

.reference__label
  text-align center
  margin-top $referencePadding
</style>