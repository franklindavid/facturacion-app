<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Crear Factura</h4></div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label># Factura</label>
                                    <input type="text" class="form-control" v-model="factura.numero_factura">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Fecha</label>
                                    <input type="date" class="form-control" v-model="factura.fecha">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nombre_emisor</label>
                                    <input type="text" class="form-control" v-model="factura.nombre_emisor">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nit_emisor</label>
                                    <input type="text" class="form-control" v-model="factura.nit_emisor">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nombre_receptor</label>
                                    <input type="text" class="form-control" v-model="factura.nombre_receptor">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>nit_receptor</label>
                                    <input type="text" class="form-control" v-model="factura.nit_receptor">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <button  class="btn btn-primary"><i class="fas fa-plus-circle"></i>Agregar Producto</button>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-warning">Editar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"edit",
    data(){
        return {
           factura:{
                numero_factura:"",
                fecha:"",
                nombre_emisor:"",
                nit_emisor:"",
                nombre_receptor:"",
                nit_receptor:"",
            }
        }
    },
    mounted(){
        this.mostrarFacturas()
    },
    methods:{
        async mostrarFacturas(){
            await axios.get(`/api/factura/${this.$route.params.id}/edit`).then(response=>{
                const { numero_factura, fecha,nombre_emisor,nit_emisor,nombre_receptor,nit_receptor } = response.data.factura
                this.factura.numero_factura = numero_factura
                this.factura.fecha = fecha
                this.factura.nombre_emisor = nombre_emisor
                this.factura.nit_emisor = nit_emisor
                this.factura.nombre_receptor = nombre_receptor
                this.factura.nit_receptor = nit_receptor
            }).catch(error=>{
                console.log(error.response.data)
            })
        },
        async actualizar(){
            await axios.put(`/api/factura/${this.$route.params.id}`,this.factura).then(response=>{
                 this.$router.push('/factura');
            }).catch(error=>{
                console.log(error.response.data)
            })
        }
    }
}
</script>