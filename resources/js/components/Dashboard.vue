<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Componente <span class="badge bg-secondary">DASHBOARD</span></h1>
                <h3 v-if="user"> Hi , {{user.name}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
export default {    
    name:"Dashboard",
    data(){
        return {
            user: null
        }
    },
    mounted(){
        if(store.state.token !== ''){
            axios.post('/api/auth/checkToken', store.state.token).then(
                res=>{

                }
            ).catch(err=>{
                    store.commit('clearToken');
                    this.$router.push('/login');
                    console.log(err.response.data);
                }
            );
        }else{
            this.$router.push('/login');
        }
    },
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
                    console.log(err.response.data);
                }
            );

        }
    },
    async created(){
         await axios.post('/api/auth/me',  store.state.token).then(res=>{
                 if(res.data.success){
                    this.user = res.data.user
                    // console.log(this.user);
                 }
            }).catch(err=>{
                // console.log('err');
                console.log(err.response.data)
                this.user = []
            })
    }
}
</script>