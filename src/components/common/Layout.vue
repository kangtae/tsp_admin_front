<template>
  <div>
    <LodingSpinner :loading="$store.state.LoadingStatus"></LodingSpinner>
    <router-view></router-view>
  </div>
</template>

<script>
import LodingSpinner from "@/components/common/LodingSpinner.vue";
export default {
  components: {
    LodingSpinner,
  },
};
</script>

<style></style>
