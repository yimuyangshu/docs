import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "随手记",
  base: "/docs/",
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
