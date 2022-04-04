<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Factura</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label># Factura</label>
                                    <input type="text" class="form-control" v-model="factura.numero_factura">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Fecha</label>
                                    <input type="date" class="form-control" v-model="factura.fecha">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nombre_emisor</label>
                                    <input type="text" class="form-control" v-model="factura.nombre_emisor">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nit_emisor</label>
                                    <input type="text" class="form-control" v-model="factura.nit_emisor">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nombre_receptor</label>
                                    <input type="text" class="form-control" v-model="factura.nombre_receptor">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nit_receptor</label>
                                    <input type="text" class="form-control" v-model="factura.nit_receptor">
                                </div>
                            </div>
                        </div>
                       
                        <form @submit.prevent="agregarProducto">
                        <div class="row">
                            <div class="col-3 mb-3">
                                <label>nombre</label>
                                <input type="text" class="form-control" v-model="factura.producto.nombre">
                            </div>                            
                            <div class="col-3 mb-3">
                                <label>descripcion</label>
                                <input type="text" class="form-control" v-model="factura.producto.descripcion">
                            </div>                            
                            <div class="col-3 mb-3">
                                <label>cantidad</label>
                                <input type="number" class="form-control" v-model="factura.producto.cantidad">
                            </div>                            
                            <div class="col-3 mb-3">
                                <label>valor_unitario</label>
                                <input type="number" class="form-control" v-model="factura.producto.valor_unitario">
                            </div>
                        </div>
                        <br>
                         <div class="row">
                            <div class="col-12 mb-12">
                                <center>
                                    <button type="submit" class="btn btn-success text-center">
                                        <i class="fas fa-plus-circle"></i>
                                        Agregar Producto: {{ this.factura.producto.length }}
                                        <i class="fas fa-plus-circle"></i>
                                    </button>
                                </center>
                            </div>
                        </div>
                        <br>
                        </form>
                        <div class="row">
                            <div class="col-12">             
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="">
                                            <tr>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Descripcion</th>
                                                <th>Cantidad</th>
                                                <th>Valor_unitario</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="fp in this.factura.producto" :key="fp.id">
                                                <td>{{ fp.id }}</td>
                                                <td>{{ fp.nombre }}</td>
                                                <td>{{ fp.descripcion }}</td>
                                                <td>{{ fp.cantidad }}</td>
                                                <td>$ {{ fp.valor_unitario }}</td>
                                                <td><a type="button" @click="removeProducto(fp.id)" class="btn btn-danger"><i class="fas fa-times"></i></a></td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Sub Total</td>
                                                <td>$ {{ sub_total }}</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>IVA (19%)</td>
                                                <td>$ {{iva.toFixed(2)}} </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>Total</td>
                                                <td>$ {{(sub_total+iva).toFixed(2)}}</td>
                                            </tr>
                                        </tfoot>                                        
                                    </table>
                                </div>                          
                            </div>
                        </div>                        
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>                      
                        </div>                      
                    </form> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../../store';
export default {
    name:"create",
    data(){
        return {
            factura:{
                numero_factura:"",
                fecha:"",
                nombre_emisor:"",
                nit_emisor:"",
                nombre_receptor:"",
                nit_receptor:"",
                producto:[]
            },  
            count:0,
            sub_total:0,
            iva:0,
            arrayProducto:{
                id:'',
                nombre:  '',
                descripcion: '',
                cantidad: '',
                valor_unitario: '',
            },
        }
    },
    methods:{
        async crear(){
            if((this.factura.numero_factura) && (this.factura.fecha) && (this.factura.nombre_emisor) && (this.factura.nit_emisor)&& (this.factura.nombre_receptor)&& (this.factura.nit_receptor)){
                await axios.post('/api/factura',this.factura).then(response=>{
                    console.log(response.data);
                    this.$router.push('/factura');
                }).catch(error=>{
                    console.log(error.response.data)
                })
            }
        },agregarProducto(){

            var arrayProducto ={
                nombre:  this.factura.producto.nombre,
                descripcion: this.factura.producto.descripcion,
                cantidad: this.factura.producto.cantidad,
                valor_unitario: this.factura.producto.valor_unitario,
            }

            if((arrayProducto.nombre) && (arrayProducto.descripcion) && (arrayProducto.cantidad) && (arrayProducto.valor_unitario)){
                this.count++;
                arrayProducto.id=this.count;
                this.sub_total=this.sub_total+(arrayProducto.cantidad*arrayProducto.valor_unitario);
                this.iva=(this.sub_total)*0.19;
                this.factura.producto.push(arrayProducto);    
                this.factura.producto.nombre ='';
                this.factura.producto.descripcion ='';
                this.factura.producto.cantidad ='';
                this.factura.producto.valor_unitario ='';
                arrayProducto=null;
            }

        },
        removeProducto(id){
            const found = this.factura.producto.find(element => element.id === id);
            this.factura.producto = this.factura.producto.filter((item) => item.id !== id);
            this.sub_total=this.sub_total-(found.cantidad*found.valor_unitario);
            this.iva=(this.sub_total)*0.19;
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
}
</script>