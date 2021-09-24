{\# basic/search.html ~~~~~~~~~~~~~~~~~ Template for the search page. :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#} {%- extends "layout.html" %} {% set title = \_('Search') %} {% set script\_files = script\_files + \['\_static/searchtools.js'\] %} {% block extrahead %}

{\# this is used when loading the search index using $.ajax fails, such as on Chrome for documents on localhost \#}

{{ super() }} {% endblock %} {% block body %}

# {{ \_('Search') }}

{% trans %}Please activate JavaScript to enable the search functionality.{% endtrans %}

{% trans %}From here you can search these documents. Enter your search words into the box below and click "search". Note that the search function will automatically search for all of the words. Pages containing fewer words won't appear in the result list.{% endtrans %}

<span id="search-progress" style="padding-left: 10px"></span>

{% if search\_performed %}

## {{ \_('Search Results') }}

{% if not search\_results %}

{{ \_('Your search did not match any documents. Please make sure that all words are spelled correctly and that you\\'ve selected enough categories.') }}

{% endif %} {% endif %}

{% if search\_results %}

- [{{ caption }}](<%7B%7B%20pathto(item.href)%20%7D%7D>) {{ context|e }}

{% endif %}

{% endblock %}
