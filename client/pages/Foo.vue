<template>
    <h1 class="green">
        {{msg}}
    </h1>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                msg: 'This is Foo...'
            };
        }
    };
</script>

<style lang="less" scoped>
    .green {
        color: green;
    }
</style>
