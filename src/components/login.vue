<template>
  <div>
    <div class="note">
      <div class="center">
        <img class="logoStyle" src="https://dss2.bdstatic.com/8_V1bjqh_Q23odCf/pacific/1927906533.png" alt="加载失败">
        <div v-show="dege">
          <input class="input-box input-bottom" type="text" placeholder="请输入用户名" v-model="uname" />
          <br />
          <input class="input-box input-bottom" type="password" placeholder="请输入密码" v-model="upwd" />
          <mt-button type="primary" size="large" @click="login">登录</mt-button>
          <br />
          <a class="aTxt" @click="degea">没有账号?去注册</a>
        </div>
        <div v-show="deger">
          <input
            class="input-box"
            type="text"
            placeholder="请输入用户名"
            v-model="uname"
            @focus="aasd(1)"
            @blur="aasd(-1)"
          />
          <br />
          <span v-show="spanErr" class="spanTxt">{{spanTxt}}</span>
          <br />
          <input
            class="input-box"
            type="password"
            placeholder="请输入密码"
            v-model="upwd"
            @focus="pwd(1)"
            @blur="pwd(-1)"
          />
          <br />
          <span v-show="spanErr1" class="spanTxt">{{spanTxt1}}</span>
          <br />
          <mt-button type="primary" size="large" @click="loginer">注册</mt-button>
          <br />
          <a class="aTxt" @click="degera">已有账号?去登录</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      dege: true,
      deger: false,
      spanTxt: "8~16位数字、字母",
      spanErr: false,
      spanTxt1: "8~16位数字、字母",
      spanErr1: false,
    };
  },
  methods: {
    handleCode () {
      this.generatedCode()
    },
    aasd(p) {
      if (p > 0) {
        // 获取焦点显示span文本
        this.spanErr = true;
      } else {
        // 失去焦点隐藏span文本
        this.spanErr = false;
        // 失去焦点时发送请求判断用户名是否存在
        // 创建正则表达式
        var reg = /^[a-z0-9A-Z]{8,16}$/;
        var uname = this.uname;
        // 用正则判断用户名格式是正确
        if (!reg.test(uname)) {
          // 不正确，修改span文本，并且设置为显示状态
          this.spanTxt = "用户名格式不正确";
          this.spanErr = true;
          return;
        }
        // 创建url变量
        var url = "va";
        // 创建obj变量
        var obj = { uname: uname };
        // 发送请求
        this.axios.get(url, { params: obj }).then(res => {
          // 判断返回的用户名是否存在
          if (res.data.code == 403) {
            // 不正确，修改span文本，并且设置为显示状态
            this.spanTxt = "用户名已存在";
            this.spanErr = true;
            return;
          }
        });
      }
    },
    pwd(a) {
      if (a > 0) {
        // 获取焦点显示span文本
        this.spanErr1 = true;
      } else {
        // 失去焦点隐藏span文本
        this.spanErr1 = false;
        // 创建正则表达式
        var reg = /^[a-z0-9A-Z]{8,16}$/;
        // 用正则判断密码名格式是正确
        var upwd = this.upwd;
        if (!reg.test(upwd)) {
          // 不正确，修改span文本，并且设置为显示状态
          this.spanTxt1 = "密码格式不正确";
          this.spanErr1 = true;
          return;
        }
      }
    },
    loginer() {
      if(this.spanTxt = "用户名已存在"){
        this.$toast("用户名已存在");
        return;
      }
      //注册
      // 获取用户名和密码
      var uname = this.uname;
      var upwd = this.upwd;
      // 判断用户名和密码不能为空
      if (!uname) {
        this.spanTxt = "用户名不能为空";
        this.spanErr = true;
        return;
      }
      if (!upwd) {
        this.spanTxt1 = "密码不能为空";
        this.spanErr1 = true;
        return;
      }
      // 创建url变量
      var url = "register";
      // 创建obj变量
      var obj = { uname: uname, upwd: upwd };
      // 发送请求注册
      this.axios.get(url, { params: obj }).then(res => {
        if (res.data.code == 1) {
          // 注册成功，出现提示框
          this.$toast("注册成功");
          // 注册成功跳转至登录
          this.dege = true;
          this.deger = false;
        }
      });
    },
    login() {
      // 创建正则表达式
      var reg = /^[a-z0-9A-Z]{8,16}$/;
      // 获取用户名和密码
      var uname = this.uname;
      var upwd = this.upwd;
      // 判断用户名和密码
      if (!reg.test(uname)) {
        this.$messagebox("用户名格式不正确");
        return;
      }
      if (!reg.test(upwd)) {
        this.$messagebox("密码格式不正确");
        return;
      };
      // 创建url变量
      var url = "lg";
      // 创建obj变量
      var obj = { uname: uname, upwd: upwd };
      // 发送请求
      this.axios.get(url, { params: obj }).then(res => {
        // 如果用户名密码错误
        if (res.data.code == -1) {
          // 显示提示
          this.$messagebox("消息", "用户名或密码错误");
        } else {
          console.log(res);
          // 用户名密码正确，提示
          this.$toast("登录成功");
          // 保存到token中
          console.log(res.data.session.cookie);
          
          window.sessionStorage.setItem("token",res.data.session.cookie);
          this.$router.go(-1);
        }
      });
    },
    degea() {
      this.dege = false;
      this.deger = true;
    },
    degera() {
      this.dege = true;
      this.deger = false;
    }
  }
};
</script>
<style scoped>
.note {
  width: 375px;
  height: 667px;
  background-repeat: "no-repeat";
}
.logoStyle{
  position: absolute;
  top:-160px;
}
.input-box {
  width: 88%;
  height: 30px;
  border:0px;
  outline:none;
  border-bottom: 1px solid gray;
  padding-left: 20px;
  outline-style: none;
  margin-bottom: 10px;
  margin-left: 4px;
  font-size: 12px;
}
.input-bottom{
  margin-bottom: 30px;
}
.center {
  width: 280px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 43%;
  margin-left: -110px;
  margin-top: -100px;
}
.logo {
  width: 180px;
  margin: auto;
  position: relative;
  top: 130px;
}
.aTxt {
  font-size: 14px;
  text-decoration: none;
  margin-left: 80px;
}
.spanTxt {
  font-size: 12px;
  display: block;
  margin-left: 20px;
  margin-top: -5px;
}
</style>