<template>
    <div class="category">
        <loader v-if="loading"></loader>
        <div v-if="category">
            <h1>
                {{ category.name }}
            </h1>
            <p v-html="category.description.html">
            </p>
        </div>
    </div>
</template>

<script>
    const resources = require('../libs/resources.js');

    module.exports = {
        props: ['name'],
        data() {
            return {
                category: null,
                error: null,
                loading: true
            };
        },
        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                resources('lastPostCategory', {
                    name: this.name
                }).then((category) => {
                    this.category = category;
                }, (err) => {
                    this.error = String(err);
                }).then(() => {
                    this.loading = false;
                });
            }
        }
    };
</script>

<style lang="less" scoped>
</style>
