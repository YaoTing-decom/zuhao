<template>
  <div>
    <router-view />
    <TabBar></TabBar>
  </div>
</template>
<script>
import TabBar from "../components/common/Tabbar";
export default {
  components: {
    TabBar
  }
}
</script>