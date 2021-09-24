{\# basic/searchbox.html ~~~~~~~~~~~~~~~~~~~~ Sphinx sidebar template: quick search box. :copyright: Copyright 2007-2013 by the Sphinx team, see AUTHORS. :license: BSD, see LICENSE for details. \#} {%- if pagename != "search" %}

### {{ \_('Quick search') }}

{{ \_('Enter search terms or a module, class or function name.') }}

{%- endif %}
