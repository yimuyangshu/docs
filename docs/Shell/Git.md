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