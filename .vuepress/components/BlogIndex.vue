<template>
    <section class="section section--wide section--centered">
        <div v-for="(post, index) in posts">
            <InfoBox
                :title="post.frontmatter.title"
                :text="post.frontmatter.description"
                :date="post.frontmatter.date"
                :ctaUrl="post.path"
                ctaText="Číst více"
                :imageUrl="post.frontmatter.image"

                :imageLeft="true"
                :imageBig="true"
                :isWhite="true"
                :denseHeader="true"
                
                v-if="((index+1)%2)?true:false"
            />

            <InfoBox
                :title="post.frontmatter.title"
                :text="post.frontmatter.description"
                :date="post.frontmatter.date"
                :ctaUrl="post.path"
                ctaText="Číst více"
                :imageUrl="post.frontmatter.image"

                :imageRight="true"
                :imageBig="true"
                :isBlue="true"
                :denseHeader="true"

                v-else
            />
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith(this.$themeLocaleConfig.blogpath) && !x.frontmatter.blog_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        },
        readmore() {
            return this.$themeLocaleConfig.blogreadmore
        }
    }
}
</script>