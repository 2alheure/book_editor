<style scoped>
    a {
        position: absolute;
        left: 15px;
        top: 25px;
    }

    a > i {
        color: var(--color-primaire);
        font-size: 24px;
        line-height: 10px;
        vertical-align: top;
        margin: 0;
    }
</style>


<template>
    <a @click="$router.go(url | -1)"><i class="fas fa-chevron-left"></i></a>
</template>

<script>
export default {
    name: 'backButton',
    props: {
        url: {
            type: String,
            required: false
        }
    }
}
</script>
