<template>
  <div style="display: table; width: 100%">
    <Header></Header>
    <component :is="currentComponent"></component>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Lnb from "@/components/common/Lnb";
import ModelRegist from "@/components/model/ModelRegist";

export default {
  data() {
    return {
      currentComponent: "ModelRegist",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ModelRegist,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "model") {
        this.currentComponent = "ModelRegist";
      }
    },
  },
  watch: {
    $route: "fetchData",
  },
  created() {
    this.fetchData();
  },
};
</script>

<style></style>
