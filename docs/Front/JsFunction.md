# JavaScript 自定义函数
## 判断用户是否在浏览当前页面
```javascript
var hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
            null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
    if (!document[hiddenProperty]) {
        console.log('页面激活');
    }else{
        console.log('页面非激活')
    }
}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
```

## 获取url的param参数
```javascript
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
```

## 拖拽效果
::: details
::: code-group details 代码详情
```html
<!doctype html>
<html lang="en">
<head>
    <title>JS实现拖拽效果</title>
</head>
<body>
    <div id="div1"></div>
</body>
<style>
    #div1{
        width: 100px;
        height: 100px;
        background-color: #000;
        position: absolute;
    }
</style>
</html>
```
```javascript
<script>
    var div1 = document.getElementById("div1");
    var dx = 0;
    var dy = 0;
    div1.onmousedown = function (event){
    var event = event || window.event;
    //当前鼠标在整个window中的坐标
    var clientX = event.clientX;
    var clientY = event.clientY;

    //当前div1距离(左和上)顶点距离
    var offsetLeft = this.offsetLeft;
    var offsetTop = this.offsetTop;

    //鼠标在div1里的坐标
    dx = clientX - offsetLeft;
    dy = clientY - offsetTop;

    document.onmousemove = function(ev){
    var ev = ev || window.event;
    //鼠标当前处于window里的坐标
    var x = ev.clientX;
    var y = ev.clientY;

    var posX = 0;
    var posY = 0;

    //当前div1的(左和上)顶点所在坐标
    posX = x - dx;
    posY = y - dy;

    //限制活动范围
    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;

    var winX = document.documentElement.clientWidth || document.body.clientWidth;
    var winY = document.documentElement.clientHeight || document.body.clientHeight;
    var domSize = div1.getBoundingClientRect();
    var domHeight = domSize.height;
    var domWidth = domSize.width;

    if(posX >= (winX - domWidth)){
        posX = winX - domWidth
    }
    if(posY >= (winY - domWidth)){
        posY = winY - domHeight
    }

    div1.style.left = posX + 'px';
    div1.style.top = posY + 'px';
}

    div1.onmouseup = function(){
    document.onmousemove = null
}

}
</script>

```
:::


## 文件切片上传
::: details
::: code-group
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>文件上传</title>
  <script src="https://cdn.bootcss.com/axios/0.18.0/axios.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/spark-md5/3.0.0/spark-md5.js"></script>
  <style>
    /* 自定义进度条样式 */
    .precent input[type=range] {
      -webkit-appearance: none;
      /*清除系统默认样式*/
      width: 7.8rem;
      /* background: -webkit-linear-gradient(#ddd, #ddd) no-repeat, #ddd; */
      /*设置左边颜色为#61bd12，右边颜色为#ddd*/
      background-size: 75% 100%;
      /*设置左右宽度比例*/
      height: 0.6rem;
      /*横条的高度*/
      border-radius: 0.4rem;
      border: 1px solid #ddd;
      box-shadow: 0 0 10px rgba(0,0,0,.125) inset ;
    }

    /*拖动块的样式*/
    .precent input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;
      /*清除系统默认样式*/
      height: .9rem;
      /*拖动块高度*/
      width: .9rem;
      /*拖动块宽度*/
      background: #fff;
      /*拖动块背景*/
      border-radius: 50%;
      /*外观设置为圆形*/
      border: solid 1px #ddd;
      /*设置边框*/
    }

  </style>
</head>

<body>
<h1>大文件分片上传测试</h1>
<div>
  <input id="file" type="file" name="avatar" />
  <div style="padding: 10px 0;">
    <input id="submitBtn" type="button" value="提交" />
    <input id="pauseBtn" type="button" value="暂停" />
  </div>
  <div class="precent">
    <input type="range" value="0" /><span id="precentVal">0%</span>
  </div>
</div>
<script src="section.js"></script>

</body>

</html>

```
```javascript

