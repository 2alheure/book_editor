<style scoped>
    p {
        text-align: center;
        background-color: var(--color-ternaire);
        opacity: 0.7;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        margin: 20px 10px;
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
