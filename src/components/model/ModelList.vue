<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="title"></PageHeader>
      <div class="row">
        <div class="col-sm-12">
          <div class="pull-right">
            <div class="form-inline">
              <div class="input-group">
                <select class="form-control" v-model="selected">
                  <option value="0">구분</option>
                  <option value="1">이름</option>
                  <option value="2">내용</option>
                </select>
              </div>
              <div class="input-group ml5">
                <input
                  v-model="searchValue"
                  type="text"
                  class="form-control"
                  @keyup.enter="searchSubmit"
                />
                <span class="input-group-btn">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click.self.prevent="searchSubmit"
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
              <tr v-for="(model, idx) in modelsMod" :key="idx">
                <td class="text-center">{{ model.idx }}</td>
                <td>
                  <a
                    @click.self.prevent="ModelDetail(idx)"
                    class="board-link board-nowrap"
                    >{{ model.modelKorName }}</a
                  >
                </td>
                <td class="text-center">{{ model.createTime }}</td>
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
              :pageSize="pageSize"
              :perPageListCnt="modelInfo.modelListTotalCnt"
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
      selected: "0",
      searchValue: "",
      pageNum: 1, //보여질 페이지수
      pageSize: 10, //한페이지에 보여줄 리스트 수
      pageUnit: 3, // 페이징 번호 노출될 수
      pageUnitNumber: 0,
      categoryCd: "",
    };
  },
  computed: {
    modelInfo() {
      return this.$store.state.model;
    },
    pageNumberList() {
      let visiblePage;
      //노출될 페이징 갯수
      let pageCnt = Math.ceil(
        this.$store.state.model.modelListTotalCnt / this.pageSize
      );
      //페이징번호 노출되는 총 단위
      let fullPage = Math.floor(pageCnt / this.pageUnit);

      //마지막페이지 갯수
      let lastPage = pageCnt % this.pageUnit;
      if (this.pageUnitNumber == fullPage) {
        visiblePage = lastPage;
      } else {
        visiblePage = this.pageUnit;
      }
      return visiblePage;
    },
    modelsMod() {
      let modelManOrigin = this.$store.state.model.modelList;
      if (modelManOrigin == undefined) return;
      const newArr = modelManOrigin.map((item) => {
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
    searchSubmit() {
      this.modelData();
    },
    modelData() {
      this.categoryCd = this.$route.params.page;
      if (this.categoryCd == "1") {
        this.title = "남자 모델";
      } else if (this.categoryCd == "2") {
        this.title = "여자 모델";
      } else if (this.categoryCd == "3") {
        this.title = "시니어 모델";
      }
      const page = {
        page: this.pageNum,
        size: this.pageSize,
        categoryCd: this.categoryCd,
        searchType: this.selected,
        searchKeyword: this.searchValue,
      };
      this.$store.dispatch("LIST_MODEL", page);
    },
    nextPage() {
      this.pageNum += 1;
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber += 1;
      }
      this.modelData();
    },
    prevPage() {
      //이전페이지는 pageNum이 변하기전에  먼저 값을 계산
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber -= 1;
      }
      this.pageNum -= 1;
      this.modelData();
    },
    movePage() {
      console.log(event.target);
      console.log(event.target.querySelector("span"));
      this.pageNum = Number(event.target.querySelector("span").innerText);
      this.modelData();
    },
    ModelDetail: function (idx) {
      const seq = this.modelInfo.modelList[idx].idx;
      this.$router.push(`/admin/detail/${this.categoryCd}/${seq}`);
    },
  },
  watch: {
    $route: "modelData",
  },
  created() {
    this.modelData();
  },
};
</script>

<style></style>
