<style scoped>
    nav {
        position: absolute;
        z-index: 10;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: auto;
        padding: 10px 0;
        text-align: center;
        background-color: #fff;
        border-top: 1px solid #aaa;
        /* Box shadow top */
    }

    nav > a {
        border-left: 1px solid #aaa;
        display: inline-block;
        width: 25%;
        margin: auto;
        height: 25px;
    }

    nav > a:first-child {
        border-left: none;
    }

    a > i {
        color: var(--color-primaire);
    }

    .router-link-exact-active {
      color: var(--color-secondaire);
    }
</style>

<template>
    <nav>
        <router-link to="/"><i class="fas fa-book"></i></router-link>
        <router-link to="/search"><i class="fas fa-search"></i></router-link>
        <router-link to="/my-books"><i class="fas fa-feather-alt"></i></router-link>
        <router-link to="/profile"><i class="fas fa-user"></i></router-link>
    </nav>
</template>

<script>
export default {
    name: 'MyButton',
    props: {
        text: String,
        url: String,
        isBig: { type: Boolean, required: false, default: false}
    }
}
</script>
