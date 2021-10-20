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
              <th class="text-center" style="width: 60px">선택</th>
              <th class="text-center" style="width: 60px">번호</th>
              <th class="text-center" style="width: 100px">구분</th>
              <th class="text-center">제목</th>
              <th class="text-center" style="width: 100px">등록일</th>
            </thead>
            <tbody>
              <tr v-for="(portfolio, idx) in portfolioMod" :key="idx">
                <td class="text-center">
                  <label class="form-checkbox">
                    <input type="checkbox" name="" id="" value="option1" />
                    <i></i>
                  </label>
                </td>
                <td class="text-center">
                  {{ portfolio.rnum }}
                </td>
                <td class="text-center">{{ portfolio.categoryNm }}</td>
                <td>
                  <a
                    @click.self.prevent="PortfolioDetail(idx)"
                    class="board-link board-nowrap"
                    >{{ portfolio.title }}
                  </a>
                </td>
                <td class="text-center">{{ portfolio.createTime }}</td>
              </tr>
            </tbody>
          </table>
          <!-- //table -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-left">
          <button type="button" class="btn btn-danger btn-flat">
            <i class="fa fa-trash" aria-hidden="true"></i> 선택삭제
          </button>
          <button type="button" class="btn btn-danger btn-flat">
            <i class="fa fa-check-square" aria-hidden="true"></i> 전체선택
          </button>
        </div>
        <div class="col-sm-4 text-center">
          <div class="text-center">
            <Pagenation
              :pageNum="pageNum"
              :pageNumberList="pageNumberList"
              :pageUnitNumber="pageUnitNumber"
              :pageUnit="pageUnit"
              :pageSize="pageSize"
              :perPageListCnt="portfolioInfo.portFolioListCnt"
              @movePage="movePage"
              @prevPage="prevPage"
              @nextPage="nextPage"
            ></Pagenation>
          </div>
        </div>
        <div class="col-sm-4 text-right">
          <router-link
            class="btn btn-success"
            to="/admin/regist/portfolio"
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
      title: "포트폴리오",
      page: this.pageNum,
      size: this.pageSize,
      selected: "0",
      searchValue: "",
      pageNum: 1, //보여질 페이지수
      pageSize: 3, //한페이지에 보여줄 리스트 수
      pageUnit: 3, // 페이징 번호 노출될 수
      pageUnitNumber: 0,
    };
  },
  computed: {
    portfolioInfo() {
      return this.$store.state.portfolio;
    },
    pageNumberList() {
      let visiblePage;
      //노출될 페이징 갯수
      let pageCnt = Math.ceil(
        this.$store.state.portfolio.portFolioListCnt / this.pageSize
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
    portfolioMod() {
      let portfolioOrigin = this.$store.state.portfolio.portFolioList;
      if (portfolioOrigin == undefined) return;
      const newArr = portfolioOrigin.map((item) => {
        const createTime = item.createTime.split(" ")[0];
        // const fileMask = `../../../public/upload/${item.file_mask}`;
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
    portfolioData() {
      const page = {
        page: this.pageNum,
        size: this.pageSize,
        searchType: this.selected,
        searchKeyword: this.searchValue,
      };
      this.$store.dispatch("LIST_PORTFOLIO", page);
    },
    searchSubmit() {
      this.portfolioData();
    },
    nextPage() {
      this.pageNum += 1;
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber += 1;
      }
      this.portfolioData();
    },
    prevPage() {
      //이전페이지는 pageNum이 변하기전에  먼저 값을 계산
      if ((this.pageNum - 1) % this.pageUnit == 0) {
        this.pageUnitNumber -= 1;
      }
      this.pageNum -= 1;
      this.portfolioData();
    },
    movePage() {
      console.log(event.target);
      console.log(event.target.querySelector("span"));
      this.pageNum = Number(event.target.querySelector("span").innerText);
      this.portfolioData();
    },
    PortfolioDetail(idx) {
      const seq = this.portfolioInfo.portFolioList[idx].idx;
      console.log(seq);
      this.$router.push(`/admin/detail/portfolio/${seq}`);
    },
  },
  created() {
    this.portfolioData();
  },
};
</script>

<style></style>
