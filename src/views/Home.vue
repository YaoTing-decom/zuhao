<template>
  <div class="home">
    <!-- 搜索框 -->
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round" @search="onSearch">
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 轮播图 -->
      <van-swipe id="swiper" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" class="images-size" />
        </van-swipe-item>
      </van-swipe>
      <!-- 游戏选项栏 -->
      <div id="btn">
        <!-- 按钮上 -->
        <div class="btn-top">
          <van-button class="btn01" type="primary" to="/list"></van-button>
          <van-button class="btn02" type="primary" to="/list1"></van-button>
          <van-button class="btn03" type="primary" to="/list2"></van-button>
          <van-button class="btn04" type="primary" to="/list3"></van-button>
          <van-button class="btn05" type="primary" to="/list4"></van-button>
          <ul class="text-ul">
            <li>王者荣耀</li>
            <li>火影忍者</li>
            <li>枪战王者</li>
            <li>穿越火线</li>
            <li>绝地求生</li>
          </ul>
        </div>
        <div class="btn-bottom">
          <van-button class="btn06" type="primary" to="/list5"></van-button>
          <van-button class="btn07" type="primary" to="/list6"></van-button>
          <van-button class="btn08" type="primary" to="/list7"></van-button>
          <van-button class="btn09" type="primary" ></van-button>
          <van-button class="btn10" type="primary" to="/detail"></van-button>
          <ul class="text-ul">
            <li>英雄联盟</li>
            <li>球球大作战</li>
            <li>飞车手游</li>
            <li>最强NBA</li>
            <li>全部游戏</li>
          </ul>
        </div>
      </div>
      <!-- 主页列表 -->
      <div id="detai">
        <van-tabs id="tabs" sticky animated>
          <van-tab title="王者荣耀">
            <!-- 1.弹性布局 -->
            <van-list
              class="product_app"
              :immediate-check="check"
              v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="loadMore"
            >
              <van-cell class="goods-item" v-for="item in list" :key="item.lid" >
                <div class="route">
                  <router-link :to="'/commodity/'+item.lid" tag="div">
                    <img :src="'http://127.0.0.1:4000/'+item.img_url" alt />
                    <!-- 4.商品名称 -->
                    <h4 class="tetxStyle">{{item.lname}}</h4>
                    <!-- 5.商品价格 -->
                    <h5 class="price tetxStyle">{{item.price}}</h5>
                    <h5>{{list.title}}</h5>
                  </router-link>
                </div>
              </van-cell>
            </van-list>
          </van-tab>
          <van-tab title="枪战王者">
            <van-list
              class="product_app"
              :immediate-check="check"
              v-model="loading"
              offset
              :finished="finished"
              finished-text="没有更多了"
              @load="loadMore"
            ></van-list>
          </van-tab>
          <van-tab title="火影忍者">
            <van-list
              class="product_app"
              :immediate-check="check"
              v-model="loading"
              offset
              :finished="finished"
              finished-text="没有更多了"
              @load="loadMore"
            ></van-list>
          </van-tab>
          <van-tab title="和平精英">
            <van-list
              class="product_app"
              :immediate-check="check"
              v-model="loading"
              offset
              :finished="finished"
              finished-text="没有更多了"
              @load="loadMore"
            ></van-list>
          </van-tab>
        </van-tabs>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "home",
  data() {
    return {
      isLoading: false,
      check: true,
      loading: true,
      finished: false,
      list: [], //保存服务器返回数据
      pno: 0,
      value: "",
      images: [
        "http://www.s3tu.com/images/2020/01/18/019b975.jpg",
        "http://www.s3tu.com/images/2020/01/18/022a6cb.png",
        "http://www.s3tu.com/images/2020/01/18/03ef37b.jpg",
        "http://www.s3tu.com/images/2020/01/18/048761f.jpg"
      ]
    };
  },
  created() {
    this.loadMore();
  },
  components: {},
  methods: {
    // jumpPage(id) {
    //   this.$router.push({
    //     path: "commodity",
    //     query: {
    //       id: id
    //     }
    //   });
    // },
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onSearch() {},
    loadMore() {
      setTimeout(() => {
        // 加载商品列表
        // console.log(123)
        // 1.创建变量url请求服务器程序
        var url = "product";
        // 2.创建变量obj请求服务器参数
        this.pno++;
        var obj = { pno: this.pno };
        // 3.发送请求
        this.axios.get(url, { params: obj }).then(res => {
          // 4.获取服务器返回结果
          // 5.在data添加属性list
          // 6.将返回数据保存list
          // 问题：保存多页数据
          // 解决：concat数组拼接
          // 6.1 拼接多页数据
          this.list = this.list.concat(res.data.data);
          // 6.2 赋值
          // this.list=rows;
        });
        this.loading = false;
        if (this.list.length >= 43) {
          this.finished = true;
        }
      }, 2000);
    }
  }
};
</script>
<style scoped>
/* 轮播图图片大小 */
.images-size {
  width: 21.875rem;
  height: 11.5625rem;
}
/* 轮播图样式 */
#swiper {
  border-radius: 0.625rem;
  width: 21.875rem;
  height: 11.5625rem;
  margin: auto;
}
/* 按钮图片 */
.btn01 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn019679e.jpg");
}
.btn02 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn028e17b.jpg");
}
.btn03 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn03379b4.jpg");
}
.btn04 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn04bb441.jpg");
}
.btn05 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn05a3683.jpg");
}
.btn06 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn0648040.jpg");
}
.btn07 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn073ce91.jpg");
}
.btn08 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn08fd014.jpg");
}
.btn09 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn09e2f0d.jpg");
}
.btn10 {
  background-image: url("http://www.s3tu.com/images/2020/01/20/btn1044208.jpg");
}
/* 按钮样式 */
.van-button--primary {
  width: 3.125rem;
  height: 3.125rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #07c16000;
  border-radius: 50%;
}
.van-button--primary + .van-button--primary {
  margin-left: 0.8125rem;
}
/* 按钮块 */
#btn {
  margin: auto;
  width: 19.0625rem;
  position: relative;
  top: 0.9375rem;
  margin-bottom: 0.9375rem;
}
/* 按钮上 */
.btn-top {
  margin-bottom: 1.25rem;
}
/* 按钮下文字 */
.text-ul {
  width: 110%;
  list-style: none;
  font-size: 0.75rem;
  overflow: hidden;
}
.text-ul li {
  display: inline;
  float: left;
  width: 3.9375rem;
}
/* 列表样式 */
#detai {
  width: 90%;
  margin: auto;
}
/* 外层父元素：弹性布局 */
.product_app {
  display: flex;
  flex-wrap: wrap; /*子元素换行*/
  /* 子元素两端对齐 */
  justify-content: space-between;
  padding: 0.25rem;
}
/* 一个商品 */
.goods-item {
  width: 46%; /*占用屏幕一半*/
  border: 1px solid #ccc;
  border-radius: 0.3125rem;
  margin: 0.125rem 0;
  padding: 0.125rem;
  display: flex; /*子元素弹性 */
  flex-direction: column; /*列 */
  min-height: 16.0625rem;
}
/* 商品里图片 */
.goods-item img {
  width: 100%;
}
.route {
  cursor: pointer;
}
.tetxStyle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>