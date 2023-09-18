## 并发注意事项
### Cache
::: danger access_token
设置access_token缓存有效期1小时,缓存消失时获取最新的token,缓存消失时瞬时并发导致多次获取token,耗光token请求次数
```text
    读写分离：缓存改为永不过期,另设置一个定时任务/进程,每隔1个小时请求最新token并写入缓存中
```
:::
