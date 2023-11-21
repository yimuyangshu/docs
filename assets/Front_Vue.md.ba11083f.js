import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.01af844e.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Front/Vue.md","filePath":"Front/Vue.md"}'),p={name:"Front/Vue.md"},o=l(`<h2 id="nexttick" tabindex="-1">nextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;nextTick&quot;">​</a></h2><p>在触发的changeValue时<code>不会立即获取修改后</code>的dom的text数据，但是可以通过<code>nextTick</code>函数将获取操作<code>推迟到下一次事件循环中执行</code>，也就是<code>推迟到vue完成dom更新后再执行</code>获取dom信息获取操作</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vKLnn" id="tab-uI7gXcp" checked="checked"><label for="tab-uI7gXcp">vue2</label><input type="radio" name="group-vKLnn" id="tab-0LZ9ZC-"><label for="tab-0LZ9ZC-">vue3</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">methods</span><span style="color:#E1E4E8;">:{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">changeValue</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.message </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;hello&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el.textContent) </span><span style="color:#6A737D;">// &#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">$nextTick</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$el.textContent) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"><span style="color:#E1E4E8;">      })</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">methods</span><span style="color:#24292E;">:{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">changeValue</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.message </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;hello&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$el.textContent) </span><span style="color:#6A737D;">// &#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">$nextTick</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">function</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">        console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$el.textContent) </span><span style="color:#6A737D;">// hello</span></span>
<span class="line"><span style="color:#24292E;">      })</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;myElement&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;changeValue&quot;&gt;count</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;"> {{ count }}</span><span style="color:#FDAEB7;font-style:italic;">&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">import</span><span style="color:#E1E4E8;"> { ref,nextTick } </span><span style="color:#B392F0;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">ref(0)</span></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">myElement</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">ref(null);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">changeValue</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">(e)</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  count.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(myElement.value.textContent)  </span><span style="color:#6A737D;">// count is 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">nextTick</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(myElement.value.textContent) </span><span style="color:#6A737D;">// count is 1</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;myElement&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;changeValue&quot;&gt;count</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">is</span><span style="color:#24292E;"> {{ count }}</span><span style="color:#B31D28;font-style:italic;">&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">import</span><span style="color:#24292E;"> { ref,nextTick } </span><span style="color:#6F42C1;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">count</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">ref(0)</span></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">myElement</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">ref(null);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">changeValue</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">(e)</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  count.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(myElement.value.textContent)  </span><span style="color:#6A737D;">// count is 0</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">nextTick</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(myElement.value.textContent) </span><span style="color:#6A737D;">// count is 1</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="props-父传子" tabindex="-1">props 父传子 <a class="header-anchor" href="#props-父传子" aria-label="Permalink to &quot;props 父传子&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HcutY" id="tab-pscDiqT" checked="checked"><label for="tab-pscDiqT">vue2</label><input type="radio" name="group-HcutY" id="tab-0j0_pjN"><label for="tab-0j0_pjN">vue3</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:msg=&quot;msgValue&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">data(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        msgValue:</span><span style="color:#9ECBFF;">&quot;message content&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;div&gt;{{</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">message</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#B392F0;">exports</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    props:[</span><span style="color:#9ECBFF;">&#39;msgValue&#39;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">child</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:msg=&quot;msgValue&quot;&gt;&lt;/child&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">data(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        msgValue:</span><span style="color:#032F62;">&quot;message content&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;div&gt;{{</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">message</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">}}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">exports</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    props:[</span><span style="color:#032F62;">&#39;msgValue&#39;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">msg</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;message content&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">child</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;{{msg}}&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  msg: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">child</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">msg</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;message content&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">child</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;{{msg}}&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  msg: String,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div></div></div><h2 id="emit-子传父" tabindex="-1">emit 子传父 <a class="header-anchor" href="#emit-子传父" aria-label="Permalink to &quot;emit 子传父&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-dm95Q" id="tab-FIkqiYz" checked="checked"><label for="tab-FIkqiYz">vue2</label><input type="radio" name="group-dm95Q" id="tab-NU849wx"><label for="tab-NU849wx">vue3</label></div><div class="blocks"><div class="language-javascript vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">child-component</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@custom-event=&quot;handleCustomEvent&quot;&gt;&lt;/child-component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">methods:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">handleCustomEvent</span><span style="color:#E1E4E8;">(data) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        console.log(</span><span style="color:#9ECBFF;">&#39;父节点接收到的数据:&#39;</span><span style="color:#E1E4E8;">, data);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span><span style="color:#FDAEB7;font-style:italic;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">&lt;button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;emitCustomEvent&quot;&gt;Click</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#FDAEB7;font-style:italic;">methods:</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emitCustomEvent</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        this.$emit(</span><span style="color:#9ECBFF;">&#39;custom-event&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Data from child&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">child-component</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@custom-event=&quot;handleCustomEvent&quot;&gt;&lt;/child-component&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">methods:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">handleCustomEvent</span><span style="color:#24292E;">(data) {</span></span>
<span class="line"><span style="color:#24292E;">        console.log(</span><span style="color:#032F62;">&#39;父节点接收到的数据:&#39;</span><span style="color:#24292E;">, data);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">}</span><span style="color:#B31D28;font-style:italic;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">&lt;button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;emitCustomEvent&quot;&gt;Click</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">me&lt;/button&gt;</span></span>
<span class="line"><span style="color:#B31D28;font-style:italic;">methods:</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">emitCustomEvent</span><span style="color:#24292E;">() {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        this.$emit(</span><span style="color:#032F62;">&#39;custom-event&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Data from child&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">child</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@custom-event=&quot;getChildValue&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getChildValue</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;父组件接收到的内容:&#39;</span><span style="color:#E1E4E8;">,e)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">type</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;button&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;clickFun&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">defineEmits([&#39;custom-event&#39;])</span></span>
<span class="line"><span style="color:#B392F0;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickFun</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">()</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">emit</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;custom-event&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;传过去的数据&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 父组件</span></span>
<span class="line highlighted"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">child</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@custom-event=&quot;getChildValue&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getChildValue</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;父组件接收到的内容:&#39;</span><span style="color:#24292E;">,e)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 子组件</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">type</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;button&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;clickFun&quot;&gt;按钮&lt;/button&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">defineEmits([&#39;custom-event&#39;])</span></span>
<span class="line"><span style="color:#6F42C1;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickFun</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">()</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">emit</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;custom-event&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;传过去的数据&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,7),t=[o];function e(c,r,y,E,i,d){return n(),a("div",null,t)}const g=s(p,[["render",e]]);export{F as __pageData,g as default};
