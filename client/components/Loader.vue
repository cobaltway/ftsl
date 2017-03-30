<template>
    <div class='hexagon-loader'></div>
</template>

<script>
    module.exports = {
    };
</script>

<style lang="less" scoped>
    @import "../../client/styles/colors.less";

    @keyframes grow {
      0%   {
          width: 1px;
          opacity: 0;
      }

      85% {
          width: 2em;
          opacity: 1;
      }

      100% {
          width: 2em;
          opacity: 0;
      }
    }

    .hexagon-loader {
        margin: 0.1em auto;
        width: 1px;
        height: 3.464em;
        border-radius: 0.2em e('/') 0.1em;
        background: @header-text;
        animation: grow 1.15s ease-in-out 0.15s infinite;

        &:before, &:after {
            position: absolute;
            width: inherit;
            height: inherit;
            border-radius: inherit;
            background: inherit;
            content: '';
        }

        &:before {
            transform: rotate(60deg);
        }

        &:after {
            transform: rotate(-60deg);
        }
    }

</style>
