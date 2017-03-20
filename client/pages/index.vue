<style scoped>
    .red {
        color: green;
    }
</style>

<template>
  <h1 class="red">{{msg}}</h1>
</template>

<script>
module.exports = {
    data: function() {
        return {
            msg: 'Hello world!'
        };
    }
};
</script>
