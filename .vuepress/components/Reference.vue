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
  margin 16px

@media only screen and (max-width : 414px)
  .reference
    margin 8px

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

@media only screen and (max-width : 414px)
  .reference--medium
    height 156px
    width ((350/2) - 8)px//$referenceWidthMedium
    padding 8px

@media only screen and (max-width : 414px)
  .reference--small
    height 156px
    width ((350/2) - 8)px//$referenceWidthMedium
    padding 8px

.reference--large
  height 348px
  width $referenceWidthLarge

@media (max-width: 980px)
  .reference--large .reference__img
    max-width ($referenceWidthMedium - (2 * $referencePadding))

@media only screen and (max-width : 414px)
  .reference--small .reference__img,
  .reference--medium .reference__img,
  .reference--large .reference__img
    max-width 100px
    max-height 80px
    
.reference__name
  color $blueColor
  font-family Cabin
  font-size 1rem
  font-weight bold
  letter-spacing 2px
  line-height 24px
  text-transform uppercase

@media only screen and (max-width : 414px)
  .reference__name
    font-size 0.7rem
    line-height 16px

.reference__category
  color $lightGrayColor
  font-family Cabin
  font-size 1rem
  letter-spacing 2px
  line-height 24px
  text-transform uppercase

@media only screen and (max-width : 414px)
  .reference__category
      font-size 0.7rem
      line-height 16px

.reference__label
  text-align center
  margin-top $referencePadding

@media only screen and (max-width : 414px)
  .reference__label
      margin-top 8px
</style>