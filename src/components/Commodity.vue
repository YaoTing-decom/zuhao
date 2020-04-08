<template>
  <div>
    <van-nav-bar class="bk" left-arrow fixed @click-left="onClickLeft">
      <van-icon style="z-index:100;" name="more-o" slot="right" />
    </van-nav-bar>
    <van-swipe :autoplay="3000" indicator-color="white" @change="onChange">
      <van-swipe-item>
        <img class="img-style" src="http://www.s3tu.com/images/2020/02/21/timg5b668.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="img-style" src="http://www.s3tu.com/images/2020/02/21/tim59fcd.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="img-style" src="http://www.s3tu.com/images/2020/02/21/tim1ef3e4.jpg" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="img-style" src="http://www.s3tu.com/images/2020/02/21/tig53e3a.jpg" alt />
      </van-swipe-item>
      <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div>
    </van-swipe>
    <div class="bar">
      <div>
        <p>安卓</p>
        <p>{{commodlist.title}}</p>
        <p>¥7.8/时</p>
      </div>
      <div class="transection"></div>
      <div>
        <van-cell title="套餐" is-link @click="showPopup">
          <small>包夜50.5元|日租139.5元</small>
        </van-cell>
        <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }" />
        <van-cell title="服务">
          <small>文明账号密码</small>
        </van-cell>
        <div>
          <van-row class="row" gutter="20">
            <van-col class="fontSize" span="9">
              <img
                src="http://www.s3tu.com/images/2020/02/21/5a44076600edec6f648dc.png"
                alt
                class="small"
              />
              0:00~24:00可租
            </van-col>
            <van-col class="fontSize" span="8">
              <img
                src="http://www.s3tu.com/images/2020/02/21/5a44076600edec6f648dc.png"
                alt
                class="small"
              />
              1小时起租
            </van-col>
            <van-col class="fontSize" span="7">
              <img
                src="http://www.s3tu.com/images/2020/02/21/5a44076600edec6f648dc.png"
                alt
                class="small"
              />
              免押金
            </van-col>
          </van-row>
        </div>
      </div>
      <div>
        <van-cell title="租客评价" is-link>
          <small>查看全部</small>
        </van-cell>
        <div class="comment" v-for="item in commentlist.slice(0,2)" :key="item.id">
          <div style="padding:15px 0;">
            <div class="box">
              <van-image round width="40px" height="40px" :src="item.img" />
              <!-- <img class="portrait" src="http://www.s3tu.com/images/2020/02/14/timg191f45.jpg" alt /> -->
              <div style="margin-left:15px">
                <small>{{item.uname}}</small>
                <div style="margin-top:3px">
                  <van-rate
                    :value="item.score"
                    :size="20"
                    color="#ee0a24"
                    void-icon="star"
                    void-color="#eee"
                    readonly
                  />
                </div>
              </div>
              <div style="margin-left:50px">
                <small class="date">{{item.cdate}}</small>
              </div>
            </div>
            <div style="margin-top:5px">
              <small style="color:gray;">{{item.text}}</small>
            </div>
          </div>
        </div>
        <!-- <div class="comment">
          <div style="padding:15px 0;">
            <div class="box">
              <van-image
                round
                width="40px"
                height="40px"
                src="http://www.s3tu.com/images/2020/02/14/timg191f45.jpg"
              />
               <img class="portrait" src="http://www.s3tu.com/images/2020/02/14/timg191f45.jpg" alt />
              <div style="margin-left:15px">
                <small>zhw_****i7k7zgp</small>
                <div style="margin-top:3px">
                  <van-rate
                    v-model="value"
                    :size="20"
                    color="#ee0a24"
                    void-icon="star"
                    void-color="#eee"
                    readonly
                  />
                </div>
              </div>
              <div style="margin-left:60px">
                <small class="date">2020-03-01 21:20:13</small>
              </div>
            </div>
            <div style="margin-top:5px">
              <small style="color:gray;">很好这个号</small>
            </div>
          </div>
        </div>-->
      </div>
      <div class="transection"></div>
      <div>
        <strong>账号描述</strong>
        <br />
        <small>文明游戏，健康游戏。</small>
        <br />
        <small>爱生活。</small>
      </div>
      <div class="transection"></div>
      <div>
        <strong>更多新手问题</strong>
        <div>
          <div class="box">
            <div class="round"></div>
            <small>我租号，租期是怎么算的？</small>
          </div>
          <small>下单成功后即开始计时，每次租号额外赠送5分钟给租客使用。</small>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-icon
        v-show="likeO"
        icon="like-o"
        text="收藏"
        @click="onClickIcon(commodlist.lid,commodlist.lname,commodlist.price)"
      />
      <van-goods-action-icon
        v-show="like"
        icon="like"
        text="已收藏"
        color="#ff5000"
        @click="unClickIcon"
      />
      <van-goods-action-button type="danger" text="立即租用" @click="onClickBuy"/>
    </van-goods-action>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // value: 4,
      current: 0,
      show: false,
      lid: this.$route.params.lid, //路由参数对象中的id
      commodlist: [],
      commentlist: [],
      like:false,
      likeO:true
    };
  },
  created() {
    this.getCommodity();
    this.onLike();
    this.getComment();
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    onClickIcon(lid, lname, price) {
      console.log(lid + "_" + lname + "_" + price);
      // 1.创建一个变量url请求服务器程序
      var url = "addcart";
      // 2.创建一个变量obj请求服务器程序参数
      var obj = { lid, lname, price };
      // 3.发送ajax请求
      this.axios.get(url, { params: obj }).then(res => {
        // 4.接收服务器返回结果
        if (res.data.code == -2) {
          // 5.-2 提示请登录 跳转登录组件
          this.$toast("请登录");
          this.$router.push("/login");
        } else {
          // 6.1 添加成功
          this.$toast("收藏成功");
          this.onLike();
        }
      });
    },
    unClickIcon() {
      var url = "asd";
      var obj = {lid:this.lid};
      this.axios.get(url, { params: obj }).then(res => {
        // 接收服务器返回数据
        if (res.data.code == 1) {
          // 提示删除成功
          this.$toast("取消收藏");
          this.onLike();
        }else{
          console.log(2);
        }
      });
    },
    onClickBuy(){
      this.$router.push('/order')
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onChange(index) {
      this.current = index;
    },
    showPopup() {
      this.show = true;
    },
    getCommodity() {
      var obj = { lid: this.lid };
      this.axios.get("/commodity/", { params: obj }).then(res => {
        var r = res.data.data;
        for (const list of r) {
          this.commodlist = list;
        }
      });
    },
    onLike() {
      var url = "like";
      var obj = { lid: this.lid };
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          this.like=true;
          this.likeO=false;
        }else{
          this.likeO=true;
          this.like=false;
        }
      });
    },
    getComment() {
      this.axios.get("/comment").then(res => {
        this.commentlist = res.data.data;
        console.log(this.commentlist);

        // var comment = res.data.data;
        // for (const at of comment) {
        //   this.commentlist = at;
        //   console.log(this.commentlist);
        // }
      });
    }
  }
};
</script>
<style scoped>
.bar {
  margin-bottom: 55px;
}
.round {
  width: 5px;
  height: 5px;
  background-color: red;
  border-radius: 50%;
  margin-top: 5px;
  margin-right: 5px;
}
.transection {
  width: 100%;
  height: 10px;
  background-color: #f3f3f3;
}
.smallBox {
  float: left;
  width: 80px;
  height: 50px;
  border-radius: 5px;
  background-color: #ffbcbc;
  font-size: 12px;
  vertical-align: middle;
  margin-left: 10px;
}
.Jbox {
  width: 100%;
  overflow: hidden;
  position: relative;
  top: 1px;
  display: inline-block;
}
.comment {
  width: 340px;
  margin: auto;
}
.box {
  display: flex;
}
/* .portrait {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  vertical-align: middle;
} */
.bk {
  background-color: rgba(255, 255, 255, 0);
}
.img-style {
  width: 100%;
  height: 230px;
}
.custom-indicator {
  padding: 5px 10px;
  position: absolute;
  top: 180px;
  left: 320px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: center;
  border-radius: 10px;
}
.fontSize {
  font-size: 12px;
  text-align: center;
}
.small {
  vertical-align: middle;
}
.row {
  width: 100%;
  margin-left: 0px !important;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: rgb(245, 245, 245);
}
.date {
  font-size: 10px;
  color: grey;
}
</style>