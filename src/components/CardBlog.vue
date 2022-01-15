<template>
  <div class="blog-card">
    <img src="@/assets/images/blog.jpg" alt="blog image" class="blog-card__image">
    <div class="blog-card__details">
      <router-link :to="{ name: 'Article', params: { id: article.id }}">
        <h4 class="blog-card__title">{{ article.title }}</h4>
      </router-link>

      <button class="blog-card__button" @click="goToArticle(article.id)">
        <span>Read More</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default: null
    }
  },
  methods: {
    goToArticle(id){
      this.$router.push({ name: 'Article', params: { id } })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card{
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 .5rem 1rem rgba(0,0,0, 0.15);
  border-radius: 5px;

  &__image{
    width: 100%;
    height: 15rem;
    object-fit: cover;
    object-position: center;
    border-radius: 5px 5px 0 0;
  }

  &__details{
    padding: 1rem 1rem 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: calc(100% - 15rem);
  }

  &__title{
    margin:  0;
    color: #2c3e50;
    text-transform: capitalize;

    &:hover{
      color: #d02053;
    }
  }

  &__button{
    border: none;
    background: none;
    cursor: pointer;
    margin-top: 1rem;
    text-transform: uppercase;
    align-self: flex-end;
    color: #2c3e50;
    font-weight: 900;
    letter-spacing: 2px;

    &:hover{
      color: #d02053;
    }
  }
}

@media (min-width: 768px){
  .blog-card{
    &__image{
      height: 20rem;
    }

    &__details{
      height: unset;
    }
  }
}

@media (min-width: 1024px){
  .blog-card{
    &__image{
      height: 15rem;
    }
  }
}

</style>