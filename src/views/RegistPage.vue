<template>
  <div>
    <Header></Header>
    <div id="container">
      <Lnb></Lnb>
      <div class="content">
        <div class="inner_cont">
          <ContentHeader></ContentHeader>
          <component :is="currentComponent"></component>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ContentHeader from "@/components/common/ContentHeader";
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
    ContentHeader,
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
