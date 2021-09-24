{\# basic/domainindex.html ~~~~~~~~~~~~~~~~~~~~~~ Template for domain indices (module index, ...). :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#} {%- extends "layout.html" %} {% set title = indextitle %} {% block extrahead %} {{ super() }} {% if not embedded and collapse\_index %}

{% endif %} {% endblock %} {% block body %} {%- set groupid = idgen() %}

# {{ indextitle }}

{%- for (letter, entries) in content %} [**{{ letter }}**](#cap-%7B%7B%20letter%20%7D%7D) {%- if not loop.last %} | {% endif %} {%- endfor %}

{%- for letter, entries in content %}



**{{ letter }}**

{%- for (name, grouptype, page, anchor, extra, qualifier, description) in entries %}

{% if grouptype == 1 -%} <embed src="%7B%7B%20pathto(&#39;_static/minus.png&#39;,%201)%20%7D%7D" id="toggle-{{ groupid.next() }}" class="toggler" /> {%- endif %}

{% if grouptype == 2 %}   {% endif %} {% if page %}[{% endif -%} `{{ name|e }}` {%- if page %}](<%7B%7B%20pathto(page)%20%7D%7D#%7B%7B%20anchor%20%7D%7D>){% endif %} {%- if extra %} _({{ extra|e }})_{% endif -%}

{% if qualifier %}**{{ qualifier|e }}:**{% endif %} _{{ description|e }}_

{%- endfor %} {%- endfor %}

{% endblock %}
