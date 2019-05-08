<style scoped>
    p {
        text-align: center;
        background-color: var(--color-ternaire);
        opacity: 0.7;
        color: #fff;
        padding: 5px;
        border: 4px solid #fff, 1px solid #333;
        border-radius: 5px;
    }
</style>

<template>
    <p>{{msg}}</p>
</template>

<script>
export default {
    name: 'errorMessage', 
    props: {
        msg: String
    }
}
</script>
