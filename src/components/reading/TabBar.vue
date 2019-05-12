<style scoped>
    nav {
        position: fixed;
        z-index: 10;
        bottom: -1px;
        left: 0;
        width: 100%;
        margin: auto;
        padding: 20px 0;
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
        This will be a nice TabBar for reading screen.
    </nav>
</template>

<script>
export default {
    name: 'tabBarReading',
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
