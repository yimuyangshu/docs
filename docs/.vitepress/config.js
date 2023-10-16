import {defineConfig} from 'vitepress'

export default defineConfig({
  title: "随手记",
  themeConfig: {
    logo:"/world.svg",
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
        collapsed: true,
        items: [
          { text: 'Docker 常用', link: '/Docker/docker' },
          { text: 'Docker 扩展', link: '/Docker/docker-ext' }
        ]
      },
      {
        text: 'System',
        collapsed: true,
        items:[
          {text: 'Git',link: '/Shell/Git.md'},
          {text: 'nginx',link: '/Shell/nginx.md'},
          {text: '命令行',link: '/Shell/shell.md'},
        ]
      },
      {
        text: '开发相关',
        collapsed: true,
        items:[
          {text: '并发笔记',link: '/Swoole/Notice.md'},
          {text: 'RabbitMQ',link: '/Swoole/RabbitMQ.md'},
          {text: '自定义函数(PHP)',link: '/PHP/Demo.md'},
        ]
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
