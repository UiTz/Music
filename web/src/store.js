import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResult: [],
    playMp3: {
      title: '',
      artist: '',
      src: '',
      pic: ''
    }
  },
  mutations: {
    setPlayMp3: (state, mp3) => {
      state.playMp3.title = mp3.title;
      state.playMp3.artist = mp3.author;
      state.playMp3.src = mp3.url;
      state.playMp3.pic = mp3.pic;
    },
    setSearchResult: (state, result)=>{
      state.searchResult = result;
    },
  },
  getters: {
    getSearchResult: state=> {
      return state.searchResult;
    }
  },
  actions: {

  }
})
