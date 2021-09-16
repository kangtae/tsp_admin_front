<template>
  <div id="app">
    <Layout></Layout>
  </div>
</template>

<script>
// import "http://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js";
import "../src/assets/libs/dropify/js/dropify.min.js";
import Layout from "@/components/common/Layout";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>
<style scoped>
@import "assets/libs/normalize/normalize.css";
@import "assets/libs/arita-dotum/css/arita-dotum.css";
@import "assets/libs/font-awesome/css/font-awesome.min.css";
@import "assets/libs/bootstrap/css/bootstrap-custom.css";
@import "assets/libs/dropify/css/dropify.min.css";
@import "assets/libs/ez-space-css/css/ez-space.css";
@import "assets/css/common.css";
@import "assets/css/layout.css";
@import "assets/css/style.css";
/* 
@import "assets/css/font-awesome.min.css";
@import "assets/css/reset.css";
@import "assets/css/common.css"; */
</style>
