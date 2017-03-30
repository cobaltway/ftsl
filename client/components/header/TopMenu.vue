<template>
    <menu>
        <router-link to="">→ À propos</router-link>
        <div>
            <router-link to="">Contact</router-link>
            <router-link to="" class="icon-twitter"></router-link>
            <router-link to="" class="icon-facebook"></router-link>
        </div>
    </menu>
</template>

<style lang="less" scoped>
    @import "../../../client/styles/colors.less";
    @import "../../../client/styles/icons.less";

    menu {
        display: inline-block;
        float: right;
        margin-top: 10px;

        a {
            text-decoration: none;
            display: block;
            color: @header-subtext;
            text-align: right;
            transition: color 0.3s ease-out;

            &:hover {
                color: @button-background;
            }
        }

        div {
            margin-top: 5px;

            a {
                background-color: @button-background;
                color: @button-text;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 4px;
                padding-right: 4px;
                border-radius: 20px;
                border: 3px double @button-text;
                display: inline-block;
                transition: box-shadow 0.3s ease-out;

                &:first-child {
                    padding-left: 15px;
                    padding-right: 15px;
                }

                &:hover {
                    box-shadow: inset 0 0 200px 200px rgba(0, 0, 0, 0.2);
                    color: @button-text;
                }
            }
        }
    }

    .icon-twitter {
        background-color: rgb(64, 153, 255);
    }

    .icon-facebook {
        background-color: rgb(109, 139, 201);
    }
</style>
