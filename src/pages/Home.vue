<template>
  <div class="home">

    <el-row>
      <div class="topNav">
        <!-- logo -->
        <div class="logo">
          <!-- <a href="http://explorer.trustnote.org"></a> -->
          <a href="http://explorer2-alpha.trustnote.org:8000"></a>
        </div>
        <!-- 挖矿状态 -->
        <div style="display: block;" class="status chineseWeb">
          <div class="statusL">
            已挖出 <span class="issuedCoin">386634</span> <span class="fontspace">RNG</span>
            <div class="line"></div>
          </div>
          <div class="statusR">
            共发行 <span class="nonIssuedCoin">500386620</span> <span class="fontspace">RNG</span>
          </div>
          <div class="cb"></div>

          <div class="statusL">
            当前抵押率： <span class="depositRatio">24</span> <span class="fontspace">%</span>
            <div class="line"></div>
          </div>
          <div class="statusR">
            年化通胀率： <span class="inflationRatio">17</span> <span class="fontspace">%</span>
          </div>
          <div class="cb"></div>
        </div>

        <div class="status englishWeb" style="display: none;">
          <div class="statusL">
            <span class="issuedCoin">386634</span>
            new RNGs are Mined
            <div class="line"></div>
          </div>
          <div class="statusR">
            <span class="nonIssuedCoin">500386620</span>
            RNGs to be Mined
          </div>
          <div class="cb"></div>

          <div class="statusL">
            depositRatio:
            <span class="depositRatio">24</span> %
            <div class="line"></div>
          </div>
          <div class="statusR">
            inflationRatio:
            <span class="inflationRatio">17</span> %
          </div>
          <div class="cb"></div>
        </div>
        <!-- 查询地址 -->
        <div class="search">
          <form method="post">
            <input type="text" id="inputSearch" placeholder="输入单元地址或钱包地址">
            <input type="submit" value="" id="submitSearch">
          </form>
        </div>
      </div>
    </el-row>
    <br>
    <el-row>
      <el-card>
        <div slot="header">
          <span>单元列表</span>
          <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    props: {}
  }
</script>

<style lang="less" scoped>
  .home {

    .topNav {
      position: relative;
      height: 400px;
      background: url(../assets/background.png) no-repeat center center;
    }

    .logo {
      margin: 0 auto;
      padding-top: 55px;
      width: 108px;
      height: 103px;
    }

    .logo a {
      display: block;
      width: 108px;
      height: 103px;
      background: url(../assets/logo.png) no-repeat center center;
    }

    .status {
      margin: 0 auto;
      margin-top: 55px;
      width: 980px;
      height: 50px;
      /* background: red; */
      font-size: 24px;
      color: #fff;
      font-weight: 300;
    }

    .statusL, .statusR {
      position: relative;
      width: 470px;
      float: left;
    }

    span.fontspace {
      letter-spacing: 2px;
      font-size: 24px !important;
      font-weight: 300 !important;
    }

    .statusL span, .statusR span {
      font-size: 36px;
      font-weight: 500;
    }

    .statusL .line {
      position: absolute;
      width: 1px;
      height: 40px;
      top: 5px;
      right: 0;
      background: #fff;
    }

    .statusL {
      text-align: right;
      padding-right: 20px;
      width: 470px;
    }

    .statusR {
      padding-left: 20px;
      width: 470px;
    }

    .search {
      margin: 0 auto;
      margin-top: 40px;
      width: 770px;
      height: 50px;
      border-radius: 30px;
      overflow: hidden;
    }

    .search form {
      width: 100%;
      height: 100%;
      position: relative;
    }

    .search form input#inputSearch {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 16px;
      padding-left: 30px;
    }

    .search form input#submitSearch {
      outline: none;
      border: none;
      width: 40px;
      height: 40px;
      position: absolute;
      right: 30px;
      top: 5px;
      background: url(/img/search.png) no-repeat center center;
      background-size: 25px;
      cursor: pointer;
    }

    /* 页面顶部 结束 */
  }
</style>
