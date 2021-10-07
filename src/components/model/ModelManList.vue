<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="title"></PageHeader>
      <div class="row">
        <div class="col-sm-12">
          <div class="pull-right">
            <div class="form-inline">
              <div class="input-group">
                <select class="form-control">
                  <option value="">구분</option>
                  <option value="">이름</option>
                  <option value="">내용</option>
                </select>
              </div>
              <div class="input-group ml5">
                <input type="text" class="form-control" />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-primary"
                    onclick="window.location.href='건설_01목록.html'"
                  >
                    <span class="fa fa-search" aria-hidden="true"></span>
                    <span class="text-hide">검색</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="space-vertical"></div>
          <table class="table table-striped table-bordered">
            <thead>
              <th class="text-center" style="width: 60px">번호</th>
              <th class="text-center">모델명</th>
              <th class="text-center" style="width: 100px">등록일</th>
            </thead>
            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td>
                  <a href="건설_02상세.html" class="board-link board-nowrap"
                    >강태완</a
                  >
                </td>
                <td class="text-center">2021-09-16</td>
              </tr>
            </tbody>
          </table>
          <!-- //table -->
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
            to="/admin/regist/model"
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
      title: "남자모델",
      page: this.pageNum,
      size: this.pageSize,
      pageNum: 1, //보여질 페이지수
      pageSize: 1, //한페이지에 보여줄 리스트 수
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
        const createTime = item.createTime.split(" ")[0];
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
      this.$store.dispatch("LIST_MODELMAN", page);
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
