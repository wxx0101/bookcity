<template v-if="weekHot && headerList">
    <div>
        <div :class="className" v-for="(item2,index2) in headerList">
      <h2>{{item2.ad_name}}</h2>
      <div class="content">
        <div class="item-box" v-for="(item1,index1) in weekHot">
          <div class="img-box">
            <img v-lazy="item1.cover" @click="xiangClick(index1,item1)">
          </div>
          <div class="con">
            <h4>{{item1.title}}</h4>
            <b>{{item1.authors}}</b>
            <p>{{item1.summary}}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
    props:["weekHot","headerList","className"],
    components:{

    },
    data(){
        return {
          // className: "weekHotTwo"
        }
    },
    computed:{

    },
    methods:{
      xiangClick(index,item){
        this.$router.push({name: "xiangQing",params:{id:index,item:item}})
        
      }
    },
    created(){
        
    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">

  .weekHotTwo {
    width: 90%;
    margin: 5%;
    background: #fff;
    h2 {
      width: 100%;
      height: 3rem;
      font-weight: 200;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid #ccc;
    }
    .content {
      width: 100%;
      .item-box {
        width: 100%;
        height: 150px;
        z-index: 999;
        display: flex;
        margin: 3% 0;
        .img-box {
          width: 40%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .con{
          flex: 1;
          h4{
            width: 100%;
            height: 2.2rem;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding-left: 6%;
            // white-space: nowrap;
            // overflow: hidden;
            // text-overflow: ellipsis;
          }
          b{
            display: inline-block;
            width: 100%;
            height: 2.4rem;
            padding-right: 5%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: purple;
          }
          p{
            width: 204px;
            height: 4.5rem;
             overflow: hidden;
          }
        }
      }
    }
  }
   .weekHot{
      width: 94%;
      margin: 3%;
      background: #fff;
      h2{
          width: 100%;
          height: 3rem;
          font-weight: 200;
           display: flex;
           justify-content: flex-start;
           align-items: center;
           border-bottom: 1px solid #ccc;
      }
      .content{
          width: 100%;
          display: flex;
          flex-flow: wrap;
          .item-box{
              width: 31%;
              height: 150px;
              margin: 1%;
              display: flex;
              flex-direction: column;
              .img-box{
                  width: 100%;
                  height: 80%;
                  background: hotpink;
                  img{
                      width: 100%;
                      height: 100%;
                  }
              }
              h4{
                  flex: 1;
                  min-width: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
              }
              b,p{
                display: none;
              }
          }
      }
  }

</style>