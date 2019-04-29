<template>
  <div class="big">
    <header>
      <commonTou></commonTou>
    </header>
    <main>
      <myInput :flag="flag"></myInput>

      <div class="swiper-container banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in bannerArr">
            <img :src="item.ad_pic_url" alt>
          </div>
        </div>
      </div>
      <classCommon :weekHot="weekHot" :headerList="headerList" :className="className"></classCommon>
    </main>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper/dist/js/swiper.js";

export default {
  props: {},
  components: {},
  data() {
    return {
      className: "weekHot",
      flag: false,
      bannerArr: [],
      weekHot: [],
      headerList: []
    };
  },
  computed: {},
  methods: {},
  created() {
    this.$http.get("/api/swiper").then(res => {
      this.bannerArr = res.data.items[0].data.data;
      res.data.items.splice(0, 1);
      this.weekHot = res.data.items[1].data.data;
      res.data.items.splice(0, 1);
      this.headerList = res.data.items;
      this.$nextTick(() => {
        new Swiper(".banner", {
          loop: true,
          autoplay: {
            delay: 1000
          }
        });
      });
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
div {
  width: 100%;
  .banner {
    width: 96%;
    margin: 2%;
    border-radius: 8px;
  }
  .banner img {
    width: 100%;
  }
}
</style>