<template>
    <div class='header'>
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题</div>
        <router-link to="/city">
            <div class="header-right">
              {{this.$store.state.city}}
              <span class="iconfont arrow-icon">&#xe665;</span>
            </div>
        </router-link>

    </div>
</template>

<script>
export default{
    name:'HomeHeader',
}
</script>


<style lang="stylus" scoped>
    // @ 会直接定位到src文件夹下，但是css文件中引入别的需要在前面加上～
    @import '~styles/varibles.styl'
    .header
        display: flex
        line-height: .86rem
        background-color $bgColor
        color: #fff
        .header-left
            width: .64rem
            float: left
            .back-icon
                margin-left: .2rem
        .header-input
            flex: 1
            margin-top: .12rem
            line-height: .64rem
            height: .64rem
            // margin-bottom: .12rem
            margin-left: .2rem
            background-color #fff
            border-radius: .1rem
            color: #ccc
            padding-left: .2rem
        .header-right
            min-width: 1.04rem
            padding 0 .1rem
            float: right
            text-align: center
            color #fff
            .arrow-icon
                font-size: .1rem
                margin-left: -0.04rem;
</style>




