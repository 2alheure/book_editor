<style scoped>
    nav {
        position: fixed;
        z-index: 10;
        bottom: -1px;
        left: 0;
        width: 100%;
        margin: auto;
        padding: 0;
        text-align: center;
        background-color: #fff;
        border-top: 1px solid #aaa;
        box-shadow: 0 -4px 4px #ddd;
    }
</style>

<style>
    #app {
        padding-bottom: 70px;
    }
</style>

<template>
    <nav>
        <router-link :to="'/delete-bloc?book_id='+bookID+'&position='+position" class="button big" style="background-color: var(--color-ternaire)">Supprimer</router-link>
        <router-link class="button big" :to="'/add-bloc?book_id='+bookID+'&position='+position">Ajouter un élément</router-link>
    </nav>
</template>

<script>
export default {
    name: 'tabBarWriting',
    props: {
        bookID: Number,
        position: String,
        isActive: { 
            type: Number, 
            required: false, 
            default: 0
        }
    }
}
</script>
