
<template>
    <Navbar/>
    <div class="container mt-5">
        <router-view></router-view>
    </div>
</template>

<script>
import {store} from '../store';
import Navbar from './Navbar.vue';
import { userLogged } from '../reactive.js'
export default ({    
    name: 'App',
    components:{
       Navbar,
    },
    data() {
        return {
             userLogged
        }
    },
    async created(){
        if(store.state.token){
            await axios.post('/api/auth/me',  store.state.token).then(res=>{
              if(res.data.success){
                  userLogged.user = res.data.user
              }
          }).catch(err=>{
              console.log(err.response.data)
              userLogged.user = []
          })
      }      
    },
    async update(){
        if(store.state.token){
         await axios.post('/api/auth/me',  store.state.token).then(res=>{
                 if(res.data.success){
                    userLogged.user = res.data.user
                    // console.log(this.user);
                 }
            }).catch(err=>{
                console.log(err.response.data)
                userLogged.user = []
            })
        }
    }
})
</script>