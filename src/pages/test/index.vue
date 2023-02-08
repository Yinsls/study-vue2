<template>
  <div>
    <h2>测试</h2>
    <button @click="toPage('testA')">测试A</button>
    <button @click="toPage('testB')">测试B</button>
    <test-a />
    <test-b />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import TestA from "@/pages/test/testA.vue";
import TestB from "@/pages/test/testB.vue";

export default {
  name: "test-page",
  components: {
    TestA,
    TestB,
  },
  methods: {
    toPage(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>
