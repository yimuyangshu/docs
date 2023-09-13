## 手动安装redis扩展  imagick库图形操作同理
```shell
# redis 需手动安装 pecl.php.net 下载tar包
# 将redis解压改名后传到 b68容器的指定目录
docker cp D:/tmp/redis  b68:/usr/src/php/ext  # 将扩展手动上传到容器指定地址
    # 容器中运行 找不到文件夹执行命令加载出文件夹,然后执行上一步命令
    docker-php-ext-install a 
# redis 加载进来后 执行编译
docker-php-ext-install redis
```
::: warning 提示
每次启动时都需要手动在容器内执行 `nginx` 启动服务
:::

## 通过自定义镜像部署项目
```shell
# 将项目文件夹映射到 /var/www/html 文件中
docker run -d -p 8001:80 -v D:\tmp\housekeeping-mini-program\apimanager\:/var/www/html lnmpr:1

# 修改nginx的配置文件
vi /etc/nginx/http.d/default.conf
```

::: details default.conf
```shell
    server {
            listen 80;
            server_name localhost;
            index index.php index.html index.htm default.php default.htm default.html;
            root /var/www/html/public;
    
            location / {
                if (!-e $request_filename){
                    rewrite  ^(.*)$  /index.php?s=$1  last;   break;
                }
            }
        
            location ~ \.php$ {
                fastcgi_pass 127.0.0.1:9000;
                fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                include fastcgi_params;
            }
        
            location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
            {
                return 404;
            }
        
            location ~ \.well-known{
                allow all;
            }
        
            access_log  /var/www/access.log;
            error_log  /var/www/error.log;
        }
```
:::


## 镜像操作
```shell
    # 创建镜像
    docker commit <id> <name:tag>
    # 导出镜像
    docker save -o <文件名>.tar <镜像名称>
    # 导入镜像
    docker load -i <文件名>.tar
    
    # 镜像推送到自己的仓库
    docker tag lnmpr:1 yimuyangshu/lnmpr74:1 # 将lnmpr仓库打上自己的tag标签
    # 推送到自己的仓库
    docker push yimuyangshu/lnmpr74:1
```

## 通过 clash for docker 搭建 ChatGPT
[GPT UI](https://github.com/Yidadaa/ChatGPT-Next-Web/blob/main/README_CN.md#%E9%83%A8%E7%BD%B2)
[SMS](https://sms-activate.org/cn)
[临时邮箱](https://temp-mail.org/)
[clash for docker 文档](https://dreamacro.github.io/clash/introduction/service.html#docker)

1. 先将小蓝猫的 profiles 通过 edit 将内容放到 config.yaml 中
2. `config.yaml` 和 `docker-compose.yml` 在同一目录里
3. 通过`docker-compose up -d` 启动  / `docker-compose stop` 可以关闭
4. `docker pull yidadaa/chatgpt-next-web:v2.9.1` 安装GPT UI,不加tags可能出错
6. 直连方式 `docker run --name chat -p 3000:3000 -e PROXY_URL="http://192.168.1.96:17890" -e  OPENAI_API_KEY="sk-XXX" yidadaa/chatgpt-next-web`
7. 必要时候可以删除 台湾、香港 等节点
```shell
services:
  clash:
    image: ghcr.io/dreamacro/clash
    restart: always
    # --link 代理容器名:使用代理容器名 
    container_name: my-clash
    volumes:
      - ./config.yaml:/root/.config/clash/config.yaml:ro
      # - ./ui:/ui:ro # dashboard volume
    ports:
      - "17890:7890"
      - "7891:7891"
      # - "8080:8080" # The External Controller (RESTful API)
    network_mode: "bridge"
```