$(document).ready(() => {
    const submitBtn = $('#submitBtn');  //提交按钮
    const precentDom = $(".precent input")[0]; // 进度条
    const precentVal = $("#precentVal");  // 进度条值对应dom
    const pauseBtn = $('#pauseBtn');  // 暂停按钮

    // 每个chunk的大小，设置为1兆
    const chunkSize = 1 * 1024 * 1024;
    // 获取slice方法，做兼容处理
    const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    // 对文件进行MD5加密(文件内容+文件标题形式)
    const hashFile = (file) => {
        return new Promise((resolve, reject) => {
            const chunks = Math.ceil(file.size / chunkSize);
            let currentChunk = 0;
            const spark = new SparkMD5.ArrayBuffer();
            const fileReader = new FileReader();
            function loadNext() {
                const start = currentChunk * chunkSize;
                const end = start + chunkSize >= file.size ? file.size : start + chunkSize;
                fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
            }
            fileReader.onload = e => {
                spark.append(e.target.result); // Append array buffer
                currentChunk += 1;
                if (currentChunk < chunks) {
                    loadNext();
                } else {
                    console.log('finished loading');
                    const result = spark.end();
                    // 通过内容和文件名称进行md5加密
                    const sparkMd5 = new SparkMD5();
                    sparkMd5.append(result);
                    sparkMd5.append(file.name);
                    const hexHash = sparkMd5.end();
                    resolve(hexHash);
                }
            };
            fileReader.onerror = () => {
                console.warn('文件读取失败！');
            };
            loadNext();
        }).catch(err => {
            console.log(err);
        });
    }

    // 提交
    submitBtn.on('click', async () => {
        var pauseStatus = false;
        var nowUploadNums = 0
        // 1.读取文件
        const fileDom = $('#file')[0];
        const files = fileDom.files;
        const file = files[0];
        if (!file) {
            alert('没有获取文件');
            return;
        }
        // 2.设置分片参数属性、获取文件MD5值
        const hash = await hashFile(file); //文件 hash
        const blockCount = Math.ceil(file.size / chunkSize); // 分片总数
        const axiosPromiseArray = []; // axiosPromise数组
        // 文件上传
        const uploadFile = () => {
            const start = nowUploadNums * chunkSize;
            const end = Math.min(file.size, start + chunkSize);
            // 构建表单
            const form = new FormData();
            // blobSlice.call(file, start, end)方法是用于进行文件分片
            form.append('file', blobSlice.call(file, start, end));
            form.append('index', nowUploadNums);
            form.append('hash', hash);
            // ajax提交 分片，此时 content-type 为 multipart/form-data


            const axiosOptions = {
                onUploadProgress: e => {
                    nowUploadNums++;
                    // 判断分片是否上传完成
                    if (nowUploadNums < blockCount) {
                        setPrecent(nowUploadNums, blockCount);
                        uploadFile(nowUploadNums)
                    } else {
                        // 4.所有分片上传后，请求合并分片文件
                        axios.all(axiosPromiseArray).then(() => {
                            setPrecent(blockCount, blockCount); // 全部上传完成
                            axios.post('http://127.0.0.1:555/Other/mergeChunks', {
                                name: file.name,
                                total: blockCount,
                                hash
                            }).then(res => {
                                console.log(res.data, file);
                                pauseStatus = false;
                                console.log('上传成功');
                            }).catch(err => {
                                console.log(err);
                            });
                        });
                    }
                },
            };
            // 加入到 Promise 数组中
            if (!pauseStatus) {
                axiosPromiseArray.push(axios.post('http://127.0.0.1:555/Other/fileUpload', form, axiosOptions));
            }

        }
        // 设置进度条
        function setPrecent(now, total) {
            var prencentValue = ((now / total) * 100).toFixed(2)
            precentDom.value = prencentValue
            precentVal.text(prencentValue + '%')
            precentDom.style.cssText = `background:-webkit-linear-gradient(top, #059CFA, #059CFA) 0% 0% / ${prencentValue}% 100% no-repeat`
        }
        // 暂停
        pauseBtn.on('click', (e) => {
            pauseStatus = !pauseStatus;
            e.currentTarget.value = pauseStatus ? '开始' : '暂停'
            if (!pauseStatus) {
                uploadFile(nowUploadNums)
            }
        })
        uploadFile();
    });
})

```
```php [tp6]
<?php
declare (strict_types=1);

namespace app\Other\controller;

use app\common\controller\BaseController;
use app\Request;

header("Access-Control-Allow-Origin: *");
class File extends BaseController
{
    public function fileUpload(Request $request)
    {
        try {
            $file = $_FILES['file'];
            $filename = $request->param('hash').'-'.$request->param('index');
            $filePath = "./upload/".$request->param('hash');
            if(!is_dir($filePath)){
                mkdir($filePath,777);
            }
            $res = move_uploaded_file($file['tmp_name'],$filePath.'/'.$filename);
            return $res;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function mergeChunks(Request $request)
    {
        try {
            $data = $request->param();

            $chunksPath = './upload/'.$data['hash'];
            $filePath = './upload/'.$data['name'];

            //读取文件夹内所有文件
            $files = scandir($chunksPath);
            foreach($files as $k => $file){
                if($file == '.' || $file == '..'){
                    unset($files[$k]);
                }
            }

            if($data['total'] != count($files)){
                return "文件切片数量对不上";
            }

            $content = '';
            for($i = 0;$i<count($files);$i++){
                #循环读取内容合并
                $chunk = $chunksPath.'/'.$data['hash'].'-'.$i;
                $content .= file_get_contents($chunk);

                unlink($chunk);
            }

            # 将合并的内容写入文件
            file_put_contents($filePath,$content);

            rmdir($chunksPath);

            return "上传成功";


        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

}

```
:::



## vconsole 日志调试器
::: details
```javascript
function openConsole(){
        const head = document.getElementsByTagName("head") ? document.getElementsByTagName("head")[0] : document.documentElement;
        const jsElement = document.createElement("script");
        jsElement.type = "text/javascript";
        jsElement.src = 'https://unpkg.com/vconsole/dist/vconsole.min.js';
        head.appendChild(jsElement);
        jsElement.onload = function () {
            new VConsole();
        }
    }
```
:::


## Ctrl + C 复制追加内容
::: details
```javascript
    var clickflag=true; // 防止事件多次触发 导致内容不对
    document.body.addEventListener('copy',function(e){
        if (clickflag) {
            clickflag = false;
            console.log(e);
            var sel = window.getSelection();
            var content1 = sel.toString() + "\r\n ssss";
            var range = document.createRange();
            var node = document.createTextNode(content1);    //创建文本节点，并指定内容
            document.body.appendChild(node);
            range.selectNode(node)
            sel.removeAllRanges();
            sel.addRange(range)
            console.log(document.execCommand("copy"))
            document.body.removeChild(node);
            clickflag = true
        }
    })

```
:::