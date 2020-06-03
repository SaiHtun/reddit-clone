const API = 'https://www.reddit.com/.json';
const subAPI = 'https://www.reddit.com/r/';

export default {
  getPosts() {
    return fetch(`${API}`).then(res => res.json()).then(results => results);
  },
  getSub(sub) {
    return fetch(`${subAPI}${sub}/.json`).then(res => res.json()).then(results => results);
  }
}