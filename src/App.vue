<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  background: #eee;
  font-family: "幼圆";
  box-sizing: border-box;
}
html, 
body,
#app {
  width: 100%;
  height: 100%;
}
#app .big {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  width: 100%;
  height: 3rem;
}
main {
  flex: 1;
  overflow: auto;
}
</style>
