<template>
  <div id="app" class="box"></div>
</template>

<script>
// variables in  js
import variables from "./variables";
export default {
  name: "home",
  components: {},
  data() {
    return {
      variables: { ...variables }
    };
  },
  created() {
    console.log(this.variables, "App-this.variables");
  }
};
</script>

<!--css -->
<style lang="css">
#app {
  height: 500px;
}
@import "./styles/css-use.css";
</style>


<!--scss -->
<style lang="scss">
@import "./styles/scss-use.scss";
</style>

<!-- less-->
<style lang="less">
@import "./styles/less-use.less";
</style>
