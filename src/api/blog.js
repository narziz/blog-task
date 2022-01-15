import axios from 'axios';

export default {
  getArticles: () => axios.get('https://jsonplaceholder.typicode.com/posts'),
  getArticle: (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}