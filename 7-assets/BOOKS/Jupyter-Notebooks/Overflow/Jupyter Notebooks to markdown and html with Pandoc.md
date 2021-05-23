# Jupyter Notebooks to markdown and html with Pandoc

> For several months now, the universal document converter pandoc has had support for Jupyter Notebooks. This means that with a single call, you can convert.ipynb files to any of the output formats t...

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="" xml:lang="">
<head>
  <meta charset="utf-8" />
  <meta name="generator" content="pandoc" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
  <title>notebooks</title>
  <style>
      code{white-space: pre-wrap;}
      span.smallcaps{font-variant: small-caps;}
      span.underline{text-decoration: underline;}
      div.column{display: inline-block; vertical-align: top; width: 50%;}
  </style>
  <style>
code.sourceCode > span { display: inline-block; line-height: 1.25; }
code.sourceCode > span { color: inherit; text-decoration: inherit; }
code.sourceCode > span:empty { height: 1.2em; }
.sourceCode { overflow: visible; }
code.sourceCode { white-space: pre; position: relative; }
div.sourceCode { margin: 1em 0; }
pre.sourceCode { margin: 0; }
@media screen {
div.sourceCode { overflow: auto; }
}
@media print {
code.sourceCode { white-space: pre-wrap; }
code.sourceCode > span { text-indent: -5em; padding-left: 5em; }
}
pre.numberSource code
  { counter-reset: source-line 0; }
pre.numberSource code > span
  { position: relative; left: -4em; counter-increment: source-line; }
pre.numberSource code > span > a:first-child::before
  { content: counter(source-line);
    position: relative; left: -1em; text-align: right; vertical-align: baseline;
    border: none; display: inline-block;
    -webkit-touch-callout: none; -webkit-user-select: none;
    -khtml-user-select: none; -moz-user-select: none;
    -ms-user-select: none; user-select: none;
    padding: 0 4px; width: 4em;
    color: #aaaaaa;
  }
