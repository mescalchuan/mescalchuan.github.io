module.exports = {
    base: '/interview/',
    title: 'Mescal Chuan',
    description: '',
    port: 8081,
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: 'Github', link: 'https://github.com/mescalchuan/css-block' },
      ],
      sidebar: [
        {
            title: '框架',
            collapsable: false,
            children: [
                '/framework/vue',
                '/framework/vue3',
                '/framework/react',
                '/framework/angular',
                // '/interview/order',
                // '/interview/js',
                // '/interview/htmlcss',
                // '/interview/opt',
                // 
                // '/interview/vue',
                // '/interview/react',
                // '/interview/mobile'
            ]
        },
        {
            title: '移动端',
            collapsable: false,
            children: [
                '/mobile/viewport',
                '/mobile/flex',
                '/mobile/h5'
            ]
        },
        {
            title: '日常积累',
            collapsable: false,
            children: [{
                title: 'Javascript',
                collapsable: true,
                children: [
                    '/days/js/curry',
                    '/days/js/eventloop',
                    '/days/js/lastcall',
                    '/days/js/microtask',
                    '/days/js/module',
                    '/days/js/jsast',
                    '/days/js/esmodule',
                    '/days/js/vue3'
                ]
            }, {
                title: 'Webpack',
                collapsable: true,
                children: [
                    '/days/webpack/yuanli',
                    '/days/webpack/rumen',
                    '/days/webpack/config',
                    '/days/webpack/shizhan',
                    '/days/webpack/opt'
                ]
            }, {
              title: 'Http',
              collapsable: true,
              children: [
                '/days/http/cache.md',
                '/days/http/https.md',
                '/days/http/security.md',
                '/days/http/url',
                '/days/http/httphistory',
                '/days/http/nginx'
              ]
            }]
        },
        {
            title: 'Css 世界',
            collapsable: false,
            children: [
                '/cssworld/1',
                '/cssworld/2',
                '/cssworld/3',
                '/cssworld/4',
                '/cssworld/5',
                '/cssworld/6',
                '/cssworld/7'
            ]
        },
        {
            title: '高效前端',
            collapsable: false,
            children: [
                '/efficient/htmlcss',
                '/efficient/jsopt',
                '/efficient/pageopt',
                '/efficient/html5opt',
                '/efficient/base',
                '/efficient/febase'
            ]
        },
        {
            title: '你不知道的 Javascript',
            collapsable: false,
            children: [{
                title: '上',
                collapsable: true,
                children: [
                    '/ydkjs/shang/1-3',
                    '/ydkjs/shang/1-4',
                    '/ydkjs/shang/1-5',
                    '/ydkjs/shang/2-1',
                    '/ydkjs/shang/2-2',
                    '/ydkjs/shang/2-3',
                    '/ydkjs/shang/2-5',
                    '/ydkjs/shang/2-6'
                ]
            }, {
                title: '中',
                collapsable: true,
                children: [
                    '/ydkjs/zhong/1-2',
                    '/ydkjs/zhong/1-3',
                    '/ydkjs/zhong/1-4',
                    '/ydkjs/zhong/1-5',
                    '/ydkjs/zhong/2-1',
                    '/ydkjs/zhong/2-3',
                    '/ydkjs/zhong/2-4',
                    '/ydkjs/zhong/2-5'
                ]
            }, {
                title: '下',
                collapsable: true,
                children: [
                    '/ydkjs/xia/1',
                    '/ydkjs/xia/2-2',
                    '/ydkjs/xia/2-3',
                    '/ydkjs/xia/2-4',
                    '/ydkjs/xia/2-5',
                    '/ydkjs/xia/2-6',
                    '/ydkjs/xia/2-7',
                    '/ydkjs/xia/2-8'
                ]
            }]
        },
        {
            title: '手写代码',
            collapsable: false,
            children: [
                '/write/promise',
                '/write/copy',
                '/write/bind',
                '/write/throttledebounce',
                '/write/suanfa',
                '/write/array',
                '/write/new'
            ]
        },
        // {
        //     title: 'Vue 哲学',
        //     collapsable: false,
        //     children: [
        //         '/vue/base',
        //     ]
        // },
        {
            title: '项目经验',
            collapsable: false,
            children: [
                '/expires/click'
            ]
        },
        {
            title: '常见问题',
            path: '/question/common'
        },
        {
            title: 'Java',
            collapsable: false,
            children: [{
                title: '基础',
                collapsable: true,
                children: [
                    '/java/base',
                    '/java/convert',
                    '/java/operator',
                    '/java/circulate',
                    '/java/array',
                    '/java/object',
                    '/java/package',
                    '/java/object-core'
                ]
            }]
        }
      ]
    },
    markdown: {
      lineNumbers: true
    }
  }
  