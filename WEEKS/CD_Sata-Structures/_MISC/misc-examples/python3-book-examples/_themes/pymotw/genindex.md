{\# basic/genindex.html ~~~~~~~~~~~~~~~~~~~ Template for an "all-in-one" index. :copyright: Copyright 2007-2016 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#} {% macro indexentries(firstname, links) %}

{%- if links -%} [{%- if links\[0\]\[0\] %}**{% endif -%} {{ firstname|e }} {%- if links\[0\]\[0\] %}**{% endif -%}](%7B%7B%20links%5B0%5D%5B1%5D%20%7D%7D) {%- for ismain, link in links\[1:\] -%} , [{% if ismain %}**{% endif -%} \[{{ loop.index }}\] {%- if ismain %}**{% endif -%}](%7B%7B%20link%20%7D%7D) {%- endfor %} {%- else %} {{ firstname|e }} {%- endif %}

{% endmacro %} {%- extends "layout.html" %} {% set title = \_('Index') %} {% block body %}

# {{ \_('Index') }}

{% for key, dummy in genindexentries -%} [**{{ key }}**](#%7B%7B%20key%20%7D%7D) {% if not loop.last %}| {% endif %} {%- endfor %}

{%- for key, entries in genindexentries %}

## {{ key }}

{%- for column in entries|slice(2) if column %}

{%- for entryname, (links, subitems, \_) in column %} {{ indexentries(entryname, links) }} {%- if subitems %}

{%- for subentryname, subentrylinks in subitems %} {{ indexentries(subentryname, subentrylinks) }} {%- endfor %}

{%- endif -%} {%- endfor %}

{%- endfor %}

{% endfor %} {% endblock %} {% block sidebarrel %} {% if split\_index %}

#### {{ \_('Index') }}

{% for key, dummy in genindexentries -%} [**{{ key }}**](<%7B%7B%20pathto('genindex-'%20+%20key)%20%7D%7D>) {% if not loop.last %}| {% endif %} {%- endfor %}

[**{{ \_('Full index on one page') }}**](<%7B%7B%20pathto('genindex-all')%20%7D%7D>)

{% endif %} {{ super() }} {% endblock %}
