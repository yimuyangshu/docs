import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.ca65985f.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Docker/docker-ext.md","filePath":"Docker/docker-ext.md"}'),p={name:"Docker/docker-ext.md"},o=l(`<h2 id="手动安装redis扩展-imagick库图形操作同理" tabindex="-1">手动安装redis扩展 imagick库图形操作同理 <a class="header-anchor" href="#手动安装redis扩展-imagick库图形操作同理" aria-label="Permalink to &quot;手动安装redis扩展  imagick库图形操作同理&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># redis 需手动安装 pecl.php.net 下载tar包</span></span>
<span class="line"><span style="color:#6A737D;"># 将redis解压改名后传到 b68容器的指定目录</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:/tmp/redis</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">b68:/usr/src/php/ext</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 将扩展手动上传到容器指定地址</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 容器中运行 找不到文件夹执行命令加载出文件夹,然后执行上一步命令</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker-php-ext-install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;"># redis 加载进来后 执行编译</span></span>
<span class="line"><span style="color:#B392F0;">docker-php-ext-install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">redis</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># redis 需手动安装 pecl.php.net 下载tar包</span></span>
<span class="line"><span style="color:#6A737D;"># 将redis解压改名后传到 b68容器的指定目录</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:/tmp/redis</span><span style="color:#24292E;">  </span><span style="color:#032F62;">b68:/usr/src/php/ext</span><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 将扩展手动上传到容器指定地址</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 容器中运行 找不到文件夹执行命令加载出文件夹,然后执行上一步命令</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker-php-ext-install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;"># redis 加载进来后 执行编译</span></span>
<span class="line"><span style="color:#6F42C1;">docker-php-ext-install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">redis</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">提示</p><p>每次启动时都需要手动在容器内执行 <code>nginx</code> 启动服务</p></div><h2 id="通过自定义镜像部署项目" tabindex="-1">通过自定义镜像部署项目 <a class="header-anchor" href="#通过自定义镜像部署项目" aria-label="Permalink to &quot;通过自定义镜像部署项目&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 将项目文件夹映射到 /var/www/html 文件中</span></span>
<span class="line"><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">8001</span><span style="color:#9ECBFF;">:80</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">D:</span><span style="color:#79B8FF;">\\t</span><span style="color:#9ECBFF;">mp</span><span style="color:#79B8FF;">\\h</span><span style="color:#9ECBFF;">ousekeeping-mini-program</span><span style="color:#79B8FF;">\\a</span><span style="color:#9ECBFF;">pimanager</span><span style="color:#79B8FF;">\\:</span><span style="color:#9ECBFF;">/var/www/html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lnmpr:1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 修改nginx的配置文件</span></span>
<span class="line"><span style="color:#B392F0;">vi</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/etc/nginx/http.d/default.conf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 将项目文件夹映射到 /var/www/html 文件中</span></span>
<span class="line"><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">8001</span><span style="color:#032F62;">:80</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span><span style="color:#24292E;"> </span><span style="color:#032F62;">D:</span><span style="color:#005CC5;">\\t</span><span style="color:#032F62;">mp</span><span style="color:#005CC5;">\\h</span><span style="color:#032F62;">ousekeeping-mini-program</span><span style="color:#005CC5;">\\a</span><span style="color:#032F62;">pimanager</span><span style="color:#005CC5;">\\:</span><span style="color:#032F62;">/var/www/html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lnmpr:1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 修改nginx的配置文件</span></span>
<span class="line"><span style="color:#6F42C1;">vi</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/nginx/http.d/default.conf</span></span></code></pre></div><details class="details custom-block"><summary>default.conf</summary><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">server</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">listen</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">server_name</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">localhost</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">index</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.html</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.htm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default.php</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default.htm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">default.html</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">root</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/var/www/html/public</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#B392F0;">-e</span><span style="color:#E1E4E8;"> $request_filename){</span></span>
<span class="line"><span style="color:#E1E4E8;">                    </span><span style="color:#B392F0;">rewrite</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">^</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">.</span><span style="color:#E1E4E8;">*)$  </span><span style="color:#9ECBFF;">/index.php?s=</span><span style="color:#FFAB70;">$1</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">last</span><span style="color:#E1E4E8;">;   </span><span style="color:#F97583;">break</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                }</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\.</span><span style="color:#9ECBFF;">php</span><span style="color:#E1E4E8;">$ </span><span style="color:#9ECBFF;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">fastcgi_pass</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">127.0</span><span style="color:#9ECBFF;">.0.1:9000</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">fastcgi_param</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">SCRIPT_FILENAME</span><span style="color:#E1E4E8;"> $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">include</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">fastcgi_params</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">^/</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">\\.user.ini</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">\\.htaccess</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">\\.git</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">\\.svn</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">\\.project</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">LICENSE</span><span style="color:#F97583;">|</span><span style="color:#B392F0;">README.md</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">404</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">location</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">\\.</span><span style="color:#9ECBFF;">well-known{</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#B392F0;">allow</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">access_log</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/var/www/access.log</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#B392F0;">error_log</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">/var/www/error.log</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">listen</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">server_name</span><span style="color:#24292E;"> </span><span style="color:#032F62;">localhost</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">index</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.html</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.htm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default.php</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default.htm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">default.html</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">root</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/var/www/html/public</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/</span><span style="color:#24292E;"> </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#6F42C1;">-e</span><span style="color:#24292E;"> $request_filename){</span></span>
<span class="line"><span style="color:#24292E;">                    </span><span style="color:#6F42C1;">rewrite</span><span style="color:#24292E;">  </span><span style="color:#032F62;">^</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.</span><span style="color:#24292E;">*)$  </span><span style="color:#032F62;">/index.php?s=</span><span style="color:#E36209;">$1</span><span style="color:#24292E;">  </span><span style="color:#032F62;">last</span><span style="color:#24292E;">;   </span><span style="color:#D73A49;">break</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\.</span><span style="color:#032F62;">php</span><span style="color:#24292E;">$ </span><span style="color:#032F62;">{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">fastcgi_pass</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">127.0</span><span style="color:#032F62;">.0.1:9000</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">fastcgi_param</span><span style="color:#24292E;"> </span><span style="color:#032F62;">SCRIPT_FILENAME</span><span style="color:#24292E;"> $document_root$fastcgi_script_name;</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">include</span><span style="color:#24292E;"> </span><span style="color:#032F62;">fastcgi_params</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;"> </span><span style="color:#032F62;">^/</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">\\.user.ini</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">\\.htaccess</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">\\.git</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">\\.svn</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">\\.project</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">LICENSE</span><span style="color:#D73A49;">|</span><span style="color:#6F42C1;">README.md</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">404</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">location</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">\\.</span><span style="color:#032F62;">well-known{</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6F42C1;">allow</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        </span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">access_log</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/var/www/access.log</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6F42C1;">error_log</span><span style="color:#24292E;">  </span><span style="color:#032F62;">/var/www/error.log</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span></code></pre></div></details><h2 id="镜像操作" tabindex="-1">镜像操作 <a class="header-anchor" href="#镜像操作" aria-label="Permalink to &quot;镜像操作&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 创建镜像</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">commit</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;">d</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">name:ta</span><span style="color:#E1E4E8;">g</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 导出镜像</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">save</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-o</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">文件</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">.tar</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">镜像名</span><span style="color:#E1E4E8;">称</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 导入镜像</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">load</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-i</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">文件</span><span style="color:#E1E4E8;">名</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">.tar</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 镜像推送到自己的仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tag</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">lnmpr:1</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yimuyangshu/lnmpr74:1</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 将lnmpr仓库打上自己的tag标签</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># 推送到自己的仓库</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">push</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yimuyangshu/lnmpr74:1</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建镜像</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">i</span><span style="color:#24292E;">d</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">name:ta</span><span style="color:#24292E;">g</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 导出镜像</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">save</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-o</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">文件</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">.tar</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">镜像名</span><span style="color:#24292E;">称</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 导入镜像</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">load</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-i</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">文件</span><span style="color:#24292E;">名</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">.tar</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 镜像推送到自己的仓库</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tag</span><span style="color:#24292E;"> </span><span style="color:#032F62;">lnmpr:1</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yimuyangshu/lnmpr74:1</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 将lnmpr仓库打上自己的tag标签</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># 推送到自己的仓库</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yimuyangshu/lnmpr74:1</span></span></code></pre></div><h2 id="通过-clash-for-docker-搭建-chatgpt" tabindex="-1">通过 clash for docker 搭建 ChatGPT <a class="header-anchor" href="#通过-clash-for-docker-搭建-chatgpt" aria-label="Permalink to &quot;通过 clash for docker 搭建 ChatGPT&quot;">​</a></h2><p><a href="https://github.com/Yidadaa/ChatGPT-Next-Web/blob/main/README_CN.md#%E9%83%A8%E7%BD%B2" target="_blank" rel="noreferrer">GPT UI</a><a href="https://sms-activate.org/cn" target="_blank" rel="noreferrer">SMS</a><a href="https://temp-mail.org/" target="_blank" rel="noreferrer">临时邮箱</a><a href="https://dreamacro.github.io/clash/introduction/service.html#docker" target="_blank" rel="noreferrer">clash for docker 文档</a></p><ol><li>先将小蓝猫的 profiles 通过 edit 将内容放到 config.yaml 中</li><li><code>config.yaml</code> 和 <code>docker-compose.yml</code> 在同一目录里</li><li>通过<code>docker-compose up -d</code> 启动 / <code>docker-compose stop</code> 可以关闭</li><li><code>docker pull yidadaa/chatgpt-next-web:v2.9.1</code> 安装GPT UI,不加tags可能出错</li><li>直连方式 <code>docker run --name chat -p 3000:3000 -e PROXY_URL=&quot;http://192.168.1.96:17890&quot; -e OPENAI_API_KEY=&quot;sk-XXX&quot; yidadaa/chatgpt-next-web</code></li><li>必要时候可以删除 台湾、香港 等节点</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">services:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">clash:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">image:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ghcr.io/dreamacro/clash</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">restart:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;"># --link 代理容器名:使用代理容器名 </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">container_name:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">my-clash</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">volumes:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./config.yaml:/root/.config/clash/config.yaml:ro</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - ./ui:/ui:ro # dashboard volume</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">ports:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;17890:7890&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;7891:7891&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># - &quot;8080:8080&quot; # The External Controller (RESTful API)</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">network_mode:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;bridge&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">services:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">clash:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">image:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ghcr.io/dreamacro/clash</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">restart:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;"># --link 代理容器名:使用代理容器名 </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">container_name:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">my-clash</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">volumes:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./config.yaml:/root/.config/clash/config.yaml:ro</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - ./ui:/ui:ro # dashboard volume</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">ports:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;17890:7890&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">-</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;7891:7891&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># - &quot;8080:8080&quot; # The External Controller (RESTful API)</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">network_mode:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;bridge&quot;</span></span></code></pre></div>`,12),e=[o];function c(t,r,E,y,i,F){return a(),n("div",null,e)}const h=s(p,[["render",c]]);export{C as __pageData,h as default};
