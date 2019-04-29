<template>
    <div>
        <input type="text" placeholder="请输入书名/作者/关键字">
        <span>搜索</span>
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
<style scoped lang="scss">
    div{
        width: 100%;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        display: flex;
        input{
            width: 85%;
            height: 90%;
            margin-left: 3%;
            border-radius: 8px;
            outline: none;  
            border: none;
            padding-left: 5%;
            border: 1px solid #ccc;
        }
        span{
            width: 15%;
            height: 90%;
            margin-right: 2%;
            border-radius: 8px;
            color: #666;
            border: 1px solid #ccc;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>