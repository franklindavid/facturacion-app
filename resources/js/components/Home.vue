<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col text-center">
                <h1>Componente <span class="badge bg-secondary">HOME</span></h1>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
export default ({    
    name: 'Home',
    // props:['user'],
    // data() {
    //     return {
    //         user: null
    //     }
    // },
    // async created(){
    //      await axios.post('/api/auth/me',  store.state.token).then(res=>{
    //              if(res.data.success){
    //                 this.user = res.data.user
    //                 // console.log(this.user);
    //              }
    //         }).catch(err=>{
    //             // console.log('err');
    //             console.log(err.response.data)
    //             this.user = []
    //         })
    // }
})
</script>
