<template>
    <div class="post">
        <h1>Derniers articles</h1>
        <loader v-if="loading"></loader>
        <div v-if="posts">
            <article v-for="post in posts">
                <h2>{{ post.title }}</h2>
                <div class="post-content">
                    <div class="abstract" v-html="post.abstract.html">
                    </div>
                    <div class="meta">
                        <span class="date">
                            publié le {{ post.creationDate | formatDate }}
                        </span>
                        <span class="authors">
                            — par
                            <a v-for="author in post.authors" href="">
                                {{ author.name }}
                            </a>
                        </span>
                        <span class="category">
                            — dans
                            <a href="">
                                {{ post.category.name }}
                            </a>
                        </span>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
    const resources = require('../libs/resources.js');

    module.exports = {
        data() {
            return {
                posts: null,
                error: null,
                loading: true
            };
        },
        created() {
            this.fetchData();
        },
        watch: {
            $route: 'fetchData'
        },
        methods: {
            fetchData() {
                resources('lastPosts', {
                    page: 1
                }).then((posts) => {
                    this.posts = posts;
                }, (err) => {
                    this.error = String(err);
                }).then(() => {
                    this.loading = false;
                });
            }
        },
        filters: {
            formatDate(date) {
                return (new Date(date)).toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../../client/styles/colors.less";

    h2 {
        position: relative;
        background-color: @article-header-background;
        background-image:
            repeating-linear-gradient(-55deg,
                transparent,
                transparent 1px,
                @article-header-background 1px,
                @article-header-background 3px);
        padding-top: 0.1em;
        padding-left: 2em;
        padding-right: 2em;
        margin-bottom: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        border-bottom: 3px double @white;
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

    div p {
        margin-top: 0;
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
    }

    a {
        color: @link;
        text-decoration: none;
        transition: color 0.3s ease-out;

        &:hover {
            color: @content-text;
        }
    }

</style>