pre.numberSource { margin-left: 3em; border-left: 1px solid #aaaaaa;  padding-left: 4px; }
div.sourceCode
  {   }
@media screen {
code.sourceCode > span > a:first-child::before { text-decoration: underline; }
}
code span.al { color: #ff0000; font-weight: bold; } /\* Alert \*/
code span.an { color: #60a0b0; font-weight: bold; font-style: italic; } /\* Annotation \*/
code span.at { color: #7d9029; } /\* Attribute \*/
code span.bn { color: #40a070; } /\* BaseN \*/
code span.bu { } /\* BuiltIn \*/
code span.cf { color: #007020; font-weight: bold; } /\* ControlFlow \*/
code span.ch { color: #4070a0; } /\* Char \*/
code span.cn { color: #880000; } /\* Constant \*/
code span.co { color: #60a0b0; font-style: italic; } /\* Comment \*/
code span.cv { color: #60a0b0; font-weight: bold; font-style: italic; } /\* CommentVar \*/
code span.do { color: #ba2121; font-style: italic; } /\* Documentation \*/
code span.dt { color: #902000; } /\* DataType \*/
code span.dv { color: #40a070; } /\* DecVal \*/
code span.er { color: #ff0000; font-weight: bold; } /\* Error \*/
code span.ex { } /\* Extension \*/
code span.fl { color: #40a070; } /\* Float \*/
code span.fu { color: #06287e; } /\* Function \*/
code span.im { } /\* Import \*/
code span.in { color: #60a0b0; font-weight: bold; font-style: italic; } /\* Information \*/
code span.kw { color: #007020; font-weight: bold; } /\* Keyword \*/
code span.op { color: #666666; } /\* Operator \*/
code span.ot { color: #007020; } /\* Other \*/
code span.pp { color: #bc7a00; } /\* Preprocessor \*/
code span.sc { color: #4070a0; } /\* SpecialChar \*/
code span.ss { color: #bb6688; } /\* SpecialString \*/
code span.st { color: #4070a0; } /\* String \*/
code span.va { color: #19177c; } /\* Variable \*/
code span.vs { color: #4070a0; } /\* VerbatimString \*/
code span.wa { color: #60a0b0; font-weight: bold; font-style: italic; } /\* Warning \*/
  </style>
  <!--\[if lt IE 9\]>
    <script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js"></script>
  <!\[endif\]-->
</head>
<body>
<div class="cell markdown">
<h1 id="heres-a-demo-notebook">Here's a demo notebook</h1>
<p>This is a demo notebook to play around with the pandoc ipynb support</p>
<h2 id="markdown">Markdown</h2>
<p>As it is markdown, you can embed images, HTML, etc into your posts!</p>
<p><img src="outputs/images/ca17e56d65946db885db7f8f50a9605a6a94e6a7.jpg" /></p>
<p>Here's one <span class="math inline"><em>i</em><em>n</em><em>l</em><em>i</em><em>n</em><em>e</em><sub><em>m</em><em>a</em><em>t</em><em>h</em></sub></span> and</p>
<p><br /><span class="math display"><em>m</em><em>a</em><em>t</em><em>h</em><sup><em>b</em><em>l</em><em>o</em><em>c</em><em>k</em><em>s</em></sup></span><br /></p>
<div class="sourceCode" id="cb1"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb1-1"><a href="#cb1-1"></a><span class="kw">def</span> my\_functino():</span>
<span id="cb1-2"><a href="#cb1-2"></a>    mystring <span class="op">=</span> <span class="st">&quot;you can also include python cells&quot;</span></span>
<span id="cb1-3"><a href="#cb1-3"></a>    <span class="cf">return</span> mystring</span></code></pre></div>
</div>
<div class="cell markdown" data-tags="\[&quot;heresatag&quot;\]">
<h1 id="code-cells">Code cells</h1>
<h2 id="matplotlib-output-with-metadata">Matplotlib output with metadata</h2>
<p>The below code cell has some metadata attached to it. It also outputs a figure. Both should be included in the output format.</p>
</div>
<div class="cell code" data-execution\_count="7" data-slideshow="{&quot;slide\_type&quot;:&quot;subslide&quot;}" data-tags="\[&quot;mytag&quot;,&quot;parameters&quot;\]">
<div class="sourceCode" id="cb2"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb2-1"><a href="#cb2-1"></a><span class="im">from</span> matplotlib <span class="im">import</span> rcParams, cycler</span>
<span id="cb2-2"><a href="#cb2-2"></a><span class="im">import</span> matplotlib.pyplot <span class="im">as</span> plt</span>
<span id="cb2-3"><a href="#cb2-3"></a><span class="im">import</span> numpy <span class="im">as</span> np</span>
<span id="cb2-4"><a href="#cb2-4"></a>plt.ion()</span>
<span id="cb2-5"><a href="#cb2-5"></a></span>
<span id="cb2-6"><a href="#cb2-6"></a>data <span class="op">=</span> np.random.rand(<span class="dv">2</span>, <span class="dv">1000</span>) <span class="op">\*</span> <span class="dv">100</span></span>
<span id="cb2-7"><a href="#cb2-7"></a>fig, ax <span class="op">=</span> plt.subplots()</span>
<span id="cb2-8"><a href="#cb2-8"></a>ax.scatter(<span class="op">\*</span>data, s<span class="op">=</span>data\[<span class="dv">1</span>\], c<span class="op">=</span>data\[<span class="dv">0</span>\])</span></code></pre></div>
<div class="output execute\_result" data-execution\_count="7">
<pre><code>&lt;matplotlib.collections.PathCollection at 0x7f6e8d6269e8&gt;</code></pre>
</div>
<div class="output display\_data">
<p><img src="outputs/images/e843a737607d119ec5b2750a2bb737c915f1b6e8.png" /></p>
</div>
</div>
<div class="cell markdown">
<h2 id="dataframes">DataFrames</h2>
</div>
<div class="cell code" data-execution\_count="8">
<div class="sourceCode" id="cb4"><pre class="sourceCode python"><code class="sourceCode python"><span id="cb4-1"><a href="#cb4-1"></a><span class="im">import</span> pandas <span class="im">as</span> pd</span>
<span id="cb4-2"><a href="#cb4-2"></a>pd.DataFrame(\[\[<span class="st">&#39;hi&#39;</span>, <span class="st">&#39;there&#39;</span>\], \[<span class="st">&#39;this&#39;</span>, <span class="st">&#39;is&#39;</span>\], \[<span class="st">&#39;a&#39;</span>, <span class="st">&#39;DataFrame&#39;</span>\]\], columns<span class="op">=</span>\[<span class="st">&#39;Word A&#39;</span>, <span class="st">&#39;Word B&#39;</span>\])</span></code></pre></div>
<div class="output execute\_result" data-execution\_count="8">
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>Word A</th>
      <th>Word B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>hi</td>
      <td>there</td>
    </tr>
    <tr>
      <th>1</th>
      <td>this</td>
      <td>is</td>
    </tr>
    <tr>
      <th>2</th>
      <td>a</td>
      <td>DataFrame</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
<div class="cell markdown">
<h1 id="bibliography">Bibliography</h1>
<p>Let's test the bibliography here</p>
<p>Testing this <span class="citation" data-cites="holdgraf\_rapid\_2016">(bibliography Holdgraf et al. 2016)</span></p>
<p><span class="citation" data-cites="holdgraf\_evidence\_2014">Holdgraf et al. (2014)</span></p>
</div>
<div class="cell markdown">
<h3 id="the-actual-bibliography">The actual bibliography</h3>
<p>The bibliography will be placed at the end of the file</p>
</div>
<div id="refs" class="references" role="doc-bibliography">
<div id="ref-holdgraf\_evidence\_2014">
<p>Holdgraf, Christopher Ramsay, Wendy de Heer, Brian N. Pasley, and Robert T. Knight. 2014. “Evidence for Predictive Coding in Human Auditory Cortex.” In <em>International Conference on Cognitive Neuroscience</em>. Brisbane, Australia, Australia: Frontiers in Neuroscience.</p>
</div>
<div id="ref-holdgraf\_rapid\_2016">
<p>Holdgraf, Christopher Ramsay, Wendy de Heer, Brian N. Pasley, Jochem W. Rieger, Nathan Crone, Jack J. Lin, Robert T. Knight, and Frédéric E. Theunissen. 2016. “Rapid Tuning Shifts in Human Auditory Cortex Enhance Speech Intelligibility.” <em>Nature Communications</em> 7 (May): 13654. <a href="https://doi.org/10.1038/ncomms13654">https://doi.org/10.1038/ncomms13654</a>.</p>
</div>
</div>
</body>
</html>


[Source](https://predictablynoisy.com/posts/2019/2019-11-11-ipynb_pandoc/)