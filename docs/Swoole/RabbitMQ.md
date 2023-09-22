## 遇到错误
::: danger 通道等待超时
PhpAmqpLib\Exception\AMQPTimeoutException: Timeout waiting on channel 
```text
env环境配置问题,一般是账号密码问题。正常情况下不设置,用config/autoload/amqp.php的默认配置即可
```
:::