<template>
    <div>
        <h1>Comentarios</h1>
        <ol>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, officiis.</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, officiis.</p></li>
            <li><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, officiis.</p></li>
        </ol>
        <router-link :to="{path:`/food/${this.$route.params.id}`}">Ocultar</router-link>
    </div>
</template>

<script>
export default {
    name: 'foodcomments-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    //components: {},
}
</script>

<style scoped>
    
</style>