<template>
    <div :class="{
      'info-box': true,
      'info-box--image-right': imageRight,
      'info-box--image-left': imageLeft,
      'info-box--blue': isBlue,
      'info-box--white': isWhite,
      'info-box--image-big': imageBig,
      'info-box--image-small': imageSmall,
      'info-box--dense-header': denseHeader
    }">
        <img class="info-box__img" :src="imageUrl" alt=""/>
        <main class="info-box__content">
            <h6 class="info-box__content__date" v-if="date">{{ formatedDate }}</h6>
            <h4 class="info-box__content__header" v-if="title">{{ title }}</h4>
            <p class="info-box__content__text" v-if="text">{{ text }}</p>
            <router-link v-if="ctaUrl" :to="ctaUrl" :class="{
              'button': true,
              'button--blue': isBlue,
              'button--white': isWhite
            }">{{ ctaText }}</router-link>
        </main>
    </div>
</template>

<script>
import moment from 'moment';

export default {
  computed: {
    formatedDate() {
      if(this.date){
        return moment(String(this.date)).format('DD.MM.YYYY');
      } else {
        return '';
      }
    }
  },
  props: [
    'title',
    'text',
    'imageUrl',
    'ctaUrl',
    'ctaText',
    'date',
    'isBlue',
    'isWhite',
    'imageLeft',
    'imageRight',
    'imageBig',
    'imageSmall',
    'denseHeader'
  ]
}
</script>

<style lang="stylus" scoped>
    @require '../theme/styles/components/info-box.styl'
</style>