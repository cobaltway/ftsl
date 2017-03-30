<template>
    <h1>
        le Télépat<span>h+</span>
        <small>Expression transbiologiste</small>
    </h1>
</template>

<style lang="less" scoped>
    @import "../../../client/styles/colors.less";

    h1 {
        position: relative;
        display: inline-block;

        span {
            position: absolute;
            z-index: 1;
            color: @header-subtext;

            &:after {
                content: "➲";
                position: absolute;
                color: @header-text;
                z-index: -1;
                left: -16%;
                top: -40%;
                font-size: 45pt;
            }
        }

        small {
            position: absolute;
            bottom: -50%;
            right: -49.5%;
            color: @header-subtext;
            font-size: 10pt;
        }
    }
</style>
