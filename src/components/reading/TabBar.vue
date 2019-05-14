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

    nav > a {
        border-left: 1px solid #aaa;
        display: inline-block;
        width: 20%;
        margin: 0 auto;
    }

    nav > a:first-child {
        border-left: none;
    }

    a > i {
        color: var(--color-primaire);
        font-size: 28px;
        line-height: 10px;
        margin: 0;
        vertical-align: middle;
    }

    .active {
      color: var(--color-secondaire);
    }
</style>

<style>
    #app {
        padding-bottom: 70px;
    }
</style>

<template>
    <nav>
        <router-link to="#"><i class="fas fa-stream" :class="{active: isActive==1}"></i></router-link>
        <router-link to="#"><i class="fas fa-comment" :class="{active: isActive==2}"></i></router-link>
        <router-link to="#"><i class="fas fa-star" :class="{active: isActive==3}"></i></router-link>
        <router-link to="#"><i class="fas fa-bug" :class="{active: isActive==4}"></i></router-link>
        <router-link to="#"><i class="fas fa-expand" :class="{active: isActive==5}"></i></router-link>
    </nav>
</template>

<script>
export default {
    name: 'tabBar',
    props: {
        isActive: { 
            type: Number, 
            required: false, 
            default: 0
        }
    }
}
</script>
