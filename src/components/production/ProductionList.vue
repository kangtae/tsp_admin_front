<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="title"></PageHeader>
      <div class="container">
        <div class="row">
          <div
            class="col-xs-4"
            v-for="(production, idx) in productionsMod"
            :key="idx"
          >
            <a class="thumbnail thumbnail-link" href="Gallery관리_02상세.html">
              <span class="thumbail-crop thumbail-crop-4:3">
                <img :src="production.file_path" />
              </span>
              <div class="caption">
                <h3 class="thumbnail-title-2 line-ellipsis">
                  {{ production.title }}
                </h3>
                <p>작성일 : {{ production.createTime }}</p>
                <p>노출여부 : {{ production.visible }}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center">
            <Pagenation
              :pageNum="pageNum"
              :pageNumberList="pageNumberList"
              :pageUnitNumber="pageUnitNumber"
              :pageUnit="pageUnit"
              :perPageListCnt="productionInfo.productionListCnt"
              @movePage="movePage"
              @prevPage="prevPage"
              @nextPage="nextPage"
            ></Pagenation>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-left"></div>
        <div class="col-sm-4 text-center"></div>
        <div class="col-sm-4 text-right">
          <router-link
            class="btn btn-success"
            to="/admin/regist/production"
            role="button"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i> 등록
          </router-link>
        </div>
      </div>
    </div>
    <!-- //container-fluid -->
  </div>
</template>

<script>
import Pagenation from "@/components/common/Pagenation";
import PageHeader from "@/components/common/PageHeader";

export default {
  data() {
    return {
      title: "프로덕션",
      page: this.pageNum,
      size: this.pageSize,
      pageNum: 1, //보여질 페이지수
      pageSize: 10, //한페이지에 보여줄 리스트 수
      pageUnit: 10, // 페이징 번호 노출될 수
      pageUnitNumber: 0,
    };
  },
  computed: {
    productionInfo() {
      return this.$store.state.production;
    },
    pageNumberList() {
      let visiblePage;
      let fullPage = parseInt(
        this.$store.state.production.productionListCnt / this.pageUnit
      );
      let pageCnt = parseInt(
        this.$store.state.production.productionListCnt / this.pageSize
      );
      if (pageCnt == 0) {
        pageCnt = 1;
      }
      let lastPage = pageCnt % this.pageUnit;

      if (this.pageUnitNumber != fullPage) {
        visiblePage = this.pageUnit;
      } else {
        visiblePage = lastPage;
      }
      return visiblePage;
    },
    productionsMod() {
      let productionOrigin = this.$store.state.production.productionList;
      if (productionOrigin == undefined) return;
      const newArr = productionOrigin.map((item) => {
        const createTime = item.createTime.split("T")[0];
        item.createTime = createTime;
        return item;
      });
      return newArr;
    },
  },
  components: {
    PageHeader,
    Pagenation,
  },
  methods: {
    productionData() {
      const page = {
        page: this.pageNum,
        size: this.pageSize,
      };
      this.$store.dispatch("LIST_PRODUCTION", page);
    },
    nextPage() {
      this.pageNum += 1;
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber += 1;
      }
      this.productionData();
    },
    prevPage() {
      //이전페이지는 pageNum이 변하기전에  먼저 값을 계산
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber -= 1;
      }
      this.pageNum -= 1;
      this.productionData();
    },
    movePage() {
      console.log(event.target);
      console.log(event.target.querySelector("span"));
      this.pageNum = Number(event.target.querySelector("span").innerText);
      this.productionData();
    },
  },
  created() {
    this.productionData();
  },
};
</script>

<style></style>
