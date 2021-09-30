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
        <span class="sr-only">{{ pageList + pageUnitNumber * pageUnit }}</span>
      </button>
    </li>
    <!-- <li class="active"> -->
    <li>
      <button :disabled="pageNum == productionInfo" @click="childNextPage">
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
    "pageSize",
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
  computed: {
    productionInfo() {
      let pageCnt = parseInt(this._props.perPageListCnt / this._props.pageSize);
      if (this._props.perPageListCnt % this._props.pageSize != 0) {
        pageCnt += 1;
      }
      if (pageCnt == 0) {
        pageCnt = 1;
      }
      return pageCnt;
    },
  },
};
</script>

<style></style>
