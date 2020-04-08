<template>
  <div style="margin-bottom:50px;">
    <van-nav-bar class="bck" title="我的" left-arrow @click-left="onClickLeft">
      <van-icon name="setting-o" slot="left" />
    </van-nav-bar>
    <div class="peple w-375">
      <div class="mb">
        <img class="portrait" src="http://www.s3tu.com/images/2020/02/14/timg191f45.jpg" alt />
        <a @click="jum" style="color:#fff;font-weight:500;">登录/注册 ></a>
      </div>
      <div class="yuer">
        <div style="margin-right:80px">
          <router-link style="color:#fff;" to="/">
            <b style="padding-left:10px;">0.00</b>
            <p style="font-size:12px">余额（元） ></p>
          </router-link>
        </div>
        <div>
          <router-link style="color:#fff;" to="/">
            <b style="padding-left:20px;">0</b>
            <p style="font-size:12px">红包（个） ></p>
          </router-link>
        </div>
      </div>
    </div>
    <!-- 租聘订单 -->
    <div>
      <div class="btn w-375">
        <b class="bStyle">租聘订单</b>
        <router-link class="linStyle" to="/">查看全部 ></router-link>
      </div>
      <div>
        <van-row class="w-375" gutter="10">
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/17/aa8d362b6f913315fef90.png" alt />
              <br />正常
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/cc339241eb7bacd8dc5c7.png" alt />
              <br />预约
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/ff58c4084168823355002.png" alt />
              <br />投诉
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/50ce81ca989e8adf9a484.png" alt />
              <br />撤单
            </router-link>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 我的服务 -->
    <div class="w-375">
      <div class="btn w-375">
        <b class="bStyle">我的服务</b>
      </div>
      <div class="w-375">
        <van-row class="w-375" gutter="10">
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/65ad82c949b76d3dd9154.png" alt />
              <br />站内信
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/cb7a63205413c2b0e15e4.png" alt />
              <br />资金管理
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/656d77bf12e6a9dd7baed.png" alt />
              <br />发布账号
            </router-link>
          </van-col>
          <van-col class="center" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/293ff03381ddd2c397f7e.png" alt />
              <br />租号投诉
            </router-link>
          </van-col>
          <van-col class="center mt" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/201490cc4c0419f21b373.png" alt />
              <br />免费体验
            </router-link>
          </van-col>
          <van-col class="center mt" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/b1a0b4ec194f4eee1a791.png" alt />
              <br />购买订单
            </router-link>
          </van-col>
          <van-col class="center mt" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/55af1825424f39909cc1b.png" alt />
              <br />帮助与投诉
            </router-link>
          </van-col>
          <van-col class="center mt" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/12e5d042d730d136cc580.png" alt />
              <br />游戏圈
            </router-link>
          </van-col>
          <van-col class="center mt" span="6">
            <router-link class="zuBtn" to="/">
              <img src="http://www.s3tu.com/images/2020/02/18/1daf110abeb2bfb49ce8b.png" alt />
              <br />账号升级
            </router-link>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    jum(){
      if(!window.sessionStorage.getItem('token')){
        this.$router.push("/login")
      }else{
        this.$router.push("/setting")//personal
      }
    },
    onClickLeft(){
      this.$router.push("/setting")
    }
  }
}
</script>
<style scoped>
.portrait {
  width: 60px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.peple {
  width: 100%;
  height: 200px;
  background-image: url("http://www.s3tu.com/images/2020/02/17/3505d951.jpg");
}
.mb {
  position: relative;
  top: 20px;
  left: 20px;
  width: 200px;
}
.yuer {
  margin-top: 60px;
  margin-left: 80px;
  display: flex;
}
.bStyle {
  float: left;
  margin-left: 20px;
}
.linStyle {
  float: right;
  margin-right: 20px;
  font-size: 12px;
  color: gray;
}
.zuBtn {
  color: #000;
  font-size: 12px;
}
.center {
  text-align: center;
}
.mt {
  margin-top: 20px;
}
.btn{
  margin-top:10px;
  height:30px;
}
.w-375{
  width: 375px;
}
</style>