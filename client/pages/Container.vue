<template>
    <div>
        <h2>This is container</h2>
        <router-link to="/">Index.</router-link>
        <router-link to="/foo">Foo.</router-link>
        <slot></slot>
    </div>
</template>

<script>
    module.exports = {};
</script>

<style scoped>

</style>
