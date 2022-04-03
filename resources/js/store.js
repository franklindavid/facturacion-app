import { createStore ,mapMutations } from 'vuex'


// Create a new store instance.
export const store = createStore({
  state () {
      return{
          token: localStorage.getItem( 'auth') || '',
          user: localStorage.getItem( 'user') || '',
        }
  },
  mutations: {
    setToken (state,token) {
      localStorage.setItem('auth',token);
      state.token=token;
    },
    setUser (state,user) {
      localStorage.setItem('user',user);
      state.user=user;
    },
    clearToken(state){
        localStorage.removeItem('auth');
        state.token='';
    }
  },
  /*methods: {
    ...mapMutations([
      'setToken', // map `this.search()` to `this.$store.commit('search')`

      // `mapMutations` also supports payloads:
      'clearToken' // map `this.searchBy(key)` to `this.$store.commit('searchBy', key)`
    ]),
  }*/
})