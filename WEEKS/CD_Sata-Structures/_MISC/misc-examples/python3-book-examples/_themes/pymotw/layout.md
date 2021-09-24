{%- set titlesuffix = " — "|safe + docstitle|e %} {%- macro social\_link(symbol, url, title, link\_text) -%} <a href="%7B%7Burl%7D%7D" class="sociallink" title="{{title}}"><em></em> {%- if link_text -%} {{link_text}}{%- endif -%}</a> {%- endmacro -%} {%- set rss\_link\_text = rss\_link\_text is not defined and None or rss\_link\_text -%} {%- macro twitter\_link() -%} {{ social\_link('fa-twitter', 'http://www.twitter.com/pymotw', 'Twitter', None) }} {%- endmacro -%} {%- macro rss\_link() -%} {{ social\_link('fa-rss-square', 'http://feeds.doughellmann.com/PyMOTW', "Subscribe via RSS", rss\_link\_text) }} {%- endmacro -%}

<a href="%7B%7B%20pathto(master_doc)%20%7D%7D" class="pure-menu-heading"><embed src="%7B%7B%20pathto(&#39;_static/logo.png&#39;,%201)%20%7D%7D" /> PyMOTW-3</a>

- [ Module Index](<%7B%7B%20pathto('py-modindex')%20%7D%7D>)
- [ Index](<%7B%7B%20pathto('genindex')%20%7D%7D>)
- {{ twitter\_link() }}
- {{ rss\_link() }}

{\# Always leave the UL present, even if we don't put anything in it, to ensure the menubar height is calculated properly. \#}

- [ {{ parent.title }}](%7B%7B%20parent.link%7Ce%20%7D%7D)

{% block body %} {% endblock %}

{%- if prev %} <a href="%7B%7B%20prev.link%7Ce%20%7D%7D" id="prev-link" title="{{ _(&#39;previous chapter&#39;) }}"><em></em> {{ prev.title }}</a> {%- endif %} {%- if next %} <a href="%7B%7B%20next.link%7Ce%20%7D%7D" id="next-link" title="{{ _(&#39;next chapter&#39;) }}">{{ next.title }} <em></em></a> {%- endif %}

{%- for sidebartemplate in sidebars %}

{%- include sidebartemplate %}

{%- endfor %}

#### This Site

- [ Module Index](<%7B%7B%20pathto('py-modindex')%20%7D%7D>)
- [ Index](<%7B%7B%20pathto('genindex')%20%7D%7D>)

{\#- 1-3 -\#}

{{ social\_link('fa-home', pathto(master\_doc), 'Home', None) }} {{ social\_link('fa-user', pathto('about'), 'About', None) }} {{ twitter\_link() }} {{ rss\_link() }} {{ social\_link('fa-envelope', 'http://feedburner.google.com/fb/a/mailverify?uri=PyMOTW&loc=en\_US', 'Subscribe via Email', None) }}

[© Copyright {{ copyright }}](<%7B%7B%20pathto('about')%20%7D%7D>)

{\#- [<embed src="%7B%7B%20pathto(&#39;_static/cc-40-by-nc-sa.png&#39;,%201)%20%7D%7D" width="88" height="31" />](http://creativecommons.org/licenses/by-nc-sa/4.0/deed.en_US) -\#} [<img src="data:image/png;base64,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" alt="Creative Commons License BY-NC-SA" width="88" height="31" />](http://creativecommons.org/licenses/by-nc-sa/4.0/deed.en_US)

{\#- footer-content -\#}

{\#- 1-3 -\#}

#### Other Writing

- [ Blog](https://doughellmann.com/)
- [ The Python Standard Library By Example](https://doughellmann.com/books/the-python-3-standard-library-by-example/)

{\#- 1-3 -\#}
