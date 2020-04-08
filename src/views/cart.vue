<template>
  <div>
    <van-nav-bar style="background-color:#F9F9F9;" right-text="编辑" title="收藏"></van-nav-bar>
    <!-- 购物车组件 -->
    <!-- 1.顶部全选复选框 -->
    <div class="selectall">
      <label>
        全选
        <input class="chec" type="checkbox" v-model="allcb" @change="selectAll" />
      </label>
    </div>
    <!-- 2.购物车列表 -->
    <div class="cartitem" v-for="(item,i) of list" :key="i">
      <div class="leftimgtxt">
        <input type="checkbox" v-model="item.cb" @change="changeitem" />
        <div>{{item.lname}}</div>
        <div>{{item.price}}</div>
      </div>
      <mt-button @click="del(item.id)">删</mt-button>
    </div>
    <!-- 3.一组按钮 -->
    <!-- 删除选中商品 清空购物车 -->
    <!-- 商品数量 -->
    <div class="guding">
      <span class="num">商品数量：{{list.length}}</span>
      <van-button round plain hairline type="danger" @click="delm">删除商品</van-button>
      <van-button style="margin-left:10px;" round type="danger">立即租用</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [], //购物车列表
      allcb: false
    };
  },
  created() {
    // 组件创建成功后调用加载购物车函数
    this.loadMore();
  },
  methods: {
    loadMore() {
      // 加载购物车列表函数
      // 1.创建一个变量url请求服务器地址
      var url = "findcart";
      // 2.发送ajax请求并且获取服务器返回结果
      this.axios.get(url).then(res => {
        if (res.data.code == 1) {
          // 4.code==1 获取数据保存到list
          // 4.1获取服务器返回数据
          var rows = res.data.data;
          // 4.2创建循环变量数组中值 并且添加属性cb商品选中状态
          for (var item of rows) {
            item.cb = false;
          }
          // 4.3将新数组赋值list
          this.list = rows;
          // 4.4在模板中添加cb属性
        }
      });
    },
    del(id) {
      // 功能：发送请求完成删除商品任务
      // 1.获取购物车商品id
      // 2.显示交互对话框
      this.$messagebox
        .confirm("是否删除指定商品")
        .then(res => {
          // 3.如果用户选择 确认
          // 4.创建变量url
          var url = "del";
          // 5.创建变量obj
          var obj = { id };
          // 6.发送请求
          this.axios.get(url, { params: obj }).then(res => {
            // 7.接收服务器返回数据
            if (res.data.code == 1) {
              // 8.提示删除成功
              this.$toast("删除成功");
              // 9.重新加载购物车商品列表
              this.loadMore();
            }
          });
        })
        .catch(err => {});
    },
    selectAll() {
      // 功能：
      // 1.获取全选状态
      var allcb = this.allcb;
      // 2.创建循环遍历商品列表将全选的状态赋值商品列表项状态
      for (var item of this.list) {
        item.cb = allcb;
      }
    },
    changeitem() {
      // 功能：商品前复选框修改函数
      // 1.获取商品列表数组长度
      var size = this.list.length;
      // 2.计算选中状态商品几个
      var sum = 0;
      for (var item of this.list) {
        if (item.cb) sum++;
      }
      // 3.如果商品选中数量与数组长度
      if (size == sum) {
        //相同 全选 选中
        this.allcb = true;
      } else {
        //不相同 全选 清空
        this.allcb = false;
      }
    },
    delm() {
      // 功能：删除选中商品
      // 1.当前商品列表中长度 0
      var size = this.list;
      if (size.length == 0) {
        // 2.提示：没有可以删除商品
        this.$messagebox("消息", "没有可删除商品");
        return;
      }
      // 3.拼接商品id字符串
      // 4.创建变量str
      var str = "";
      // 5.创建一个循环遍历商品，如果当前状态为true，将id拼接str
      for (var item of this.list) {
        if (item.cb) {
          str += item.id + ",";
        }
        console.log(str);
      }
      // 6.提示：请选择要删除的商品
      if (str.length == 0) {
        this.$messagebox("消息", "请选择需要删除商品");
      }
      // 7.截取字符串 ,
      str = str.substring(0, str.length - 1);
      // 8.显示确认交互框
      this.$messagebox
        .confirm("是否删除选中商品")
        .then(res => {
          // 9.创建变量url保存服务器程序地址
          var url = "delm";
          // 10.创建变量obj多个id
          var obj = { id: str };
          // 11.发送ajax请求并且获取返回结果
          this.axios(url, { params: obj }).then(res => {
            // 12.重新加载商品列表
            this.loadMore();
            // 13.显示提示信息
            this.$toast("删除成功");
          });
        })
        .catch(err => {});
    }
  }
};
</script>
<style scoped>
/* 1.商品项目元素 */
.cartitem {
  display: flex; /*弹性布局 */
  justify-content: space-between; /*两端对齐 */
  align-items: center; /*垂直居中 */
  border-bottom: 1px solid #cccccc; /*底部灰色边线 */
  margin-top: 25px; /*商品之间的间距 */
}
/* 2.左侧文字[商品名称与价格] */
.leftimgtxt {
  display: flex;
  align-items: center; /*垂直居中 */
}
.guding {
  height: 100px;
  width: 100%;
  position: fixed;
  bottom: 0;
}
.num {
  border: 1px solid red;
  display: inline-block;
  border-radius: 5px;
  padding: 10px;
  margin-left: 30px;
  margin-right: 40px;
}
input[type="checkbox"] {
  width: 15px;
  height: 15px;
  vertical-align: middle;
}
.selectall label {
  margin-left: 20px;
}
.selectall {
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #c2c2c2;
  margin-top: 10px;
}
</style>