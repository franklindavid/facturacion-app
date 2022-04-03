<template>
 <div class="container ">
    <div class="row">       
        <div class="row">
            <div class="col text-center">
                <h1> <span class="badge bg-secondary">FACTURAS</span></h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12 mb-2">
            <router-link :to='{name:"create"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
    </div>
    <div class="row">
        <div class="col-12">             
            <div class="table-responsive">
                <table class="table table-striped table-dark">
                    <thead class="">
                        <tr>
                            <th>ID</th>
                            <th># Factura</th>
                            <th>Fecha</th>
                            <th>Emisor</th>
                            <th>NIT Emisor</th>
                            <th>Receptor</th>
                            <th>NIT Receptor</th>
                            <th>Productos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="factura in facturas" :key="factura.id">
                            <td>{{ factura.id }}</td>
                            <td>{{ factura.numero_factura }}</td>
                            <td>{{ factura.fecha }}</td>
                            <td>{{ factura.nombre_emisor }}</td>
                            <td>{{ factura.nit_emisor }}</td>
                            <td>{{ factura.nombre_receptor }}</td>
                            <td>{{ factura.nit_receptor }}</td>
                            <td>{{factura.productos.length}} Producto/s</td>
                            <td>
                                <router-link :to='{name:"edit",params:{id:factura.id}}' class="btn btn-warning"><i class="fas fa-wrench"></i></router-link>
                                 <a type="button" @click="deleteFactura(factura.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                           
                            </td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>                          
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
            facturas:[]
        }
    },
    mounted(){
         this.mostrarFacturas();
        if(store.state.token !== ''){
            axios.post('/api/auth/checkToken', store.state.token).then(
                res=>{

                }
            ).catch(err=>{
                    store.commit('clearToken');
                    this.$router.push('/login');
                }
            );
        }else{
            this.$router.push('/login');
        }
    },
    methods:{
        async mostrarFacturas(){
            await axios.get('/api/factura', store.state.token).then(response=>{
                this.facturas = response.data
            }).catch(error=>{
                this.facturas = []
            })
        },
        deleteFactura(id){
            if(confirm("¿Confirma eliminar el registro?")){
                axios.delete(`/api/factura/${id}`).then(response=>{
                    this.mostrarFacturas()
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }
        }
    }
}
</script>