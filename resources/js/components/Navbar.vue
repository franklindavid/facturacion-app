<template>   
<div class="collapse" id="navbarToggleExternalContent">
  <div class="bg-dark p-4">
    <h5 class="text-white h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Facturax</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link exact-active-class="active" to="/" class="nav-link active" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link exact-active-class="active" to="/dashboard" class="nav-link active" aria-current="page">Dashboard</router-link>
        </li>
        <li class="nav-item">
          <router-link exact-active-class="active" to="/factura" class="nav-link active" aria-current="page">Factura</router-link>
        </li>
      </ul>
       <!-- <span class="navbar-text">
            <h3 v-if="user !== null">{{user.name}}</h3>
      </span> -->
       <span class="navbar-text">
            <!-- <router-link  exact-active-class="active" to="/login" class="nav-link active" aria-current="page" v-if="!user">Login</router-link> -->
            <router-link  exact-active-class="active" to="/login" class="nav-link active" aria-current="page">Login</router-link>
      </span>
       <span class="navbar-text">
            <router-link exact-active-class="active" to="#" class="nav-link active" aria-current="page"   @click.prevent="logout">Logout</router-link>
            <!-- <router-link exact-active-class="active" to="#" class="nav-link active" aria-current="page" v-if="user !== null"   @click.prevent="logout">Logout</router-link> -->
      </span>
    </div>
  </div>
</nav>
{{user}}
</template>

<script>
import {store} from '../store';
export default ({
    name:'Navbar',
    // props:['user'],    
    methods:{
        logout(){
            axios.post('/api/auth/logout', store.state.token).then(
                res=>{
                    store.commit('clearToken');
                    this.$router.push('/login');
                }
            ).catch(err=>{
                    store.commit('clearToken');
                    this.$router.push('/login');
                    console.log(err);
                }
            );

        }
    },
    data() {
        return {
            user: null
        }
    },
    async onRenderTracked(){
         await axios.post('/api/auth/me',  store.state.token).then(res=>{
                 if(res.data.success){
                    this.user = res.data.user
                    // console.log(this.user);
                 }
            }).catch(err=>{
                console.log('err');
                console.log(err.response.data)
                this.user = []
            })
    }
})
</script>
