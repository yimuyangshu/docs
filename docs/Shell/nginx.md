# Nginx

## thinkphp 伪静态

```php
location / {
  if (!-e $request_filename) {
    rewrite ^(.*)$ /index.php?s=/$1 last;
    break;
  }
}
```

## laravel 伪静态

```php
location / {
    try_files $uri $uri/ /index.php?$query_string;
}
```

## 伪静态只接受指定值

主要用来应对tp6的多应用模式下实现短链接的效果 https://www.xxx.com/6i8GF5g7R

```shell
location / {
  if (!-e $request_filename) {
    #正则匹配到Dl开头的访问到 /index/index/参数名/参数值
    rewrite ^/Dl(.*)$ /index.php?s=/index/index/page/$1;
    
    rewrite ^(.*)$ /index.php?s=/$1 last;
    break;
  }
}
```

## OPTIONS请求 伪静态 浏览器预检

> 状态:307 浏览器内部将http跳转到https,修改前端代码为https(后端https)

```php
location / {
    //... 放在最顶部
    if ($request_method = 'OPTIONS') {
      add_header 'Access-Control-Allow-Origin' '*';
      add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
      add_header 'Access-Control-Allow-Credentials' 'true';
      add_header 'Access-Control-Allow-Headers' '*';
      return 204;
    }
}
```

## 反向代理

```text
#PROXY-START/
location /
{
    proxy_pass http://127.0.0.1:8080;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_cache off;
}
#PROXY-END/
```

## 负载均衡

`浏览器`请求默认会触发2次,认为是网页会请求网站图标

```shell
    upstream myproject {
       server 192.168.1.151:10001 weight=1;
       server 192.168.1.151:10002 weight=1;
    }
    
    server {
      listen 9017;
      server_name 127.0.0.1;
      
      location / {
         proxy_pass http://myproject;
      }   
    }
```