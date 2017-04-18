<template>
    <div>
        <h1>Derniers articles</h1>
        <loader v-if="loading"></loader>
        <div v-if="error"> {{error}} </div>
        <small-post v-for="post in posts" v-bind="post"></small-post>
    </div>
</template>

<script>
    const resources = require('../../libs/resources.js');

    module.exports = {
        props: ['resource', 'name', 'withAbstract'],
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
                resources(this.resource, {
                    page: 1,
                    categoryName: this.name,
                    withAbstract: this.withAbstract
                }).then(({posts}) => {
                    this.posts = posts;
                }, (err) => {
                    this.error = String(err);
                }).then(() => {
                    this.loading = false;
                });
            }
        }
    };
</script>
