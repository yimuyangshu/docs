# 常用命令行

## 命令行

| 描述                              | 命令                                                         |
|---------------------------------|------------------------------------------------------------|
| 查看本机公网IP                        | curl ip.sb                                                 |
| 查看TCP进程                         | netstat -nltp                                              |
| 查看UDP进程                         | netstat -udpl                                              |
| netcat连接UDP(yum install nc)     | nc -u 127.0.0.1 9999                                       |
| 查看归属于某个进程的子进程                   | pstree -p 进程号(PID)                                         |
| 关键词包含PHP的进程                     | ps -ef \| grep php                                         |
| 查看系统进程                          | ps aux \| grep php                                         |
| 实时读取文件内容                        | tail -f filename                                           |
| 重载nginx                         | service nginx reload                                       |
| 查看PHP的swoole扩展                  | php --ri swoole                                            |
| 压缩文件夹                           | tar -zcvf xxx.tar.gz /xxx                                  |
| 查询目录内所有文件中包含关键词的文件(不区分大小写 -i)   | grep -R -w -l -i "关键词" 目录地址                                |
| 防火墙 ...禁用                       | systemctl status\|stop\|restart\|disable firewalld.service |
| 查看进程列表                          | ps axu                                                     |
| 查找之前第23天修改过的内容                  | find /var/log/ -mtime 23 -type f -print <br/> +n 表示n天之前；-n 表示n天以内；n 表示第n天的时候。             |
| 查看当前文件夹内每个文件夹大小                 | ls lh                                                      |
| 查看当前文件夹总大小                      | du -sh                                                     |
| 以后台进程的方式运行                      | nohup php swoole.php > /dev/null 2>&1 &                    |
| 执行命令行后将返回结果写入到文件中               | 命令行 &> /tmp/output.txt                                     |
| 查看本地IP地址                        | curl ifconfig.me                                           |
| 查看公网IP地址(windows)               | curl ipinfo.io/ip                                          |
| 查看liunx当前的操作系统                  | cat /etc/os-release                                        |
| 通过7890代理访问google                | curl --proxy 127.0.0.1:7890 https://www.google.com         |
| 查看正在使用的端口/连接信息                  | netstat -ant <br/> netstat -nltp                           |

## 安装

| 命令     | 名称                           |
|--------|------------------------------|
| telnet | yum install -y telnet.x86_64 |
| nohup  | yum install coreutils        |
| netcat | yum install nc               |

## Virtualbox 桥接网卡配置

> vi /etc/sysconfig/network-scripts/ifcfg-enp0s3

> systemctl restart network

```Shell
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
DEVICE=enp0s3
ONBOOT=yes
BOOTPROTO=dhcp
NAME=enp0s3
```

## 安装 wrk

```shell
# Alpine linux
apk add build-base # 安装 gcc
apk add make
apk add perl
apk add openssl-dev

git clone https://github.com/wg/wrk.git wrk
cd wrk
make clean
make
cp wrk /usr/local/bin

wrk -t <线程数> -c <连接数> -d <持续时间> -s <脚本文件> <URL>
```