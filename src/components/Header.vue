<template>
    <header>
       <div class="left">
            <a href="#">
                <img src="../assets/TC-icon.jpg" alt="TC">
            </a>
        </div>

        <div class="center">
            <a href="#">
                <img src="../assets/inside-peoples-mind-logo.png" alt="logo">
            </a>
        </div>

        <div class="right">
            <label for="search-bar">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="icon"/>
                <input v-model="searchText" type="text" id="search-bar" name="search-bar" placeholder="Search by name..." v-on:input="() => this.$emit('queryChange', searchText)">
            </label>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent',

        data () {
            return { 
                searchText: '',
            }
        },

        method: {

        }
    }
</script>

<style lang="scss" scoped>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 0 20px;
        background-color: white;
        height: 80px;
        width: 100%;
        box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

        .left {
            flex: 1;
            height: 100%;

            img {
                height: 80px;
            }

        }

        .center {
            flex: 1;
            display: flex;
            align-items: center;
            height: 100%;
            justify-content: center;
            align-items: center;

            img {

                height: 60px;
            }

        }

        .right {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            label {
                position: relative;
                display: block;
                height: 35px;

                input {
                    width: 100%;
                    height: 35px;

                    background-color: #ffffff;
                    box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);

                    margin: 0;
                    padding: 5px 0px 0px 35px;

                    box-sizing: border-box;
                    appearance: none;
                    border: none;
                    border-radius: 10px;
                    outline: none;

                    color: #171717;
                    font-size: 16px;

                    &::placeholder {
                        color: #888888;
                    }
                }

                .icon {
                    position: absolute;
                    color: #13425e;
                    width: 25px;
                    margin: 10px 7px 10px 7px;
                    z-index: 111;
                }
            }
        }

        @media (max-width: 500px) {
            .left, .right {
                display: none;
            }
        }
    }
</style>
