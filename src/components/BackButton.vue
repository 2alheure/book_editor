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
        vertical-align: middle;
    }
</style>


<template>
    <a @click="$router.go(-1)"><i class="fas fa-chevron-left"></i></a>
</template>

<script>
export default {
    name: 'backButton'
}
</script>
