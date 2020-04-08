<template>
  <div style="background-color: #F3F3F3;">
    <van-nav-bar title="设置" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <mt-cell title="个人资料" to="/" is-link></mt-cell>
    <van-collapse class="mt-20" v-model="activeNames">
      <van-collapse-item title="安全设置" name="1">
        <mt-cell title="手机绑定" to="/" is-link></mt-cell>
        <mt-cell title="登录密码" to="/" is-link></mt-cell>
        <mt-cell title="密码隐藏" to="/" is-link></mt-cell>
        <mt-cell title="实名认证" to="/" is-link>去认证</mt-cell>
      </van-collapse-item>
      <van-collapse-item title="支付设置" name="2">
        <mt-cell title="支付密码" to="/" is-link></mt-cell>
        <mt-cell title="免密支付">
          <mt-switch></mt-switch>
        </mt-cell>
        <mt-cell title="支付绑定(支付宝)" to="/" is-link></mt-cell>
      </van-collapse-item>
    </van-collapse>
    <mt-cell class="mt-20" title="通知设置" to="/" is-link></mt-cell>
    <mt-cell title="消息提醒" to="/" is-link></mt-cell>
    <mt-cell class="mt-20" title="隐私设置" to="/" is-link></mt-cell>
    <mt-cell title="检查更新" to="/" is-link></mt-cell>
    <mt-button class="Btn" type="danger" size="large" @click="loginOut">退出登录</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      show: false,
      actions: [
        { name: "选项" },
        { name: "选项" },
        { name: "选项", subname: "描述信息" }
      ]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    loginOut() {
      window.sessionStorage.clear()
      this.$router.push('/')
    }
  }
};
</script>
<style scoped>
.mt-20 {
  margin-top: 20px;
}
.Btn {
  position: fixed;
  margin-top: 40px;
}
</style>