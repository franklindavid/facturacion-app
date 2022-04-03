<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Componente <span class="badge bg-secondary">FACTURA</span></h1>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../../store';
export default {    
    name:"Index",
    data(){
        return {

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
    }
}
</script>