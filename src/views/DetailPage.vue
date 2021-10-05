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
import ResumeDetail from "@/components/resume/ResumeDetail";

export default {
  data() {
    return {
      currentComponent: "ResumeDetail",
    };
  },
  components: {
    Header,
    Footer,
    Lnb,
    ResumeDetail,
  },
  methods: {
    fetchData() {
      const page = this.$route.params.page;
      if (page == "resume") {
        this.currentComponent = "ResumeDetail";
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
