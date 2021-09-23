<template>
  <div class="site-container">
    <div class="container-fluid">
      <PageHeader :title="title"></PageHeader>
      <div class="container">
        <div class="row">
          <div class="col-xs-4">
            <a class="thumbnail thumbnail-link" href="Gallery관리_02상세.html">
              <span class="thumbail-crop thumbail-crop-4:3">
                <img src="https://i.imgur.com/yGqdVC8.jpg" alt="" />
              </span>
              <div class="caption">
                <h3 class="thumbnail-title-2 line-ellipsis">
                  On January 29, Dr. Chung Hak Suk from the Korea Institute of
                  Scie
                </h3>
                <p>2018-05-30 / 275</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="text-center">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
              <li class="active">
                <a href="#"
                  >1
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li>
                <a href="#">7</a>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">9</a>
              </li>
              <li>
                <a href="#">10</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">
                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 text-left"></div>
        <div class="col-sm-4 text-center"></div>
        <div class="col-sm-4 text-right">
          <a
            class="btn btn-success"
            href="Gallery관리_03등록.html"
            role="button"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i> 등록</a
          >
        </div>
      </div>
    </div>
    <!-- //container-fluid -->
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import { ProductionList } from "@/api/index";

export default {
  data() {
    return {
      title: "프로덕션",
      page: this.pageNum,
      size: this.pageSize,
      pageNum: 1, //보여질 페이지수
      pageSize: 5, //한페이지에 보여줄 리스트 수
      pageUnit: 3, // 페이징 번호 노출될 수
    };
  },
  computed: {},
  components: {
    PageHeader,
  },
  methods: {
    async productionData() {
      const page = {
        page: this.pageNum,
        size: this.pageSize,
      };
      const { data } = await ProductionList(page);
      console.log(data);
      //   this.productions = data.brandInfoList;
    },
  },
  created() {
    this.productionData();
    console.log(2);
  },
};
</script>

<style></style>
