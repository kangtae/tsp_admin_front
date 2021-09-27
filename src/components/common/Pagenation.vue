<template>
  <ul class="pagination">
    <li>
      <button :disabled="pageNum === 1" @click="childPrevPage">
        <span aria-hidden="true">
          <i class="fa fa-angle-double-left" aria-hidden="true"></i>
        </span>
      </button>
    </li>

    <li
      v-for="(pageList, idx) in pageNumberList"
      :key="idx"
      :class="{
        active: pageList + pageUnitNumber * pageUnit === pageNum,
      }"
    >
      <button @click.self.prevent="childMovePage">
        {{ pageList + pageUnitNumber * pageUnit }}
        <span class="sr-only">{{ idx + 1 }}</span>
      </button>
    </li>
    <!-- <li class="active"> -->
    <li>
      <button :disabled="pageNum === perPageListCnt" @click="childNextPage">
        <span aria-hidden="true">
          <i class="fa fa-angle-double-right" aria-hidden="true"></i>
        </span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    "pageNum",
    "pageNumberList",
    "pageUnitNumber",
    "pageUnit",
    "perPageListCnt",
  ],
  methods: {
    nextPage() {
      this._props.pageNum += 1;
      if ((this._props.pageNum - 1) % this._props.pageUnit == 0) {
        this._props.pageUnitNumber += 1;
      }
      // this.newsData();
    },
    prevPage() {
      //이전페이지는 pageNum이 변하기전에  먼저 값을 계산
      if ((this._props.pageNum - 1) % this._props.pageUnit == 0) {
        this._props.pageUnitNumber -= 1;
      }
      this._props.pageNum -= 1;
      // this.newsData();
    },
    childMovePage() {
      this.$emit("movePage");
    },
    childPrevPage() {
      this.$emit("prevPage");
    },
    childNextPage() {
      this.$emit("nextPage");
    },
  },
};
</script>

<style></style>
