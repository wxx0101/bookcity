<template>
    <div>
        <span class="iconfont icon-28"></span>
        <router-link to="/" tag="span">书城</router-link>
        <router-link to="/Bookshelf" tag="span">书架</router-link>
        <span class="iconfont icon-wode"></span>
    </div>
</template>
<script>

export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">
    div{
        width: 100%;
        height: 3rem;
        background: #eee;
        display: flex;
        border-bottom: 1px solid #666;
    }
    div span{
        width: 25%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div span.router-link-exact-active{
        color: orangered;
    }
</style>