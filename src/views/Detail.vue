<template>
  <div style="margin-bottom:50px;">
    <van-search v-model="value" placeholder="请输入搜索关键词" show-action shape="round">
      <div slot="action">搜索</div>
    </van-search>
    <van-tabs sticky animated>
      <van-tab title="热门">
        <div class="Popular">
          <div class="Mobile">
            <div style="margin-top:10px;">
              <img class="re-img" src="http://www.s3tu.com/images/2020/02/12/shouji46b96.png" alt />
              <b>手游</b>
            </div>
            <div class="boxStyle">
              <div class="boxBox">
                <router-link id="fontColor" to="/list">
                  <img
                    class="boxImg"
                    src="http://www.s3tu.com/images/2020/01/20/btn019679e.jpg"
                    alt
                  />
                  <p>王者荣耀</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/12/he62973.jpg" alt />
                  <p>和平精英</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/huo353d6.jpg" alt />
                  <p>火影忍者</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img
                    class="boxImg"
                    src="http://www.s3tu.com/images/2020/01/20/btn03379b4.jpg"
                    alt
                  />
                  <p>枪战王者</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/fc69909.jpg" alt />
                  <p>QQ飞车</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/qiuq56018.jpg" alt />
                  <p>球球大作战</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/NBAf2d27.jpg" alt />
                  <p>最强NBA</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img
                    class="boxImg"
                    src="http://www.s3tu.com/images/2020/02/13/wurenad685.jpg"
                    alt
                  />
                  <p>第五人格</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/san48191.jpg" alt />
                  <p>三国杀手游</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/jingb674e.jpg" alt />
                  <p>火线精英</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img
                    class="boxImg"
                    src="http://www.s3tu.com/images/2020/02/13/mingr16529.jpg"
                    alt
                  />
                  <p>明日之后</p>
                </router-link>
              </div>
            </div>
          </div>

          <div class="Computer">
            <div>
              <img class="re-img" src="http://www.s3tu.com/images/2020/02/12/diannao4bd3b.png" alt />
              <b>端游</b>
            </div>
            <div class="boxStyle">
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/lolccbd3.jpg" alt />
                  <p>英雄联盟</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/cf43d5b.jpg" alt />
                  <p>穿越火线</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/qius5b395.jpg" alt />
                  <p>绝地求生</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/niz4b9f6.jpg" alt />
                  <p>逆战</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/ss6daf9.jpg" alt />
                  <p>生死狙击</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/xiae1a8f.jpg" alt />
                  <p>侠盗猎车手</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/feidf74f.png" alt />
                  <p>QQ飞车</p>
                </router-link>
              </div>
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/niz4b9f6.jpg" alt />
                  <p>反恐精英</p>
                </router-link>
              </div>
            </div>
          </div>

          <div class="Other">
            <div>
              <img class="re-img" src="http://www.s3tu.com/images/2020/02/12/qita6b7ad.png" alt />
              <b>其它</b>
            </div>
            <div class="boxStyle">
              <div class="boxBox">
                <router-link id="fontColor" to="/">
                  <img class="boxImg" src="http://www.s3tu.com/images/2020/02/13/jsbd1c4.jpg" alt />
                  <p>加速器</p>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="端游">
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="Apex英雄"></mt-cell>
            <mt-cell title="暗黑血统"></mt-cell>
            <mt-cell title="阿特拉斯"></mt-cell>
            <mt-cell title="暗黑破坏神3"></mt-cell>
            <mt-cell title="Artifact"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="八方旅人"></mt-cell>
            <mt-cell title="布莱尔女巫"></mt-cell>
            <mt-cell title="变形金刚OL"></mt-cell>
            <mt-cell title="堡垒之夜"></mt-cell>
            <mt-cell title="部落与弯刀"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="穿越火线"></mt-cell>
            <mt-cell title="赤痕:夜之仪式"></mt-cell>
            <mt-cell title="沉没之城"></mt-cell>
            <mt-cell title="CSGO"></mt-cell>
            <mt-cell title="传奇永恒"></mt-cell>
            <mt-cell title="彩虹岛"></mt-cell>
            <mt-cell title="尘埃4"></mt-cell>
            <mt-cell title="创世战车"></mt-cell>
            <mt-cell title="超载地牢"></mt-cell>
            <mt-cell title="彩虹6号"></mt-cell>
            <mt-cell title="超激斗梦境"></mt-cell>
            <mt-cell title="潮汐之王"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="刀塔自走棋"></mt-cell>
            <mt-cell title="地下城与勇士"></mt-cell>
            <mt-cell title="刀塔霸业"></mt-cell>
            <mt-cell title="德军总部:新血脉"></mt-cell>
            <mt-cell title="DOTA2"></mt-cell>
            <mt-cell title="地城之光"></mt-cell>
            <mt-cell title="第三次世界大战"></mt-cell>
            <mt-cell title="大唐无双"></mt-cell>
            <mt-cell title="帝国时代:终极版"></mt-cell>
            <mt-cell title="DARQ"></mt-cell>
            <mt-cell title="地下矿工"></mt-cell>
            <mt-cell title="刀剑神域:失落之歌"></mt-cell>
            <mt-cell title="地痞街区"></mt-cell>
            <mt-cell title="捣蛋鹅"></mt-cell>
            <mt-cell title="大圣归来"></mt-cell>
            <mt-cell title="动物园之星"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="Fate/EXTELLA LI"></mt-cell>
            <mt-cell title="腐蚀Rust"></mt-cell>
            <mt-cell title="风暴英雄"></mt-cell>
            <mt-cell title="反恐精英OL"></mt-cell>
            <mt-cell title="反恐行动"></mt-cell>
            <mt-cell title="FIFA Online 3"></mt-cell>
            <mt-cell title="反恐精英Online2"></mt-cell>
            <mt-cell title="方舟:生存进化"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="鬼泣5"></mt-cell>
            <mt-cell title="古剑奇谭三"></mt-cell>
            <mt-cell title="诡港实录"></mt-cell>
            <mt-cell title="孤岛惊魂5"></mt-cell>
          </mt-index-section>
          <mt-index-section index="H">
            <mt-cell title="HIZ1"></mt-cell>
            <mt-cell title="荒野行动"></mt-cell>
            <mt-cell title="荒野大镖客"></mt-cell>
          </mt-index-section>
          <mt-index-section index="I">
          </mt-index-section>
          <mt-index-section index="J">
            <mt-cell title="绝地飞车"></mt-cell>
            <mt-cell title="绝地求生"></mt-cell>
          </mt-index-section>
          <mt-index-section index="K">
            <mt-cell title="狂怒2"></mt-cell>
            <mt-cell title="控制"></mt-cell>
          </mt-index-section>
          <mt-index-section index="L">
            <mt-cell title="炉石传说"></mt-cell>
            <mt-cell title="龙之谷"></mt-cell>
            <mt-cell title="黎明杀机"></mt-cell>
          </mt-index-section>
          <mt-index-section index="M">
            <mt-cell title="魔兽世界"></mt-cell>
            <mt-cell title="末日方舟"></mt-cell>
            <mt-cell title="梦幻西游2"></mt-cell>
            <mt-cell title="魔兽争霸III:重制版"></mt-cell>
          </mt-index-section>
          <mt-index-section index="N">
            <mt-cell title="NBA2KOL"></mt-cell>
            <mt-cell title="逆战"></mt-cell>
            <mt-cell title="逆水寒"></mt-cell>
            <mt-cell title="女巫"></mt-cell>
          </mt-index-section>
          <mt-index-section index="O">
          </mt-index-section>
          <mt-index-section index="P">
            <mt-cell title="跑跑卡丁车"></mt-cell>
            <mt-cell title="PS4"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Q">
            <mt-cell title="QQ炫舞"></mt-cell>
            <mt-cell title="QQ飞车"></mt-cell>
            <mt-cell title="全面战争:三国"></mt-cell>
            <mt-cell title="骑马与砍杀"></mt-cell>
            <mt-cell title="拳皇14"></mt-cell>
          </mt-index-section>
          <mt-index-section index="R">
            <mt-cell title="热血传奇"></mt-cell>
            <mt-cell title="人类一败涂地"></mt-cell>
          </mt-index-section>
          <mt-index-section index="S">
            <mt-cell title="使命召唤OL"></mt-cell>
            <mt-cell title="守望先锋"></mt-cell>
            <mt-cell title="杀手2"></mt-cell>
            <mt-cell title="Steam游戏"></mt-cell>
            <mt-cell title="三国志14"></mt-cell>
            <mt-cell title="生化危机"></mt-cell>
          </mt-index-section>
          <mt-index-section index="T">
            <mt-cell title="坦克世界"></mt-cell>
            <mt-cell title="天涯明月刀"></mt-cell>
            <mt-cell title="铁甲雄兵"></mt-cell>
          </mt-index-section>
          <mt-index-section index="U">
            <mt-cell title="Unturned"></mt-cell>
          </mt-index-section>
          <mt-index-section index="V">
          </mt-index-section>
          <mt-index-section index="W">
            <mt-cell title="问道"></mt-cell>
            <mt-cell title="武侠乂"></mt-cell>
            <mt-cell title="文明6"></mt-cell>
            <mt-cell title="我的世界"></mt-cell>
            <mt-cell title="无限法则"></mt-cell>
          </mt-index-section>
          <mt-index-section index="X">
            <mt-cell title="西部狂徒"></mt-cell>
            <mt-cell title="侠盗猎车手Online"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Y">
            <mt-cell title="YY语音"></mt-cell>
            <mt-cell title="英雄联盟"></mt-cell>
            <mt-cell title="英雄联盟(韩服)"></mt-cell>
            <mt-cell title="云顶之弈"></mt-cell>
            <mt-cell title="英魂之刃"></mt-cell>
            <mt-cell title="幽灵行动"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="诛仙3"></mt-cell>
            <mt-cell title="征途"></mt-cell>
            <mt-cell title="战地之王"></mt-cell>
            <mt-cell title="战舰世界"></mt-cell>
            <mt-cell title="真三国无双7"></mt-cell>
            <mt-cell title="战地风云5"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </van-tab>
      <van-tab title="手游">
        <mt-index-list>
          <mt-index-section index="A">
            <mt-cell title="奥拉星"></mt-cell>
          </mt-index-section>
          <mt-index-section index="B">
            <mt-cell title="部落冲突"></mt-cell>
            <mt-cell title="崩坏3"></mt-cell>
          </mt-index-section>
          <mt-index-section index="C">
            <mt-cell title="穿越火线:枪战王者"></mt-cell>
            <mt-cell title="丛林法则:绝地大逃杀"></mt-cell>
          </mt-index-section>
          <mt-index-section index="D">
            <mt-cell title="第五人格"></mt-cell>
            <mt-cell title="地下城与勇士(手游)"></mt-cell>
            <mt-cell title="第二银河"></mt-cell>
          </mt-index-section>
          <mt-index-section index="E">
          </mt-index-section>
          <mt-index-section index="F">
            <mt-cell title="风云岛行动"></mt-cell>
            <mt-cell title="FIFA足球世界"></mt-cell>
            <mt-cell title="辐射避难所"></mt-cell>
            <mt-cell title="非人学园"></mt-cell>
            <mt-cell title="方舟:生存进化"></mt-cell>
          </mt-index-section>
          <mt-index-section index="G">
            <mt-cell title="孤岛先锋"></mt-cell>
            <mt-cell title="光荣使命:使命行动"></mt-cell>
            <mt-cell title="灌篮高手"></mt-cell>
          </mt-index-section>
          <mt-index-section index="H">
            <mt-cell title="火影忍者"></mt-cell>
            <mt-cell title="海岛奇兵"></mt-cell>
            <mt-cell title="狐妖小红娘"></mt-cell>
            <mt-cell title="荒野行动"></mt-cell>
            <mt-cell title="和平精英"></mt-cell>
            <mt-cell title="皇室战争"></mt-cell>
          </mt-index-section>
          <mt-index-section index="I">
          </mt-index-section>
          <mt-index-section index="J">
            <mt-cell title="决斗之城"></mt-cell>
            <mt-cell title="决战！平安京"></mt-cell>
          </mt-index-section>
          <mt-index-section index="K">
          </mt-index-section>
          <mt-index-section index="L">
            <mt-cell title="狼人杀"></mt-cell>
            <mt-cell title="龙珠激斗"></mt-cell>
            <mt-cell title="龙之谷"></mt-cell>
            <mt-cell title="量子特工"></mt-cell>
          </mt-index-section>
          <mt-index-section index="M">
            <mt-cell title="猫和老鼠"></mt-cell>
            <mt-cell title="梦三国"></mt-cell>
            <mt-cell title="梦幻西游"></mt-cell>
            <mt-cell title="明日之后"></mt-cell>
          </mt-index-section>
          <mt-index-section index="N">
          </mt-index-section>
          <mt-index-section index="O">
          </mt-index-section>
          <mt-index-section index="P">
            <mt-cell title="跑跑卡丁车(手游)"></mt-cell>
            <mt-cell title="苹果ID"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Q">
            <mt-cell title="拳皇命运"></mt-cell>
            <mt-cell title="QQ飞车(手游)"></mt-cell>
            <mt-cell title="全军出击"></mt-cell>
            <mt-cell title="全名枪战"></mt-cell>
            <mt-cell title="球球大作战"></mt-cell>
          </mt-index-section>
          <mt-index-section index="R">
            <mt-cell title="忍者必须死3"></mt-cell>
          </mt-index-section>
          <mt-index-section index="S">
            <mt-cell title="生死狙击"></mt-cell>
            <mt-cell title="率土之滨"></mt-cell>
            <mt-cell title="使命召唤"></mt-cell>
            <mt-cell title="时空召唤"></mt-cell>
            <mt-cell title="三国杀手游"></mt-cell>
          </mt-index-section>
          <mt-index-section index="T">
            <mt-cell title="坦克世界闪击战"></mt-cell>
            <mt-cell title="天天酷跑"></mt-cell>
            <mt-cell title="天天飞车"></mt-cell>
            <mt-cell title="天天炫舞"></mt-cell>
            <mt-cell title="天涯明月刀手游"></mt-cell>
          </mt-index-section>
          <mt-index-section index="U">
          </mt-index-section>
          <mt-index-section index="V">
            <mt-cell title="VGAME：消零世界"></mt-cell>
          </mt-index-section>
          <mt-index-section index="W">
            <mt-cell title="我的世界"></mt-cell>
            <mt-cell title="武侠乂(手游)"></mt-cell>
            <mt-cell title="王者荣耀"></mt-cell>
          </mt-index-section>
          <mt-index-section index="X">
            <mt-cell title="新笑傲江湖"></mt-cell>
            <mt-cell title="雪鹰领主"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Y">
            <mt-cell title="英魂之刃口袋版"></mt-cell>
            <mt-cell title="一起来飞车"></mt-cell>
            <mt-cell title="阴阳师"></mt-cell>
            <mt-cell title="妖精的尾巴"></mt-cell>
            <mt-cell title="英雄联盟手游"></mt-cell>
            <mt-cell title="云顶之弈(手游)"></mt-cell>
          </mt-index-section>
          <mt-index-section index="Z">
            <mt-cell title="诛仙(手游)"></mt-cell>
            <mt-cell title="最强NBA"></mt-cell>
            <mt-cell title="掌上英雄联盟"></mt-cell>
            <mt-cell title="战舰世界"></mt-cell>
            <mt-cell title="造梦西游OL"></mt-cell>
          </mt-index-section>
        </mt-index-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>
<style scoped>
#fontColor {
  color: #000;
}
.Popular {
  margin-left: 15px;
}
.re-img {
  width: 22px;
  vertical-align: middle;
}
.boxStyle {
  display: flex;
  flex-wrap: wrap;
  font-size: 13px;
}
.boxImg {
  width: 100%;
  border-radius: 10px;
}
.boxBox {
  width: 65px;
  height: 100px;
  margin: 10px 9px;
  text-align: center;
}
</style>