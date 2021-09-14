<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
// import "http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import "../src/assets/js/common";
import Layout from "@/components/common/Layout";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
<style scoped>
@import "assets/css/font-awesome.min.css";
@import "assets/css/reset.css";
@import "assets/css/common.css";
</style>
