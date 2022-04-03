
<template>

<Navbar />
  <div class="container mt-5">
      <router-view  >
      </router-view>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
export default ({    
    name: 'App',
    components:{
       Navbar,
    },
    data() {
        return {
            user: null
        }
    },
    async created(){
      console.log('created');
      await axios.post('/api/auth/me',  store.state.token).then(res=>{
          console.log('axios');
              if(res.data.success){
                  this.user = res.data.user
              }
          }).catch(err=>{
              console.log('err');
              console.log(err.response.data)
              this.user = []
          })
    }
})
</script>