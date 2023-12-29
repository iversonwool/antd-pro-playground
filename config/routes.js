export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './User/login',
          },
        ],
      },
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/welcome',
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'smile',
                component: './Welcome',
              },
              {
                path: '/admin',
                name: 'admin',
                icon: 'crown',
                component: './Admin',
                authority: ['admin'],
                routes: [
                  {
                    path: '/admin/sub-page',
                    name: 'sub-page',
                    icon: 'smile',
                    component: './Welcome',
                    authority: ['admin'],
                  },
                ],
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list',
                component: './TableList',
              },
              {
                name: 'list.table-list',
                icon: 'table',
                path: '/list111',
                component: './list',
              },
              {
                name: 'playground',
                icon: 'appstore',
                path: 'playground',
                component: './leehow/Playground'
              },

              {
                name: 'playground',
                icon: 'appstore',
                path: 'playground2',
                component: './leehow/ReactContext'
              },


              {
                name: '动画游乐场',
                icon: 'appstore',
                path: 'playground4',
                component: './animation'
              },
              {
                name: 'playground111',
                icon: 'appstore',
                path: 'playground3',
                component: './leehow/tsPlayground'
              },
              {
                name: 'css test',
                icon: 'github',
                path: '/css-test',
                component: './leehow/css_test'
              },
              {
                name: 'moment playground',
                icon: 'github',
                path: '/moment',
                component: './leehow/momentPG'
              },
              {path: '/marquee',component:'./leehow/marquee/marquee'},
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
