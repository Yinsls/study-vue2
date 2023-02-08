<template>
  <div>
    <h3>测试文件A</h3>
    <button @click="sendMsg">发送消息给B</button>
  </div>
</template>

<script>
import eventBus from "@/utils/eventBus/index";
export default {
  methods: {
    sendMsg() {
      console.log(" A给B发送消息");
      eventBus.$emit("sendB", "A的消息");
    },
  },
};
</script>
