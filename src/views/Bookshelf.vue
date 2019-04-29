<template>
  <div class="big">
    <header>
      <commonTou></commonTou>
    </header>
    <main>
      <myInput :flag="flag" @btnchunk="add"></myInput>
      <classCommon :weekHot="weekHot" :headerList="headerList" :className="className"></classCommon>
    </main>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {
      flag: true,
      bannerArr: [],
      weekHot: [],
      headerList: [],
      className: "weekHotTwo",
      bool: false
    };
  },
  computed: {},
  methods: {
    add() {
      this.bool = !this.bool;
      console.log(this.bool);
      this.bool
        ? (this.className = "weekHot")
        : (this.className = "weekHotTwo");
    }
  },
  created() {
    this.$http.get("/api/swiper").then(res => {
      this.bannerArr = res.data.items[0].data.data;
      this.weekHot = res.data.items[1].data.data;
      res.data.items.splice(0, 1);
      this.headerList = res.data.items;
      console.log(this.weekHot);
    });
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
</style>