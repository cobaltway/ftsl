<template>
    <article>
        <h2> {{ title }} </h2>
        <div class="post-content">
            <div v-if="abstract" class="abstract" v-html="abstract"></div>
            <div class="meta">
                <span class="date">
                    publié le {{ creationDate | formatDate }}
                </span>
                <span v-if="authors" class="authors">
                    — par <a v-for="author in authors" href=""> {{ author.name }} </a>
                </span>
                <span v-if="category" class="category">
                    — dans <a href=""> {{ category.name }} </a>
                </span>
            </div>
        </div>
    </article>
</template>

<script>
    module.exports = {
        props: ['title', 'abstract', 'creationDate', 'authors', 'name', 'category'],
        filters: {
            formatDate: require('../../libs/formatDate.js')
        }
    };
</script>

<style lang="less" scoped>
    @import "../../../client/styles/colors.less";

    h2 {
        position: relative;
        background-color: @article-header-background;
        background-image: repeating-linear-gradient(-55deg, transparent, transparent 1px,
            @article-header-background 1px, @article-header-background 3px);
        padding-top: 0.1em;
        padding-left: 2em;
        padding-right: 2em;
        margin-bottom: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 3px double @background;
        font-size: 1.3em;

        &:before, &:after {
            top: 0.1em;
            position: absolute;
            content: "⬢";
            color: @white;
        }

        &:before {
            left: 0.5em;
        }

        &:after {
            right: 0.5em;
        }
    }

    .meta {
        text-align: right;
        padding-right: 1em;
        padding-top: 1em;
        color: @article-subtext;
    }

    .abstract {
        padding-right: 1em;
        padding-left: 1em;
        box-sizing: border-box;
        text-align: justify;
    }

    article {
        padding-bottom: 1em;
    }

    .post-content {
        padding-top: 1.5em;
        padding-bottom: 1.5em;
        background-color: @white;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border: 1px solid @article-header-background;
        border-top: none;
    }
</style>
