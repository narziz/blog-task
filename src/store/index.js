import { createStore } from 'vuex'
import api from '@/api/blog.js'

export default createStore({
  state: {
    articles: null,
    article: null
  },
  
  mutations: {
    articles(state, articles){
      state.articles = articles
    },
    article(state, article){
      state.article = article
    }
  },

  actions: {
    async getArticles({ commit }){
      try {
        const response = await api.getArticles()
        commit('articles', response.data)
      } catch (error) {
        console.log('error >> ', error)
      }
    },

    async getArticle({ commit }, id){
      try {
        const response = await api.getArticle(id)
        const isSuccess = !!response.data
        commit('article', response.data)

        return Promise.resolve(isSuccess)
      } catch (error) {
        
        if (error.response.status === 404) {
          console.log('error >> ', error)
        }
      }
    }
  },

  modules: {
  }
})
