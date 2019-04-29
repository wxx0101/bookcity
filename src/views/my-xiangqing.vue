<template>
    <div>
        <div class="content" v-if="dataList">
            <li class="img-box">
            <img :src=dataList.cover alt="">
        </li>
        
        <p class="right">
            <h4>{{dataList.title}}</h4>
            <span>{{dataList.summary}}</span>
        </p>
        <div><button @click="btnRead">开始阅读</button>  <b @click="homeClick">返回首页</b></div>
        </div>
        <div class="error" v-if="!dataList">
            该书没有详细信息....
        </div>
    </div>
</template>
<script>
export default {
    props:[],
    components:{

    },
    data(){
        return {
            dataList: []
        }
    },
    computed:{

    },
    methods:{
        btnRead(){
            this.$router.push({name:"myRead"})
        },
        homeClick(){
            this.$router.push({path:"/"})
        }
    },
    created(){
       this.dataList = this.$route.params.item;
    },
    mounted(){
        
    }
}
</script>
<style scoped lang="scss">
    .img-box img{
        width: 200px;
        height: 220px;
    }
    .content h4{
        height: 60px;
        line-height: 60px;
        font-size: 30px;
        color: red;
        text-align: center;
    }
    .content li{
        text-decoration: none;
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 2% 0;
    }

    .content>div{
        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
         button{
        width: 260px;
        height: 60px;
        outline: none;
        border: none;
        background: paleturquoise;
        border-radius: 10px;
        color: purple;
        font-size: 25px;
    }
    b{
        margin: 0 2%;
    }
    }
   
</style>