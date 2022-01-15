<template>
  <div v-if="article" class="container">
    <div class="article">
      <img src="../assets/images/blog.jpg" alt="blog image" class="article__image">
      <h2 class="article__title"> {{ article.title }} </h2>
      <p class="article__body">
        {{ article.body}}
      </p>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState({
      article: 'article'
    })
  },
  created(){
    this.fetchData()
  },
  methods: {
    async fetchData(){
      const success = await this.$store.dispatch('getArticle', this.id)
      if (!success) {
        this.$router.push({ name: 'NotFound' })
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.article{
  text-align: left;

  &__image{
    width: 100%;
    height: 15rem;
    border-radius: 5px;
    object-fit: cover;
    object-position: center;
  }

  &__title{
    text-align: center;
    text-transform: capitalize;
    color: #2c3e50;
  }

}

</style>