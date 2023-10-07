# 常用命令行
## 安装 wrk
```shell
    # linux
    apk add build-base # 安装 gcc
    apk make
    
    git clone https://github.com/wg/wrk.git wrk
    cd wrk
    make
    cp wrk /usr/local/bin
    
    wrk -t <线程数> -c <连接数> -d <持续时间> -s <脚本文件> <URL>
```