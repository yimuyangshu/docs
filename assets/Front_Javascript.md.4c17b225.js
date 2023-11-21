import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.01af844e.js";const u=JSON.parse('{"title":"常用 JavaScript","description":"","frontmatter":{},"headers":[],"relativePath":"Front/Javascript.md","filePath":"Front/Javascript.md"}'),p={name:"Front/Javascript.md"},o=l(`<h1 id="常用-javascript" tabindex="-1">常用 JavaScript <a class="header-anchor" href="#常用-javascript" aria-label="Permalink to &quot;常用 JavaScript&quot;">​</a></h1><h2 id="object-assign" tabindex="-1">Object.assign() <a class="header-anchor" href="#object-assign" aria-label="Permalink to &quot;Object.assign()&quot;">​</a></h2><p>原始对象source的嵌套对象受到影响，因为他们<code>共享相同的引用</code></p><details class="details custom-block"><summary>例子</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">source</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    a: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    b: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        c: </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">({}, source);</span></span>
<span class="line"><span style="color:#E1E4E8;">target.a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">target.b.c </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(source.a); </span><span style="color:#6A737D;">// 输出 1，原始对象的属性没有受到影响</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(source.b.c); </span><span style="color:#6A737D;">// 输出 4，因为嵌套对象引用相同，所以原始对象的属性也被修改</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    a: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    b: {</span></span>
<span class="line"><span style="color:#24292E;">        c: </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">target</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">({}, source);</span></span>
<span class="line"><span style="color:#24292E;">target.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">target.b.c </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(source.a); </span><span style="color:#6A737D;">// 输出 1，原始对象的属性没有受到影响</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(source.b.c); </span><span style="color:#6A737D;">// 输出 4，因为嵌套对象引用相同，所以原始对象的属性也被修改</span></span></code></pre></div></details><h2 id="深拷贝" tabindex="-1">深拷贝 <a class="header-anchor" href="#深拷贝" aria-label="Permalink to &quot;深拷贝&quot;">​</a></h2><p>嵌套对象之间不共享引用需要进行深拷贝</p>`,6),e=[o];function c(t,r,E,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{u as __pageData,F as default};
