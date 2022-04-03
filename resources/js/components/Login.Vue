<template>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="credentials.email">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="credentials.password">
        </div>
        <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Submit</button>
    </form>
</template>

<script>
import {store} from '../store';
export default {    
    name:"Login",
    data(){
        return {
            credentials :{
                email: "",
                password: "",
            },
            user:[],
            loading:true,
        }
    },
    mounted(){
        if(store.state.token !== ''){
            axios.post('/api/auth/checkToken', store.state.token).then(
                res=>{
                    if(res.data.success){
                        store.commit('setToken',store.state.token);
                        this.$router.push('/dashboard');
                    }
                }
            ).catch(err=>{
                    store.commit('clearToken');
                    console.log(err.response.data);
                }
            );
        }else{
        }
    },
    methods:{
        login(){
            axios.post('/api/auth/login', this.credentials).then(
                res=>{
                    if(res.data.access_token){
                        store.commit('setToken',res.data.access_token);
                        this.me();
                        this.$router.push('/dashboard');
                    }
                }
            ).catch(
                err=>{
                    console.log(err.response.data)
                }
            )
        },
        async me(){
            await axios.post('/api/auth/me',  store.state.token).then(res=>{
                 if(res.data.success){
                    this.user = res.data.user
                    store.commit('setUser',res.data.user);
                 }
            }).catch(err=>{
                console.log(err.response.data)
                this.user = []
            })
        },
    }
}
</script>
