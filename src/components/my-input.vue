<template>
    <div>
        <input type="text" placeholder="请输入书名/作者/关键字" @click="iptClick">
        <span v-if="flag" class="iconfont icon-gongzuo" @click="$emit('btnchunk')"></span>
    </div>
</template>
<script>
export default {
    props:["flag"],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        iptClick(){
            this.$router.push({name: "btnInput"})
        }
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
            font-size: 30px;
            margin-left: 4%;
            color: #666;
        }
    }
   
</style>