

# Docker

[docker hub](https://hub.docker.com)

## Docker 安装
```shell
curl -sSL https://get.docker.com/ | sh
systemctl start docker
systemctl enable docker.service
```
```shell
-d 后台运行
-p 端口映射
-v 目录映射
-e 环境变量 或 容器终端键入export XXXX
-itd 后台运行交互式容器(nodejs、VPN) 
--name 容器名称 镜像
--restart 自启动 no(默认)  always(总是)
--link 容器名:容器别名  可以通过代理直接访问容器内部的端口服务(如下)
-e HTTP_PROXY / -e ALL_PROXY  http://容器别名:端口 
```

## 常用命令
```shell
# 查看容器列表
docker ps    # 已启动
docker ps -a # 所有

# 容器状态
docker stats

# 启动/停止/重启指定容器
docker start/stop/restart <container-id>

# 进入指定容器的终端
docker exec -it <container-id> /bin/bash
# 指定容器执行命令
docker exec vitepress sh -c "cd /www && npm run docs:build"

# 改变容器重启策略 / 挂载卷 / 网络设置 / 资源限制(cpu、内存)
docker update --restart=always <container-id>

```

### 卷的操作
```shell
# 列出所有卷
docker volume ls
# 通过名称 or ID删除指定卷
```shell
docker volume rm <volume_name_or_id>
```

### 获取容器的IP
```shell
docker inspect <container_name or id>
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container_name or id>
```

## Mysql5.7
```shell
docker run -d -p 3307:3306 -e MYSQL_ROOT_PASSWORD=root --name mysql mysql:5.7 --character-set-server=utf8mb4 --collation-server=utf8mb4_general_ci
```

## Redis
redis 是否只读 no
```shell
docker run --name redis -d -p 6379:6379 redis:7.0 --slave-read-only no
```

## PHP8.2 Swoole
```shell
docker run -d --name swoole_8.2 -v D:\workspace:/www -p 9501:9501 -p 9502:9502 -p 9503:9503 -it hyperf/hyperf:8.2-alpine-v3.18-swoole-v5.0.3
```

## PHP7.4 Swoole
```shell
docker run -d --name swoole_7.4 -v D:\workspace:/www -p 9504:9504 -p 9505:9505 -p 9506:9506 -it hyperf/hyperf:7.4-alpine-v3.15-swoole-v4.8.11
```

## 时区设置
```shell
# 创建容器时设置
-v /etc/localtime:/etc/localtime:ro  # 时区共享(注:php-fpm的时区也需要调整)

# 容器里直接设置
apk add tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```


## PHP-fpm+nginx
```shell
docker pull php:7.4.33-fpm-alpine

docker run --name nginx_php74 -d -p 8080:80 php:7.4.33-fpm-alpine

docker exec -it <容器ID> /bin/bash 或者 /bin/sh  # windows中用powerShell

    # 容器中运行
    apk add nginx
    ngxin # 启动nginx
    docker-php-ext-install pdo_mysql opcache mysqli
```



## docker 镜像源配置
追加配置文件 配置国内镜像源 , 同时`关闭`VPN,否则都无法下载镜像
```json
{
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn/"
  ]
}
```