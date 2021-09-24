{\# basic/genindex-split.html ~~~~~~~~~~~~~~~~~~~~~~~~~ Template for a "split" index overview page. :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#} {%- extends "layout.html" %} {% set title = \_('Index') %} {% block body %}

# {{ \_('Index') }}

{{ \_('Index pages by letter') }}:

{% for key, dummy in genindexentries -%} [**{{ key }}**](<%7B%7B%20pathto('genindex-'%20+%20key)%20%7D%7D>) {% if not loop.last %}| {% endif %} {%- endfor %}

[**{{ \_('Full index on one page') }}** ({{ \_('can be huge') }})](<%7B%7B%20pathto('genindex-all')%20%7D%7D>)

{% endblock %} {% block sidebarrel %} {% if split\_index %}

#### Index

{% for key, dummy in genindexentries -%} [**{{ key }}**](<%7B%7B%20pathto('genindex-'%20+%20key)%20%7D%7D>) {% if not loop.last %}| {% endif %} {%- endfor %}

[**{{ \_('Full index on one page') }}**](<%7B%7B%20pathto('genindex-all')%20%7D%7D>)

{% endif %} {{ super() }} {% endblock %}
