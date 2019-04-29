<template>
    <div>
         <input type="text" placeholder="请登录" v-model="val">
        <span @click="btnLogin">登录</span>
        <b @click="homeClick">返回首页</b>
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
            val: ""
        }
    },
    computed:{

    },
    methods:{
        btnLogin(){
             const storAge = window.sessionStorage;
            storAge.username = this.val;
            if(storAge.username){
                this.$router.push({name:"myRead"})
            }
        },
        homeClick(){
            this.$router.push({path:"/"})
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
        margin: 5% 0;
        input{
            width: 60%;
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