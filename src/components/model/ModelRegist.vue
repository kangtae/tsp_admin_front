<template>
  <div class="box1">
    <table class="table2">
      <!-- 2016-05-13 수정 -->
      <colgroup>
        <col style="width: 10%" />
        <col style="width: auto" />
      </colgroup>
      <!--// 2016-05-13 수정 -->
      <tbody>
        <tr>
          <th class="table2__th">
            이름 (한글)<span class="required-field">(필수)</span>
          </th>
          <td class="table2__td">
            <input type="text" name="" id="" class="input1 input1_size-100p" />
          </td>
        </tr>
        <tr>
          <th class="table2__th">
            이름 (영문)<span class="required-field">(필수)</span>
          </th>
          <td class="table2__td">
            <input type="text" name="" id="" class="input1 input1_size-100p" />
          </td>
        </tr>
        <tr>
          <th class="table2__th">
            내용<span class="required-field">(필수)</span>
          </th>
          <td class="table2__td">
            <textarea cols="3" rows="3" style="height: 200px"> </textarea>
            <hr class="bar pt5" />
            <input
              type="file"
              name=""
              id=""
              class="input1 input1_file input1_size-100p"
            />
            <p class="pt5 color01">
              가로 000px 세로 000px ( 1mb 이내의 JPG/GIF/PNG파일만 가능)
            </p>
          </td>
        </tr>
        <tr>
          <th class="table2__th">
            대표 이미지<span class="required-field">(필수)</span>
          </th>
          <td class="table2__td">
            <dl class="define-list1">
              <dt class="define-list1__dt define-list1__dt_size-50">
                PC 이미지
              </dt>
              <dd class="define-list1__dd">
                <input
                  type="file"
                  name=""
                  id=""
                  class="input1 input1_file input1_size-100p"
                />
                <hr class="bar" />
                <p class="color01">가로 000px 세로 000px(PNG파일만 가능)</p>
              </dd>
              <dt class="define-list1__dt define-list1__dt_size-50">
                Mobile 이미지
              </dt>
              <dd class="define-list1__dd">
                <input
                  type="file"
                  name=""
                  id=""
                  class="input1 input1_file input1_size-100p"
                />
                <hr class="bar" />
                <p class="color01">가로 000px 세로 000px(PNG파일만 가능)</p>
              </dd>
            </dl>
            <!-- //define-list1 -->
          </td>
        </tr>
        <tr>
          <th class="table2__th">
            공개여부<span class="required-field">(필수)</span>
          </th>
          <td class="table2__td">
            <input
              type="radio"
              name="private"
              value="1"
              id="private0"
              class="radio1"
            /><label for="private0" class="radio1-label">공개</label>
            <input
              type="radio"
              name="private"
              value="2"
              id="private1"
              class="radio1"
              checked="checked"
            /><label for="private1" class="radio1-label">비공개</label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- //box1 -->
</template>

<script>
export default {};
</script>

<style></style>
