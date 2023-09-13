# Git
  
## 分支操作
```shell
    # 分支列表
    git branch
    
    # 创建并切换分支
    git checkout -b branch_name
    
    # 删除分支
    git branch -D branch_name
    git push origin --delete branch-name # 删除远程分支
```


## 单独提交文件夹至仓库
```shell
git add ./docs/.vitepress/dist

git commit -m '111'

# 将指定目录下的内容推送到远程仓库分支
git subtree push --prefix=docs/.vitepress/dist origin docs
```

## githug action
```yaml
name: Build and Deploy Docs

on:
  push:
    branches:
      - master
      -
permissions:
  contents: write

env:
  SSH_PRIVATE_KEY: ${{ secrets.HOME }}

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: 检出仓库
        uses: actions/checkout@v2

      - name: 安装nodejs
        uses: actions/setup-node@v2
        with:
          node-version: 18

      - name: 安装扩展
        run: npm install

      - name: 构建docs
        run: npm run docs:build

      - name: 部署dist文件夹作为独立分支到docs
        uses: JamesIves/github-pages-deploy-action@v4.3.3
        with:
          folder: ./docs/.vitepress/dist
          branch: docs

      - name: 同步仓库到另一个仓库
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE }}
        with:
          # 注意替换为你的 GitHub 源仓库地址
          args: --source-ref=refs/heads/docs --destination-ref=refs/heads/master
          source-repo: git@github.com:yimuyangshu/docs.git
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: git@github.com:yimuyangshu/yimuyangshu.git

      - name: 设置访问秘钥
        run: |
          mkdir -p ~/.ssh/
          echo "${{ secrets.PRIVATE }}" > ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan github.com >> ~/.ssh/known_hosts

      - name: 推送到另一个仓库,并删除master
        run: |
          git remote add b-origin git@github.com:yimuyangshu/yimuyangshu.git
          git push b-origin --delete master


```