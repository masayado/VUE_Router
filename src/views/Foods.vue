<template>
    <div>
        <h1>Nuestras comidas</h1>
        <div class="grid_food">
            <div v-for="i in 6" :key="i">
                <h3>Comida {{i}}</h3>
                <a @click.prevent="redirectTo(i)"><img :src="srcImage(i)"></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'foods-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
        srcImage(i){
           return `http://lorempixel.com/300/200/food/${i}`;
        },
        redirectTo(i){
            this.$router.push(`food/${i}`)
        }
    },
    //components: {},
}
</script>

<style scoped lang="scss">
    @import "../styles/layout/_grid_food.scss";
</style>