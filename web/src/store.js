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
    setPlayMp3Url: (state, url) => {
      console.log('state数据修改');
      let m = state.playMp3;
      Vue.set(m, 'src', url);
      console.log(state.src);
      //state.playMp3.src = url;
    },
    setPlayMp3: (state, mp3) => {
      console.log('state数据修改');
      let m = state.playMp3;
      Vue.set(m, 'title', mp3.name);
      Vue.set(m, 'artist', mp3.artists[0].name);
      Vue.set(m, 'pic', mp3.album.artist.img1v1Url);
      // state.playMp3.src = mp3.url;
      //state.playMp3.pic = mp3.album.artist.img1v1Url;
    },
    setSearchResult: (state, result)=>{
      Vue.set(state, 'searchResult', result);
    },
  },
  getters: {
    getSearchResult: state=> {
      return state.searchResult;
    },
    getPlayMp3: state=> {
      console.log('获取state数据');
      return state.playMp3;
    }
  },
  actions: {

  }
})
