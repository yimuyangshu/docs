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
        text: 'PHP',
        items: [
          { text: 'Docker 常用', link: '/Docker/docker' },
          { text: 'Docker 扩展', link: '/Docker/docker-ext' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
