<template>
  <div style="margin-bottom:50px;">
    <van-nav-bar title="穿越火线" left-text="返回" left-arrow @click-left="onClickLeft">
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item title="筛选" ref="item">
        <van-switch-cell v-model="switch1" title="包邮" />
        <van-switch-cell v-model="switch2" title="团购" />
        <van-button block type="info" @click="onConfirm">确认</van-button>
      </van-dropdown-item>
    </van-dropdown-menu>
    <van-card tag="租4送2" price="2.00¥/小时" desc="雷霆套い传说套雷毁音效卡い炫金荣耀金星空AGい黄金海岸新灵狐" title="安卓" :thumb="imageURL" />
    <van-card tag="租5送3" price="4.00¥/小时" desc="80V|雷神CFS19|传奇白鲨|企鹅皮肤|六烈六盘|双全装" title="IOS" :thumb="imageURL" />
    <van-card tag="租2送1" price="2.13¥/小时" desc="146V20王者之光幻势魄武魂锋心影|荣耀雷神毁灭屠6烈蝴蝶" title="IOS" :thumb="imageURL" />
    <van-card tag="租4送2" price="2.00¥/小时" desc="雷霆套い传说套雷毁音效卡い炫金荣耀金星空AGい黄金海岸新灵狐" title="安卓" :thumb="imageURL" />
    <van-card tag="租5送3" price="4.00¥/小时" desc="80V|雷神CFS19|传奇白鲨|企鹅皮肤|六烈六盘|双全装" title="IOS" :thumb="imageURL" />
    <van-card tag="租2送1" price="2.13¥/小时" desc="146V20王者之光幻势魄武魂锋心影|荣耀雷神毁灭屠6烈蝴蝶" title="IOS" :thumb="imageURL" />
    <van-card tag="租4送2" price="2.00¥/小时" desc="雷霆套い传说套雷毁音效卡い炫金荣耀金星空AGい黄金海岸新灵狐" title="安卓" :thumb="imageURL" />
    <van-card tag="租5送3" price="4.00¥/小时" desc="80V|雷神CFS19|传奇白鲨|企鹅皮肤|六烈六盘|双全装" title="IOS" :thumb="imageURL" />
    <van-card tag="租2送1" price="2.13¥/小时" desc="146V20王者之光幻势魄武魂锋心影|荣耀雷神毁灭屠6烈蝴蝶" title="IOS" :thumb="imageURL" />
    <van-card tag="租4送2" price="2.00¥/小时" desc="雷霆套い传说套雷毁音效卡い炫金荣耀金星空AGい黄金海岸新灵狐" title="安卓" :thumb="imageURL" />
    <van-card tag="租5送3" price="4.00¥/小时" desc="80V|雷神CFS19|传奇白鲨|企鹅皮肤|六烈六盘|双全装" title="IOS" :thumb="imageURL" />
    <van-card tag="租2送1" price="2.13¥/小时" desc="146V20王者之光幻势魄武魂锋心影|荣耀雷神毁灭屠6烈蝴蝶" title="IOS" :thumb="imageURL" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL:["http://www.s3tu.com/images/2020/02/15/cyb6d75.jpg"],
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ],
      switch1: false,
      switch2: false
    };
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1);
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>