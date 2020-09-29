<template>
    <div>
        <h1>Comida {{id}}</h1>
        <img :src="src"><br>
        <router-link to="/food">Volver |</router-link>
        <router-link :to="{path:`/food/${id}/comments`}">Comentarios</router-link>

        <router-view></router-view>

    </div>
</template>

<script>
export default {
    name: 'foodpost-component',
    // props: {},
    data: function(){
        return {
            src:"",
        }
    },
    computed: {
        id(){
            return this.getId();
        },
    },
    methods: {
        // -- Metodos
        getId(){
            return this.$route.params.id;
        },
    },
    //components: {},
    created(){
        this.src=`http://lorempixel.com/500/500/food/${this.getId()}`;
    }
}
</script>

<style scoped>
    
</style>