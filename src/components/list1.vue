<template>
  <div style="margin-bottom:50px;">
    <van-nav-bar title="火影忍者" left-text="返回" left-arrow @click-left="onClickLeft">
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
    <van-card
      tag="租4送2"
      price="2.00¥/小时"
      desc="【14S忍者☆27A忍】秽土长门|猿飞幻月斑柱间|佩恩须佐鼬"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租5送3"
      price="4.00¥/小时"
      desc="【租号玩搜桐香】新S【秽土长门】进店领限量红包，先到先得！！"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card tag="租2送1" price="2.13¥/小时" desc="【恋琪】1S秽土4代1忍战我爱罗" title="IOS" :thumb="imageURL" />
    <van-card
      tag="租6送5"
      price="1.80¥/小时"
      desc="【12S忍者☆28A忍】秽土长门|猿飞日斩|纲手|佩恩须佐鼬"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租6送5"
      price="3.45¥/小时"
      desc="火影14S/20A秽土自来也/大蛇丸/纲手/面具男/猿飞日斩"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租6送5"
      price="1.80¥/小时"
      desc="【租号玩搜桐香】新S【秽土长门】进店领限量红包，先到先得！！"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租4送2"
      price="2.00¥/小时"
      desc="【14S忍者☆27A忍】秽土长门|猿飞幻月斑柱间|佩恩须佐鼬"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租5送3"
      price="4.00¥/小时"
      desc="【租号玩搜桐香】新S【秽土长门】进店领限量红包，先到先得！！"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card tag="租2送1" price="2.13¥/小时" desc="【恋琪】1S秽土4代1忍战我爱罗" title="IOS" :thumb="imageURL" />
    <van-card
      tag="租6送5"
      price="1.80¥/小时"
      desc="【12S忍者☆28A忍】秽土长门|猿飞日斩|纲手|佩恩须佐鼬"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租6送5"
      price="3.45¥/小时"
      desc="火影14S/20A秽土自来也/大蛇丸/纲手/面具男/猿飞日斩"
      title="安卓"
      :thumb="imageURL"
    />
    <van-card
      tag="租6送5"
      price="1.80¥/小时"
      desc="【租号玩搜桐香】新S【秽土长门】进店领限量红包，先到先得！！"
      title="安卓"
      :thumb="imageURL"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      imageURL: ["http://www.s3tu.com/images/2020/02/15/020dca6c.jpg"],
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
    onClickLeft() {
      this.$router.go(-1);
    },
    onConfirm() {
      this.$refs.item.toggle();
    }
  }
};
</script>