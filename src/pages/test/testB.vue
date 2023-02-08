<template>
  <div>测试文件B</div>
</template>

<script>
import eventBus from "@/utils/eventBus/index";
export default {
  mounted() {
    console.log("准备好了");
    eventBus.$on("sendB", (msg) => {
      console.log("B接收到消息: ", msg);
    });
  },
};
</script>
