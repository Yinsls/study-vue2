<template>
  <div>
    <h2>测试</h2>
    <button @click="toPage('testA')">测试A</button>
    <button @click="toPage('testB')">测试B</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "test-page",
  methods: {
    toPage(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>
