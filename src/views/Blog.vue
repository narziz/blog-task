<template>
  <div class="container">
    <h1 class="blog-title">Welcome to Our Blog</h1>

    <div class="row">
      <div v-for="article in articles" :key="article.id" class="column" >
        <CardBlog :article="article" />
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex';
import CardBlog from '@/components/CardBlog.vue'

export default {
  date(){
    return {

    }
  },
  components: {
    CardBlog
  },
  created(){
    this.fetchData()
  },
  computed: {
    ...mapState({
      articles: 'articles'
    })
  },
  methods: {
    async fetchData(){
      await this.$store.dispatch('getArticles')
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-title{
  margin-bottom: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
}
</style>