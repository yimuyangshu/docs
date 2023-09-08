import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/docs",
  title: "Yimuyangshu",
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
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
