{\# basic/searchresults.html ~~~~~~~~~~~~~~~~~~~~~~~~ Template for the body of the search results page. :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#}

# {{ \_('Search') }}

From here you can search these documents. Enter your search words into the box below and click "search".

<span id="search-progress" style="padding-left: 10px"></span>

{%- if search\_performed %}

## {{ \_('Search Results') }}

{%- if not search\_results %}

{{ \_('Your search did not match any documents. Please make sure that all words are spelled correctly and that you\\'ve selected enough categories.') }}

{%- endif %} {%- endif %}

{%- if search\_results %}

- [{{ caption }}](%7B%7B%20docroot%20%7D%7D%7B%7B%20href%20%7D%7D/?highlight=%7B%7B%20q%20%7D%7D) {{ context|e }}

{%- endif %}
