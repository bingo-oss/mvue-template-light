import routers from "src/router/routers";

//当前模板的路由
routers.push(
    {
      meta: {
        module: "example",
        requiresAuth: true
      },
      name: "exampleIndex",
      path: "/",
      component: "home/home.vue",
      children: [
        {
          name: 'notice',
          path: '/notice',
          component: 'notice/index.vue',
          children: [
            {
              name: 'notice-clas',
              path: 'clas',
              component: 'notice/clas.vue',
              children: [
                {
                  name: 'notice-list',
                  path: 'list',
                  component: 'notice/list.vue',
                }
              ]
            },
            {
              name: 'notice-detail',
              path: 'detail/:id',
              component: 'notice/detail.vue',
            },
            {
              name: 'notice=-add',
              path: 'add',
              component: 'notice/add.vue',
            },
            {
              name: 'notice-edit',
              path: 'edit/:id',
              component: 'notice/add.vue',
            }
          ]
        },
        {
          name: 'log',
          path: 'log',
          component: 'log/index.vue',
          children: [
            {
              name: 'log-list',
              path: 'list',
              component: 'log/list.vue',
              children: [
                {
                  name: 'list',
                  path: 'list',
                  component: 'notice/list.vue',
                }
              ]
            },
            {
              name: 'log-report',
              path: 'report',
              component: 'log/report.vue',
              children: [
                {
                  name: 'log-report-table',
                  path: 'report-table',
                  component: 'log/report-table.vue',
                }
              ]
            },
            {
              name: 'log-add',
              path: 'add',
              component: 'log/add.vue',
            },
            {
              name: 'log-module',
              path: 'module',
              component: 'log/module.vue',
            }
          ]
        },
        {
          name: 'approve',
          path: 'approve',
          component: 'approve/index.vue',
          children: [
            {
              name: 'approve-initiate',
              path: 'initiate',
              component: 'approve/initiate.vue'
            },
            {
              name: 'approve-waitting',
              path: 'waitting',
              component: 'approve/report.vue',
              children: [
                {
                  name: 'log-report-table',
                  path: 'report-table',
                  component: 'log/report-table.vue',
                }
              ]
            },
            {
              name: 'approve-done',
              path: 'done',
              component: 'approve/add.vue',
            },
            {
              name: 'approve-started',
              path: 'started',
              component: 'approve/module.vue',
            },
            {
              name: 'approve-copy',
              path: 'copy',
              component: 'approve/module.vue',
            }
          ]
        }
      ]
    },

);

var routersData = mvueCore.router.getModuleRoutes("example", routers,function (component) {
  return require('src/module/example/view/' + component);
});

export default routersData;
