import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 仓库名 xxx.github.io/docs 否则js,css 404
  title: "Yimuyangshu",
  head:[
    ['link',{rel: 'stylesheet' ,href: './theme/cutsom.css',as:'style'}]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docker', link: '/Docker/docker.md' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: 'Docker',
        items: [
          { text: 'Docker 常用', link: '/Docker/docker' },
          { text: 'Docker 扩展', link: '/Docker/docker-ext' }
        ]
      },
      {
        text: 'System',
        items:[
          {text: 'Git',link: '/Shell/Git.md'}
        ]
      },
      {
        text: 'Swoole',
        items:[
          {text: '并发笔记',link: '/Swoole/Notice.md'}
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
