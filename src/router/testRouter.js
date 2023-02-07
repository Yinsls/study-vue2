export const testRoutes = [
  {
    path: "/test",
    name: "test",
    component: () => import("@/pages/test/index.vue"),
    redirect: "/test/testA", // 默认跳转testA
    children: [
      {
        path: "testA",
        component: () => import("@/pages/test/testA.vue"),
      },
      {
        path: "testB",
        component: () => import("@/pages/test/testB.vue"),
      },
    ],
  },
];
