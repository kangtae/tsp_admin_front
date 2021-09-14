<template>
  <div>
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
                      <date-picker
                        v-model="time1"
                        valueType="format"
                      ></date-picker>
                      ~
                      <date-picker
                        v-model="time2"
                        valueType="format"
                      ></date-picker>
                      <span class="pl10">
                        <button
                          class="btn btn_color2 btn_size-80"
                          @click.self.prevent="todayBtn"
                        >
                          오늘
                        </button>
                        <button
                          class="btn btn_color2 btn_size-80"
                          @click.self.prevent="weekBtn"
                        >
                          일주일
                        </button>
                        <button class="btn btn_color2 btn_size-80">
                          1개월
                        </button>
                        <button class="btn btn_color2 btn_size-80">
                          3개월
                        </button>
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
      <a href="#" class="paging__link paging__link_home fa fa-angle-double-left"
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
      <a href="#" class="paging__link paging__link_end fa fa-angle-double-right"
        >끝</a
      >
    </div>
    <!-- //paging -->
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
    };
  },
  computed: {
    lastWeek() {
      let d = new Date();
      let dayOfMonth = d.getDate();
      d.setDate(dayOfMonth - 7);
      return d;
    },
    lastMonth() {
      let d = new Date();
      let monthOfYear = d.getMonth();
      d.setMonth(monthOfYear - 1);
      return d;
    },
  },
  methods: {
    todayBtn() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      if (month < 10) {
        month = `0${month}`;
      }
      this.time1 = `${year}-${month}-${date}`;
      this.time2 = `${year}-${month}-${date}`;
    },
    weekBtn() {
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let date = today.getDate();
      if (month < 10) {
        month = `0${month}`;
      }
      if (date < 10) {
        date = `0${date}`;
      }
      this.time2 = `${year}-${month}-${date}`;

      let week = this.lastWeek;
      let weekYear = week.getFullYear();
      let weekMonth = week.getMonth() + 1;
      let weekDate = week.getDate();
      if (weekMonth < 10) {
        weekMonth = `0${weekMonth}`;
      }
      if (weekDate < 10) {
        weekDate = `0${weekDate}`;
      }
      this.time1 = `${weekYear}-${weekMonth}-${weekDate}`;
    },
  },
};
</script>

<style></style>
