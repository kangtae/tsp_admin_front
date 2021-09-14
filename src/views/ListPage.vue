<template>
  <div>
    <Header></Header>
    <div id="container">
      <Lnb></Lnb>
      <div class="content">
        <div class="inner_cont">
          <ContentHeader> </ContentHeader>
          <div class="box1">
            <table class="table2">
              <!-- 2016-05-13 수정 -->
              <colgroup>
                <col style="width: 7%" />
                <col style="width: auto" />
              </colgroup>
              <!--// 2016-05-13 수정 -->
              <tbody>
                <tr>
                  <th class="table2__th">등록일자</th>
                  <td class="table2__td">
                    <form action="">
                      <fieldset class="fieldset">
                        <legend class="legend">검색조건</legend>
                        <div class="filter-form">
                          <div class="filter-form__item">
                            <input
                              type="text"
                              name=""
                              id=""
                              class="input1 input1_size-110 input1_calendar"
                            /><i class="fa fa-calendar"></i> ~
                            <input
                              type="text"
                              name=""
                              id=""
                              class="input1 input1_size-110 input1_calendar"
                            /><i class="fa fa-calendar"></i>
                            <span class="pl10">
                              <a href="#" class="btn btn_color2 btn_size-80"
                                >오늘</a
                              >
                              <a href="#" class="btn btn_color2 btn_size-80"
                                >일주일</a
                              >
                              <a href="#" class="btn btn_color2 btn_size-80"
                                >1개월</a
                              >
                              <a href="#" class="btn btn_color2 btn_size-80"
                                >3개월</a
                              >
                              <a href="#" class="btn btn_color2 btn_size-80"
                                >전체</a
                              >
                            </span>
                          </div>
                        </div>
                        <!-- //filter-form -->
                      </fieldset>
                    </form>
                  </td>
                </tr>
                <tr>
                  <th class="table2__th">검색어</th>
                  <td class="table2__td">
                    <form action="">
                      <fieldset class="fieldset">
                        <legend class="legend">검색조건</legend>
                        <div class="filter-form">
                          <div class="filter-form__item">
                            <input
                              type="text"
                              name=""
                              id=""
                              class="input1 input1_size-200"
                            />
                            <a href="#" class="btn btn_color1"
                              ><i class="fa fa-search fa-lg"></i>&nbsp; 조회</a
                            >
                          </div>
                        </div>
                        <!-- //filter-form -->
                      </fieldset>
                    </form>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //box1 -->

          <div class="box1 box1_transparent">
            <div class="action-form">
              <select name="" id="" class="select1">
                <option value="">10개씩 보기</option>
                <option value="">30개씩 보기</option>
                <option value="">50개씩 보기</option>
              </select>
            </div>
            <!-- //action-form -->
          </div>
          <!-- //box1 -->

          <div class="box1">
            <table class="table1">
              <colgroup>
                <col style="width: 5%" />
                <col style="width: 10%" />
                <col style="width: 45%" />
                <col style="width: 10%" />
                <col style="width: 10%" />
              </colgroup>
              <thead>
                <tr>
                  <th class="table1__th">
                    <label class="label1"
                      ><input
                        type="checkbox"
                        name=""
                        value=""
                        id=""
                        class="checkbox1" /><span
                        class="checkbox1-label checkbox1-label_single"
                      ></span
                    ></label>
                  </th>
                  <th class="table1__th">번호</th>
                  <th class="table1__th">이름</th>
                  <th class="table1__th">게시</th>
                  <th class="table1__th">등록일자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table1__td">
                    <label
                      ><input
                        type="checkbox"
                        name=""
                        value=""
                        id=""
                        class="checkbox1" /><span
                        class="checkbox1-label checkbox1-label_single"
                      ></span
                    ></label>
                  </td>
                  <td class="table1__td">10400</td>
                  <td class="table1__td">
                    <a href="#" class="link">강태완</a>
                  </td>
                  <td class="table1__td">O</td>
                  <td class="table1__td">2021.09.13</td>
                </tr>

                <!-- 게시글이 없는 경우 -->
                <tr>
                  <td class="table1__td" colspan="7">등록된 글이 없습니다.</td>
                </tr>
                <!--// 게시글이 없는 경우 -->
              </tbody>
            </table>
            <!-- //table1 -->
          </div>
          <!-- //box1 -->

          <div class="btn-group box1">
            <div class="btn-group__left">
              <select name="" id="" class="select1">
                <option value="">선택변경</option>
                <option value="">등록</option>
              </select>
            </div>
            <div class="btn-group__right">
              <a href="#" class="btn btn_color1">게시 등록</a>
            </div>
          </div>
          <!-- //btn-group -->

          <div class="paging">
            <a
              href="#"
              class="paging__link paging__link_home fa fa-angle-double-left"
              >처음</a
            >
            <a href="#" class="paging__link paging__link_prev fa fa-angle-left"
              >이전</a
            >
            <a href="#" class="paging__link on">1</a>
            <a href="#" class="paging__link">2</a>
            <a href="#" class="paging__link">3</a>
            <a href="#" class="paging__link">4</a>
            <a href="#" class="paging__link paging__link_next fa fa-angle-right"
              >다음</a
            >
            <a
              href="#"
              class="paging__link paging__link_end fa fa-angle-double-right"
              >끝</a
            >
          </div>
          <!-- //paging -->
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

export default {
  components: {
    Header,
    ContentHeader,
    Footer,
    Lnb,
  },
};
</script>

<style></style>
