<template>
    <div class="container">
        <header>
            <logo></logo>
            <top-menu></top-menu>
        </header>
        <div id="content">
            <slot></slot>
        </div>
        <nav></nav>
    </div>
</template>

<style lang="less">
    @import "../../client/styles/globals.less";
    @import "../../client/styles/colors.less";

    .container {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: @background;
        color: @content-text;
        font-family: 'Slabo 27px', serif;
    }

    header {
        border-bottom: 1px dashed @header-subtext;
        background: linear-gradient(@white, @background);
        width: 100%;
        padding-left: 5%;
        padding-right: 5%;
        color: @header-text;
        height: 90px;
        box-sizing: border-box;
        font-family: 'Share Tech Mono', monospace;
    }

    #content {
        height: calc(~"100vh - 90px");
        width: 75%;
        padding-left: 5%;
        padding-right: 5%;
        padding-top: 0.67em;
        box-sizing: border-box;


        h1, h2, h3, h4, h5, h6 {
            font-family: 'Share Tech Mono', monospace;
            font-weight: normal;
        }

        h1 {
            &:before, &:after {
                content: " ═ ";
            }
        }
    }

    nav {
        display: none;
        position: fixed;
        right: 0;
        width: 25%;
    }

</style>
