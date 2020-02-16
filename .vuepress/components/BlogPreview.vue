<template>
    <div class="blog-preview">
        <BlogPostPreview :isBig="true" :blogpost="blogpost"/>
        <div class="blog-preview__double-box">
            <BlogPostPreview :isBig="false" :blogpost="blogpost"/>
            <BlogPostPreview :isBig="false" :blogpost="blogpost"/>
        </div>
    </div>
</template>

<script>
import BlogPostPreview from './BlogPostPreview';

export default {
    data: function () {
        return {
            blogpost: {
                date: 'date',
                title: 'title',
                text: 'text',
                urls: {
                    image: '/img/frontpage/4.png',
                    post: '#'
                }
            }
        }
    },
    components: {
        BlogPostPreview
    }
}
</script>

<style lang="stylus">
    @require '../theme/styles/components/blog-preview.styl'
</style>