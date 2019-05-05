<style scoped>
    .book-tuile-container {
        position: relative;
        min-width: 150px;
        max-width: 150px;
        height: 225px;
        padding: 0;
        margin: 10px;
        border-radius: 5px;
        border: 2px solid var(--color-secondaire);
        box-shadow: 4px 4px 4px var(--color-secondaire);
        text-align: center;
    }

    .title, .subtitle, .author, .info-point {
        width: 100%;
        margin: 0;
        padding: 5px;
        color: #fff;
    }

    .title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        font-family: var(--font-title);
        margin-top: 10px;
    }

    .subtitle {
        font-family: var(--font-title);
    }

    .author {
        background-color: #fff;
        color: var(--color-primaire);
        position: absolute;
        bottom: 0;
        right: 0;
        border-radius: 0 0 5px 5px;
    }

    .info-point {
        background-color: var(--color-secondaire);
        width: 40px;
        height: 40px;
        border-radius: 15px 0px 0px 0px;
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .info-point > i {
        font-size: 24px;
        line-height: 10px;
        vertical-align: middle;
        text-align: center;
    }
</style>


<template>
    <div class="book-tuile-container" :style="{backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75), rgba(0,0,0,0)), url(' + img + ')', backgroundSize: 'contain'}" @click="$router.push('book-details/'+id)">
        <p class="title">{{title}}</p>
        <p class="subtitle">{{subtitle}}</p>
        <p v-if="!isMine" class="author">{{author}}</p>
        <p v-if="isMine" class="info-point"><i class="fas fa-info"></i></p>
    </div>
</template>

<script>
export default {
    props: {
        id: Number,
        title: String,
        subtitle: String,
        author: String,
        img: String,
        isMine: Boolean
    }
}
</script>
